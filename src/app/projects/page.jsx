"use client";

import { useEffect, useState } from "react";

import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProjects(data.projects))
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  return (
    <main className="mx-auto my-12 max-w-5xl px-6">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-zinc-50 tracking-tight">
          Projects
        </h1>
        <p className="mt-2 text-sm sm:text-base text-zinc-400">
          A selection of projects I built and maintain.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-1 gap-6">
        {projects.map((p) => (
          <div key={p.name} className="w-full">
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </main>
  );
}
