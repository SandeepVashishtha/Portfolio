export async function getLeetCodeStats(username) {
  try {
    const response = await fetch(`/api/leetcode/${encodeURIComponent(username)}`);

    if (!response.ok) {
      throw new Error("Failed to fetch stats");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching LeetCode stats:", error);
    throw error;
  }
}
