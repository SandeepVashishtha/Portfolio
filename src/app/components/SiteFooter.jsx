"use client";

import { useState, useEffect } from "react";
import data from "../utils/data";

// Inline SVG Icons to avoid external package dependencies
const GithubIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterXIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const CodeIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const ArrowUpRightIcon = () => (
  <svg className="w-3 h-3 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

export default function SiteFooter() {
  const [timeStr, setTimeStr] = useState("");
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      
      const formattedTime = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).toUpperCase();

      const day = now.toLocaleDateString("en-US", { timeZone: "Asia/Kolkata", day: "2-digit" });
      const month = now.toLocaleDateString("en-US", { timeZone: "Asia/Kolkata", month: "long" }).toUpperCase();
      const year = now.toLocaleDateString("en-US", { timeZone: "Asia/Kolkata", year: "numeric" });
      
      const formattedDate = `${day} ${month} ${year}`;

      setTimeStr(formattedTime);
      setDateStr(formattedDate);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    {
      name: "GITHUB",
      url: data?.social?.github || "https://github.com/SandeepVashishtha",
      Icon: GithubIcon,
    },
    {
      name: "LINKEDIN",
      url: data?.social?.linkedin || "https://www.linkedin.com/in/SandeepVashishtha",
      Icon: LinkedinIcon,
    },
    {
      name: "X",
      url: data?.social?.twitter || "https://x.com/vsandeep_11",
      Icon: TwitterXIcon,
    },
    {
      name: "LEETCODE",
      url: `https://leetcode.com/${data?.coding?.leetcode?.username || "sandeepvashishtha"}`,
      Icon: CodeIcon,
    },
    {
      name: "MAIL",
      url: `mailto:${data?.personal?.email || "sandeepvashishtha@outlook.in"}`,
      Icon: MailIcon,
    },
  ];


  return (
    <footer className="w-full border-t border-white/[0.06] bg-[#090d11] pt-8 pb-10 font-mono text-[11px] text-slate-400">
      <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-12">
        {/* Top Row: Links on Left, Location/Time/Date on Right */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left: Social Links */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 font-bold tracking-wider text-slate-300">
            {socialLinks.map((item) => {
              const IconComponent = item.Icon;
              return (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors group"
                >
                  <IconComponent />
                  <span>{item.name}</span>
                  <ArrowUpRightIcon />
                </a>
              );
            })}
          </div>

          {/* Right: Location + Live Time + Date */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-6 tracking-widest text-slate-400">
            <div className="flex items-center gap-2 font-bold text-slate-200">
              <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              <span>INDIA</span>
            </div>
            <span>{timeStr || "09:54:00 AM"}</span>
            <span>{dateStr || "12 AUGUST 2026"}</span>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full border-t border-white/[0.04]" />

        {/* Bottom Row: Centered Copyright */}
        <div className="text-center tracking-widest text-slate-500 uppercase text-[10px]">
          © {new Date().getFullYear()} {(data?.personal?.name || "SANDEEP VASHISHTHA").toUpperCase()}. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}







