import { NextResponse } from "next/server";

const STATS_BASE = "https://github-readme-stats.shion.dev/api";

async function fetchWithTimeout(url, options = {}, timeoutMs = 9000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { ...options, signal: controller.signal });
    return response;
  } finally {
    clearTimeout(timeoutId);
  }
}

/** Parse the <desc> tag out of the SVG to extract stats as JSON */
function parseStatsSvg(svgText) {
  // <desc id="descId">Total Stars Earned: 257, Total Commits  : 3552, Total PRs: 279, Total Issues: 310, Contributed to (last year): 16</desc>
  const descMatch = svgText.match(/<desc[^>]*>([\s\S]*?)<\/desc>/i);
  if (!descMatch) return null;
  const desc = descMatch[1];

  // Rank from <title>: "Sandeep Vashishtha's GitHub Stats, Rank: A+"
  const titleMatch = svgText.match(/<title[^>]*>[\s\S]*?Rank:\s*([^<]+)<\/title>/i);
  const rank = titleMatch ? titleMatch[1].trim() : "N/A";

  function extract(label) {
    const re = new RegExp(label + "\\s*:\\s*([\\d.,k]+)", "i");
    const m = desc.match(re);
    if (!m) return 0;
    const raw = m[1].replace(/,/g, "");
    if (raw.endsWith("k")) return Math.round(parseFloat(raw) * 1000);
    return parseInt(raw, 10) || 0;
  }

  return {
    totalStars: extract("Total Stars Earned"),
    totalCommits: extract("Total Commits"),
    totalPRs: extract("Total PRs"),
    totalIssues: extract("Total Issues"),
    contributedTo: extract("Contributed to \\(last year\\)"),
    rank,
  };
}

/** Fetch the heatmap data from the public contributions API */
async function fetchHeatmap(username) {
  try {
    const response = await fetchWithTimeout(
      "https://github-contributions-api.jogruber.de/v4/" + username + "?y=last",
      { headers: { "User-Agent": "Portfolio/1.0" } }
    );
    if (!response.ok) return { days: [], totalContributions: 0 };
    const data = await response.json();
    const days = (data?.contributions || []).map((d) => ({
      date: d.date,
      count: d.count,
      weekday: new Date(d.date).getDay(),
    }));
    return { days, totalContributions: data?.total?.lastYear ?? 0 };
  } catch {
    return { days: [], totalContributions: 0 };
  }
}

export async function GET(request, { params }) {
  const username = params?.username;

  if (!username) {
    return NextResponse.json(
      { error: "GitHub username is required" },
      { status: 400 }
    );
  }

  try {
    // Fetch stats SVG and heatmap in parallel
    const [svgRes, heatmap] = await Promise.all([
      fetchWithTimeout(
        `${STATS_BASE}?username=${encodeURIComponent(username)}&include_all_commits=true&count_private=true`,
        { headers: { "User-Agent": "Portfolio/1.0", Accept: "image/svg+xml,*/*" } }
      ),
      fetchHeatmap(username),
    ]);

    if (!svgRes.ok) throw new Error("Stats SVG fetch failed: " + svgRes.status);

    const svgText = await svgRes.text();
    const stats = parseStatsSvg(svgText);

    if (!stats) throw new Error("Failed to parse stats SVG");

    const data = {
      username,
      totalStars: stats.totalStars,
      totalCommits: stats.totalCommits,
      totalPRs: stats.totalPRs,
      totalIssues: stats.totalIssues,
      contributedTo: stats.contributedTo,
      rank: stats.rank,
      // Keep these for backwards compat / heatmap
      totalContributions: heatmap.totalContributions,
      totalReviews: 0,
      totalRepos: 0,
      followers: 0,
      days: heatmap.days,
    };

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
      },
    });
  } catch (error) {
    console.error("GitHub stats route error:", error.message);
    return NextResponse.json(
      { error: "Failed to load GitHub stats: " + error.message },
      { status: 502 }
    );
  }
}