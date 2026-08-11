"use client";

import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import data from "../utils/data";


export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");
  const projects = data.projects;

  const filteredProjects =
    filter === "featured"
      ? projects.filter((p) => p.featured)
      : projects;

  return (
    <main className="min-h-screen bg-[#090d11] text-slate-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="font-mono text-xs text-[#00f2fe] tracking-widest uppercase">&#47;&#47; portfolio</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-50 mt-1">All Projects</h1>
            <p className="text-slate-400 mt-2 text-sm sm:text-base max-w-xl">
              Software applications, open-source projects, and full-stack platforms I&apos;ve engineered.
            </p>
          </div>

          <div className="flex items-center gap-1 bg-[#0e151b] border border-white/[0.08] rounded-xl p-1 self-start sm:self-auto">
            <button
              onClick={() => setFilter("all")}
              className={`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-colors ${
                filter === "all"
                  ? "bg-[#00f2fe]/10 text-[#00f2fe] border border-[#00f2fe]/20"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              All ({projects.length})
            </button>
            <button
              onClick={() => setFilter("featured")}
              className={`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-colors ${
                filter === "featured"
                  ? "bg-[#00f2fe]/10 text-[#00f2fe] border border-[#00f2fe]/20"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Featured ({projects.filter((p) => p.featured).length})
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {filteredProjects.map((p, i) => (
            <div key={p.name} className="fade-in-up w-full" style={{ animationDelay: `${i * 60}ms` }}>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
