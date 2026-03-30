import { NextResponse } from "next/server";

const LEETCODE_GRAPHQL_URL = "https://leetcode.com/graphql";
const ALFA_LEETCODE_URL = "https://alfa-leetcode-api.onrender.com";

const USER_STATS_QUERY = `
  query userPublicProfile($username: String!) {
    matchedUser(username: $username) {
      profile {
        ranking
      }
      userCalendar {
        streak
      }
      submitStats: submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
        }
      }
    }
    userContestRanking(username: $username) {
      rating
      globalRanking
      topPercentage
    }
  }
`;

function getCountByDifficulty(acSubmissionNum, difficulty) {
  if (!Array.isArray(acSubmissionNum)) return 0;

  const entry = acSubmissionNum.find((item) => item.difficulty === difficulty);
  return Number(entry?.count ?? 0);
}

async function fetchWithTimeout(url, options = {}, timeoutMs = 9000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
      cache: "no-store",
    });

    return response;
  } finally {
    clearTimeout(timeoutId);
  }
}

async function getLeetCodeGraphQLStats(username) {
  const response = await fetchWithTimeout(LEETCODE_GRAPHQL_URL, {
    method: "POST",
    body: JSON.stringify({
      query: USER_STATS_QUERY,
      variables: { username },
    }),
  });

  if (!response.ok) {
    throw new Error(`GraphQL request failed with status ${response.status}`);
  }

  const payload = await response.json();

  if (payload.errors?.length) {
    throw new Error(payload.errors[0]?.message || "LeetCode GraphQL error");
  }

  const matchedUser = payload?.data?.matchedUser;
  const contest = payload?.data?.userContestRanking;

  if (!matchedUser) {
    throw new Error("LeetCode user not found");
  }

  const acSubmissionNum = matchedUser?.submitStats?.acSubmissionNum || [];

  return {
    solved: getCountByDifficulty(acSubmissionNum, "All"),
    easy: getCountByDifficulty(acSubmissionNum, "Easy"),
    medium: getCountByDifficulty(acSubmissionNum, "Medium"),
    hard: getCountByDifficulty(acSubmissionNum, "Hard"),
    streak: Number(matchedUser?.userCalendar?.streak ?? 0),
    ranking: Number(matchedUser?.profile?.ranking ?? 0),
    rating: contest?.rating ? Math.round(contest.rating) : "N/A",
    globalRank:
      contest?.globalRanking ??
      (contest?.topPercentage ? `Top ${contest.topPercentage}%` : "Unranked"),
  };
}

async function getAlfaFallback(username) {
  try {
    const [solvedResponse, contestResponse] = await Promise.all([
      fetchWithTimeout(`${ALFA_LEETCODE_URL}/${username}/solved`),
      fetchWithTimeout(`${ALFA_LEETCODE_URL}/${username}/contest`),
    ]);

    if (!solvedResponse.ok) {
      return null;
    }

    const solvedData = await solvedResponse.json();
    const contestData = contestResponse.ok ? await contestResponse.json() : null;

    return {
      solved: Number(solvedData?.solvedProblem ?? 0),
      easy: Number(solvedData?.easySolved ?? 0),
      medium: Number(solvedData?.mediumSolved ?? 0),
      hard: Number(solvedData?.hardSolved ?? 0),
      ranking: Number(solvedData?.ranking ?? 0),
      streak: Number(solvedData?.streak ?? 0),
      rating: contestData?.contestRating
        ? Math.round(contestData.contestRating)
        : "N/A",
      globalRank:
        contestData?.contestGlobalRanking ??
        (contestData?.topPercentage
          ? `Top ${contestData.topPercentage}%`
          : "Unranked"),
    };
  } catch {
    return null;
  }
}

export async function GET(request, { params }) {
  const username = params?.username;

  if (!username) {
    return NextResponse.json(
      { error: "LeetCode username is required" },
      { status: 400 }
    );
  }

  try {
    const [primary, fallback] = await Promise.all([
      getLeetCodeGraphQLStats(username),
      getAlfaFallback(username),
    ]);

    return NextResponse.json({
      username,
      solved: primary.solved,
      easy: primary.easy,
      medium: primary.medium,
      hard: primary.hard,
      streak: primary.streak ?? fallback?.streak ?? 0,
      ranking: primary.ranking || fallback?.ranking || 0,
      rating: primary.rating !== "N/A" ? primary.rating : fallback?.rating || "N/A",
      globalRank: primary.globalRank || fallback?.globalRank || "Unranked",
    });
  } catch (error) {
    console.error("LeetCode API route error:", error);

    const fallback = await getAlfaFallback(username);
    if (fallback) {
      return NextResponse.json({ username, ...fallback });
    }

    return NextResponse.json(
      { error: "Failed to load LeetCode stats" },
      { status: 502 }
    );
  }
}
