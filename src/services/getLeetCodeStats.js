export async function getLeetCodeStats(username) {
  try {
    // Using alfa-leetcode-api as a reliable proxy
    const [solvedResponse, contestResponse] = await Promise.all([
      fetch(`https://alfa-leetcode-api.onrender.com/${username}/solved`),
      fetch(`https://alfa-leetcode-api.onrender.com/${username}/contest`)
    ]);

    if (!solvedResponse.ok) {
      throw new Error("Failed to fetch stats");
    }

    const solvedData = await solvedResponse.json();
    const contestData = contestResponse.ok ? await contestResponse.json() : null;

    return {
      username,
      solved: solvedData.solvedProblem || 0,
      easy: solvedData.easySolved || 0,
      medium: solvedData.mediumSolved || 0,
      hard: solvedData.hardSolved || 0,
      ranking: solvedData.ranking || 0,
      streak: solvedData.streak || 0,
      rating: contestData?.contestRating ? Math.round(contestData.contestRating) : "N/A",
      globalRank: contestData?.contestGlobalRanking || "N/A",
    };
  } catch (error) {
    console.error("Error fetching LeetCode stats:", error);
    throw error;
  }
}
