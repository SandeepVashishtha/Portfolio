"use client";

import { useEffect, useState } from "react";

export default function AboutPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error('Error loading data:', err));
  }, []);

  if (!data) return <div className="min-h-screen flex items-center justify-center"><p className="text-zinc-400">Loading...</p></div>;

  return (
    <main className="mx-auto my-12 px-6">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-zinc-50 tracking-tight">
          About
        </h1>
      </div>
      <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
        {data.about.description}
      </p>
      <div className="mt-8 space-y-2 text-sm sm:text-base">
        <p className="text-zinc-300">
          <span className="text-zinc-400">GitHub:</span>{" "}
          <a
            className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
            href={data.social.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.personal.github}
          </a>
        </p>
        <p className="text-zinc-300">
          <span className="text-zinc-400">X:</span>{" "}
          <a
            className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
            href={data.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            @{data.social.twitter.split('/').pop()}
          </a>
        </p>
        <p className="text-zinc-300">
          <span className="text-zinc-400">LinkedIn:</span>{" "}
          <a
            className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
            href={data.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.social.linkedin.split('/in/').pop()}
          </a>
        </p>
        <p className="text-zinc-300">
          <span className="text-zinc-400">Email:</span>{" "}
          <a
            className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
            href={`mailto:${data.personal.email}`}
          >
            {data.personal.email}
          </a>
        </p>
      </div>
    </main>
  );
}
