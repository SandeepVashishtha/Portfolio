"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import CodingStats from "./components/CodingStats";
import ProjectCard from "./components/ProjectCard";
import Skills from "./components/Skills";
import Button from "./components/ui/Button";
import Card from "./components/ui/Card";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  if (!data)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-zinc-400">Loading...</p>
      </div>
    );

  return (
    <main className="mx-auto my-4 max-w-5xl px-6">
      <Card className="border border-white p-8 fade-in-up card-elevated">
        <div className="flex flex-col gap-6">
          <div className="w-full">
            <div className="flex gap-6 flex-row items-center">
              <div className="w-20 h-20 overflow-hidden ring-1 ring-white/10 shrink-0">
                <Image
                  src={data.personal.avatar}
                  alt={data.personal.name}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-50 tracking-tight">
                  Hi, I&apos;m {data.personal.name}
                </h1>
                <p className="text-xs sm:text-sm text-zinc-400 mt-2">
                  {data.personal.title}
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm sm:text-base text-zinc-300 leading-relaxed">
              {data.personal.bio}
            </p>

            <div className="mt-8 flex gap-2 flex-row flex-wrap">
              <Button href="/projects">See My Projects</Button>
              <Button href="#skills">View Skills</Button>
              <Button href="/about">About Me</Button>
              <Button href={`mailto:${data.personal.email}`}>Contact Me</Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Coding Statistics Section */}
      {data.coding && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-zinc-50 mb-4">
            Coding Statistics
          </h2>
          <CodingStats codingData={data.coding} />
        </div>
      )}

      {/* Skills Section */}
      {data.skills && (
        <div className="mt-8" id="skills">
          <h2 className="text-2xl font-semibold text-zinc-50 mb-4">
            Skills & Technologies
          </h2>
          <Skills skills={data.skills} />
        </div>
      )}

      <section className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-zinc-50">
            Featured projects
          </h2>
          <Link
            href="/projects"
            className="text-sm text-zinc-400 hover:text-zinc-200 hover:underline underline-offset-2"
          >
            View all
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="inline-block w-4 h-4 ml-1 -mt-0.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-6">
          {data.projects
            .filter((p) => p.featured)
            .slice(0, 6)
            .map((p, i) => (
              <div
                key={p.name}
                className="fade-in-up-delayed"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <ProjectCard project={p} />
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}
