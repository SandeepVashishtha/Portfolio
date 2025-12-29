"use client";

import { useEffect, useState } from "react";

export default function SiteFooter() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error('Error loading data:', err));
  }, []);

  return (
    <footer className="mt-16 w-full border-t border-white/8 pt-8 pb-12 text-center text-xs sm:text-sm text-white/50">
      <p>
        Made with <span className="text-red-400">♥</span> by{" "}
        <a
          href="/"
          className="font-medium hover:text-white duration-200 transition underline underline-offset-2"
        >
          {data?.personal.name || 'Developer'}
        </a>
      </p>
      {data && (
        <p className="mt-2">
          Source code on{" "}
          <a
            href={`${data.social.github}/portfolio`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:text-white duration-200 transition underline underline-offset-2"
          >
            GitHub
          </a>
        </p>
      )}
    </footer>
  );
}
