export async function getGitHubStats(username) {
  try {
    const response = await fetch(
      `/api/github/${encodeURIComponent(username)}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch GitHub stats");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    throw error;
  }
}