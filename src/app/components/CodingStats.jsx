"use client";

import { useEffect, useRef, useState } from "react";

import { getGitHubStats } from "../../services/getGitHubStats";
import { getLeetCodeStats } from "../../services/getLeetCodeStats";
import PropTypes from "prop-types";

const CELL_SIZE = 11;
const CELL_GAP = 3;
const MONTH_LABEL_HEIGHT = 18;

const COLORS = [
  "#161b22",
  "#0e4429",
  "#006d32",
  "#26a641",
  "#39d353",
];

function getColor(count) {
  if (count === 0) return COLORS[0];
  if (count <= 3) return COLORS[1];
  if (count <= 6) return COLORS[2];
  if (count <= 9) return COLORS[3];
  return COLORS[4];
}

function gradeFromRank(rank) {
  const map = {
    "A++": { color: "#39d353", stroke: "#39d353", pct: 100 },
    "A+":  { color: "#39d353", stroke: "#39d353", pct: 92  },
    "A":   { color: "#26a641", stroke: "#26a641", pct: 84  },
    "B+":  { color: "#00b4d8", stroke: "#00b4d8", pct: 74  },
    "B":   { color: "#0096c7", stroke: "#0096c7", pct: 64  },
    "C+":  { color: "#f59e0b", stroke: "#f59e0b", pct: 54  },
    "C":   { color: "#ef4444", stroke: "#ef4444", pct: 40  },
  };
  return map[rank] ?? { color: "#39d353", stroke: "#39d353", pct: 80 };
}

function GitHubStatsCard({ stats, username }) {
  const grade = stats.rank ?? "A+";
  const { color, stroke, pct } = gradeFromRank(grade);
  const R = 36;
  const C = 2 * Math.PI * R;
  const dash = (pct / 100) * C;

  const rows = [
    {
      label: "Total Stars Earned",
      value: stats.totalStars ?? "—",
      valueColor: "#f59e0b",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-yellow-400">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
    },
    {
      label: "Total Commits",
      value: stats.totalCommits > 999 ? (stats.totalCommits / 1000).toFixed(1) + "k" : stats.totalCommits,
      valueColor: "#60a5fa",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-blue-400">
          <circle cx="12" cy="12" r="3" /><line x1="12" y1="2" x2="12" y2="9" /><line x1="12" y1="15" x2="12" y2="22" />
        </svg>
      ),
    },
    {
      label: "Total PRs",
      value: stats.totalPRs,
      valueColor: "#a78bfa",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-purple-400">
          <circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><path d="M13 6h3a2 2 0 0 1 2 2v7" /><line x1="6" y1="9" x2="6" y2="21" />
        </svg>
      ),
    },
    {
      label: "Total Issues",
      value: stats.totalIssues,
      valueColor: "#f87171",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-red-400">
          <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      ),
    },
    {
      label: "Contributed to (last year)",
      value: stats.contributedTo ?? stats.totalContributions,
      valueColor: "#34d399",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-emerald-400">
          <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
    },
  ];

  return (
    <div className="rounded-none border border-white/15 bg-gradient-to-br from-zinc-900/60 to-zinc-800/40 p-4 sm:p-5">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase mb-0.5">github stats</p>
          <h4 className="text-sm sm:text-base font-bold" style={{ color }}>
            {username}&apos;s GitHub Stats
          </h4>
        </div>
        <a
          href={"https://github.com/" + username}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-blue-400 hover:text-blue-300 underline underline-offset-2"
        >
          View Profile →
        </a>
      </div>

      {/* Body: stats list + grade ring */}
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Stat rows */}
        <div className="flex-1 space-y-2.5">
          {rows.map(({ icon, label, value, valueColor }) => (
            <div key={label} className="flex items-center justify-between gap-2">
              <span className="flex items-center gap-2 text-xs text-zinc-400">
                {icon}
                <span>{label}:</span>
              </span>
              <span className="text-xs font-bold tabular-nums" style={{ color: valueColor }}>
                {typeof value === "number" ? value.toLocaleString() : value}
              </span>
            </div>
          ))}
        </div>

        {/* Grade ring */}
        <div className="flex-shrink-0 flex flex-col items-center gap-1">
          <svg width="90" height="90" viewBox="0 0 90 90">
            {/* Outer glow track */}
            <circle cx="45" cy="45" r={R} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="9" />
            {/* Track */}
            <circle cx="45" cy="45" r={R} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="7" />
            {/* Progress arc */}
            <circle
              cx="45" cy="45" r={R}
              fill="none"
              stroke={stroke}
              strokeWidth="7"
              strokeLinecap="round"
              strokeDasharray={`${dash} ${C}`}
              strokeDashoffset={C / 4}
              style={{ filter: `drop-shadow(0 0 8px ${stroke}cc)`, transition: "stroke-dasharray 1.2s ease" }}
            />
            {/* Grade text */}
            <text
              x="45" y="50"
              textAnchor="middle"
              dominantBaseline="middle"
              fill={color}
              fontSize="18"
              fontWeight="bold"
              fontFamily="inherit"
              style={{ filter: `drop-shadow(0 0 4px ${color}99)` }}
            >
              {grade}
            </text>
          </svg>
          <span className="text-[10px] text-zinc-500 font-mono tracking-wider">RANK</span>
        </div>
      </div>
    </div>
  );
}

function GitHubHeatmap({ days, totalContributions }) {
  const [tooltip, setTooltip] = useState(null);
  const containerRef = useRef(null);

  if (!days || days.length === 0) return null;

  const weeks = [];
  let currentWeek = [];

  if (days[0].weekday > 0) {
    for (let i = 0; i < days[0].weekday; i++) {
      currentWeek.push(null);
    }
  }

  for (const day of days) {
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }
  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) currentWeek.push(null);
    weeks.push(currentWeek);
  }

  const monthLabels = [];
  const seenMonths = new Set();
  const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  weeks.forEach((week, wi) => {
    const firstReal = week.find((d) => d !== null);
    if (!firstReal) return;
    const month = new Date(firstReal.date).getMonth();
    if (!seenMonths.has(month)) {
      seenMonths.add(month);
      monthLabels.push({ month, weekIndex: wi });
    }
  });

  const svgWidth = weeks.length * (CELL_SIZE + CELL_GAP);
  const svgHeight = MONTH_LABEL_HEIGHT + 7 * (CELL_SIZE + CELL_GAP);

  return (
    <div className="w-full" ref={containerRef}>
      <div style={{ overflowX: "auto", overflowY: "visible", paddingBottom: "4px", display: "flex", justifyContent: "center" }} className="relative">
        <svg width={svgWidth} height={svgHeight} style={{ display: "block" }}>
          {monthLabels.map(({ month, weekIndex }) => (
            <text key={month} x={weekIndex * (CELL_SIZE + CELL_GAP)} y={12} fill="#8b949e" fontSize="10" fontFamily="inherit">
              {monthNames[month]}
            </text>
          ))}
          {weeks.map((week, wi) =>
            week.map((day, di) => {
              if (!day) return null;
              const x = wi * (CELL_SIZE + CELL_GAP);
              const y = MONTH_LABEL_HEIGHT + di * (CELL_SIZE + CELL_GAP);
              return (
                <rect
                  key={day.date}
                  x={x}
                  y={y}
                  width={CELL_SIZE}
                  height={CELL_SIZE}
                  rx={2}
                  ry={2}
                  fill={getColor(day.count)}
                  style={{ cursor: "pointer", transition: "opacity 0.1s" }}
                  onMouseEnter={(e) => {
                    const rect = e.target.getBoundingClientRect();
                    const containerRect = containerRef.current?.getBoundingClientRect();
                    setTooltip({
                      date: day.date,
                      count: day.count,
                      x: rect.left - (containerRect?.left ?? 0) + CELL_SIZE / 2,
                      y: rect.top - (containerRect?.top ?? 0) - 8,
                    });
                  }}
                  onMouseLeave={() => setTooltip(null)}
                />
              );
            })
          )}
        </svg>
        {tooltip && (
          <div
            style={{ position: "absolute", left: tooltip.x, top: tooltip.y, transform: "translate(-50%, -100%)", pointerEvents: "none", zIndex: 50 }}
            className="bg-zinc-800 border border-white/10 text-zinc-100 text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap"
          >
            <span className="font-semibold">{tooltip.count} contribution{tooltip.count !== 1 ? "s" : ""}</span>
            <span className="text-zinc-400 ml-1">on {new Date(tooltip.date + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
          </div>
        )}
      </div>
      <div className="mt-2 flex items-center justify-between flex-wrap gap-2">
        <span className="text-xs text-zinc-400">
          <span className="text-zinc-200 font-semibold">{totalContributions.toLocaleString()}</span> contributions in the last year
        </span>
        <div className="flex items-center gap-1.5 text-xs text-zinc-500">
          <span>Less</span>
          {COLORS.map((c, i) => (
            <span key={i} style={{ display: "inline-block", width: 11, height: 11, background: c, borderRadius: 2, border: "1px solid rgba(255,255,255,0.06)" }} />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  );
}

export default function CodingStats({ codingData }) {
  const [lcStats, setLcStats] = useState(null);
  const [lcLoading, setLcLoading] = useState(true);
  const [lcError, setLcError] = useState(null);

  const [ghStats, setGhStats] = useState(null);
  const [ghLoading, setGhLoading] = useState(true);
  const [ghError, setGhError] = useState(null);

  useEffect(() => {
    if (!codingData?.leetcode?.username) { setLcLoading(false); return; }
    async function fetchLC() {
      try {
        setLcLoading(true);
        const data = await getLeetCodeStats(codingData.leetcode.username);
        setLcStats(data); setLcError(null);
      } catch (err) {
        console.error("Error fetching LeetCode stats:", err);
        setLcError(err.message);
      } finally { setLcLoading(false); }
    }
    fetchLC();
  }, [codingData]);

  useEffect(() => {
    if (!codingData?.github?.username) { setGhLoading(false); return; }
    async function fetchGH() {
      try {
        setGhLoading(true);
        const data = await getGitHubStats(codingData.github.username);
        setGhStats(data); setGhError(null);
      } catch (err) {
        console.error("Error fetching GitHub stats:", err);
        setGhError(err.message);
      } finally { setGhLoading(false); }
    }
    fetchGH();
  }, [codingData]);

  if (!codingData) return null;

  return (
    <div className="w-full space-y-4">
      {codingData.leetcode && (
        <div className="border border-white/15 p-4 sm:p-6 rounded-none bg-gradient-to-br from-zinc-900/50 to-zinc-800/50">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-lg font-semibold text-zinc-50 flex items-center gap-2 flex-wrap leading-tight">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
              </svg>
              LeetCode Stats
              <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full">Live</span>
            </h3>
            <a href={"https://leetcode.com/u/" + codingData.leetcode.username} target="_blank" rel="noopener noreferrer" className="self-start sm:self-auto text-xs text-blue-400 hover:text-blue-300 underline underline-offset-2">
              View Profile →
            </a>
          </div>
          {lcLoading ? (
            <div className="text-center py-8 text-zinc-400"><div className="animate-pulse">Loading stats...</div></div>
          ) : lcError ? (
            <div className="text-center py-8 text-red-400 text-sm">Failed to load stats. {lcError && <span className="block text-xs text-red-300 mt-2">{lcError}</span>}</div>
          ) : lcStats ? (
            <div className="space-y-3">
              {/* Contest rating strip — compact inline */}
              {lcStats.rating !== "N/A" && (
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 px-3 py-2 rounded-sm border border-white/10 bg-white/[0.03]">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">Rating</span>
                    <span className="text-base font-bold text-white">{lcStats.rating.toLocaleString()}</span>
                  </div>
                  <div className="h-4 w-px bg-white/10" />
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">Global</span>
                    <span className="text-sm font-semibold text-zinc-200">{lcStats.globalRank ? lcStats.globalRank.toLocaleString() : "—"}</span>
                  </div>
                  <div className="h-4 w-px bg-white/10" />
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">Attended</span>
                    <span className="text-sm font-semibold text-zinc-200">{lcStats.contestsAttended ?? "—"}</span>
                  </div>
                  {lcStats.topPercentage != null && (
                    <>
                      <div className="h-4 w-px bg-white/10" />
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">Top</span>
                        <span className="text-sm font-semibold" style={{ color: "#4ade80" }}>{lcStats.topPercentage.toFixed(2)}%</span>
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Donut + stat boxes side by side */}
              <div className="flex gap-4 items-center">
                {/* Solved donut — larger & visible */}
                {(() => {
                  const solved = lcStats.solved || 0;
                  const totalProblems = lcStats.totalProblems || 3400;
                  const solvedPct = Math.min(solved / totalProblems, 1);
                  const Rr = 44;
                  const Cc = 2 * Math.PI * Rr;
                  const solvedDash = solvedPct * Cc;
                  return (
                    <div className="flex-shrink-0">
                      <svg width="110" height="110" viewBox="0 0 110 110">
                        <circle cx="55" cy="55" r={Rr} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
                        <circle
                          cx="55" cy="55" r={Rr}
                          fill="none" stroke="#f59e0b" strokeWidth="8"
                          strokeLinecap="round"
                          strokeDasharray={`${solvedDash} ${Cc}`}
                          strokeDashoffset={Cc / 4}
                          style={{ filter: "drop-shadow(0 0 7px #f59e0bcc)", transition: "stroke-dasharray 1.2s ease" }}
                        />
                        <text x="55" y="49" textAnchor="middle" fill="#fbbf24" fontSize="20" fontWeight="bold" fontFamily="inherit">{solved}</text>
                        <text x="55" y="64" textAnchor="middle" fill="#71717a" fontSize="10" fontFamily="inherit">/{totalProblems}</text>
                        <text x="55" y="77" textAnchor="middle" fill="#52525b" fontSize="9" fontFamily="inherit">Solved</text>
                      </svg>
                    </div>
                  );
                })()}

                {/* 3 compact stat boxes stacked vertically */}
                <div className="flex-1 flex flex-col gap-2">
                  <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-sm flex items-center justify-between">
                    <span className="text-[10px] text-zinc-500">Streak</span>
                    <span className="text-sm font-bold" style={{ color: "#fb923c", textShadow: "0 0 8px #fb923c55" }}>{lcStats.streak} 🔥</span>
                  </div>
                  <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-sm flex items-center justify-between">
                    <span className="text-[10px] text-zinc-500">Active Days</span>
                    <span className="text-sm font-bold text-cyan-400">{lcStats.activeDays > 0 ? lcStats.activeDays : "—"}</span>
                  </div>
                  <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-sm flex items-center justify-between">
                    <span className="text-[10px] text-zinc-500">Rank</span>
                    <span className="text-sm font-bold text-purple-400">{lcStats.ranking ? (lcStats.ranking / 1000).toFixed(0) + "k" : "—"}</span>
                  </div>
                </div>
              </div>

              {/* Difficulty progress bars */}
              {(() => {
                const difficulties = [
                  { label: "Easy",   count: lcStats.easy,   total: lcStats.totalEasy   || 958,  color: "#4ade80" },
                  { label: "Medium", count: lcStats.medium, total: lcStats.totalMedium || 2098, color: "#fbbf24" },
                  { label: "Hard",   count: lcStats.hard,   total: lcStats.totalHard   || 962,  color: "#f87171" },
                ];
                return (
                  <div className="space-y-2">
                    {difficulties.map(({ label, count, total, color }) => {
                      const pct = total > 0 ? Math.round((count / total) * 100) : 0;
                      return (
                        <div key={label}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-semibold" style={{ color }}>{label}</span>
                            <span className="text-xs tabular-nums">
                              <span className="font-bold" style={{ color }}>{count}</span>
                              <span className="text-zinc-600">/{total}</span>
                              <span className="text-zinc-600 ml-1">({pct}%)</span>
                            </span>
                          </div>
                          <div className="h-1.5 rounded-full w-full" style={{ background: "rgba(255,255,255,0.06)" }}>
                            <div
                              className="h-1.5 rounded-full transition-all duration-1000"
                              style={{ width: `${pct}%`, background: color, boxShadow: `0 0 6px ${color}88` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })()}
            </div>
          ) : null}
        </div>
      )}

      {codingData.github && (
        <div className="border border-white/15 p-4 sm:p-6 rounded-none bg-gradient-to-br from-zinc-900/50 to-zinc-800/50">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-lg font-semibold text-zinc-50 flex items-center gap-2 flex-wrap leading-tight">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              My GitHub Contributions
              <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full">Live</span>
            </h3>
            <a href={"https://github.com/" + codingData.github.username} target="_blank" rel="noopener noreferrer" className="self-start sm:self-auto text-xs text-blue-400 hover:text-blue-300 underline underline-offset-2">
              View Profile →
            </a>
          </div>
          {ghLoading ? (
            <div className="text-center py-8 text-zinc-400"><div className="animate-pulse">Loading contributions...</div></div>
          ) : ghError ? (
            <div className="text-center py-8 text-red-400 text-sm">
              Failed to load GitHub contributions.
              {ghError && <span className="block text-xs text-red-300 mt-2">{ghError}</span>}
            </div>
          ) : ghStats ? (
            <div className="space-y-4">
              <GitHubStatsCard stats={ghStats} username={codingData.github.username} />
              <GitHubHeatmap days={ghStats.days} totalContributions={ghStats.totalContributions} />
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

CodingStats.propTypes = {
  codingData: PropTypes.shape({
    leetcode: PropTypes.shape({ username: PropTypes.string.isRequired }),
    github: PropTypes.shape({ username: PropTypes.string.isRequired }),
  }),
};

GitHubHeatmap.propTypes = {
  days: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    weekday: PropTypes.number.isRequired,
  })),
  totalContributions: PropTypes.number,
};
