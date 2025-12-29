"use client";

import { useEffect, useState } from "react";

import { getLeetCodeStats } from "../../services/getLeetCodeStats";
import PropTypes from "prop-types";

export default function CodingStats({ codingData }) {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!codingData?.leetcode?.username) return;

    async function fetchStats() {
      try {
        setLoading(true);
        const data = await getLeetCodeStats(codingData.leetcode.username);
        setStats(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching LeetCode stats:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, [codingData]);

  if (!codingData) return null;

  return (
    <div className="w-full">
      {/* LeetCode Stats */}
      {codingData.leetcode && (
        <div className="border border-white/15 p-6 rounded-none bg-gradient-to-br from-zinc-900/50 to-zinc-800/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-zinc-50 flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
              </svg>
              LeetCode Stats
              <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full">
                Live
              </span>
            </h3>
            <a
              href={`https://leetcode.com/u/${codingData.leetcode.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-400 hover:text-blue-300 underline underline-offset-2"
            >
              View Profile →
            </a>
          </div>
          
          {loading ? (
            <div className="text-center py-8 text-zinc-400">
              <div className="animate-pulse">Loading stats...</div>
            </div>
        ) : error ? (
            <div className="text-center py-8 text-red-400 text-sm">
              Failed to load stats. Please try again later.
            </div>
          ) : stats ? (
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="text-center p-3 bg-white/5 rounded-sm border border-white/10">
                  <div className="text-2xl font-bold text-yellow-400">
                    {stats.solved}
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">Total Solved</div>
                </div>

                <div className="text-center p-3 bg-white/5 rounded-sm border border-white/10">
                  <div className="text-2xl font-bold text-orange-400">
                    {stats.streak}
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">Streak</div>
                </div>

                <div className="text-center p-3 bg-white/5 rounded-sm border border-white/10">
                  <div className="text-2xl font-bold text-blue-400">
                    {stats.rating !== "N/A" ? Math.round(stats.rating) : "N/A"}
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">Rating</div>
                </div>

                <div className="text-center p-3 bg-white/5 rounded-sm border border-white/10">
                  <div className="text-2xl font-bold text-purple-400">
                    {stats.ranking
                      ? `${(stats.ranking / 1000).toFixed(0)}k`
                      : "N/A"}
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">Rank</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center text-sm">
                <div className="p-2 bg-green-500/10 rounded-sm border border-green-500/20">
                  <div className="text-xl font-bold text-green-400">
                    {stats.easy}
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">Easy</div>
                </div>
                <div className="p-2 bg-yellow-500/10 rounded-sm border border-yellow-500/20">
                  <div className="text-xl font-bold text-yellow-400">
                    {stats.medium}
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">Medium</div>
                </div>
                <div className="p-2 bg-red-500/10 rounded-sm border border-red-500/20">
                  <div className="text-xl font-bold text-red-400">
                    {stats.hard}
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">Hard</div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

CodingStats.propTypes = {
  codingData: PropTypes.shape({
    leetcode: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }),
  }),
};
