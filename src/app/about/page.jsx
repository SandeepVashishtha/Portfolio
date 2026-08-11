"use client";

import { Briefcase, Github, GraduationCap, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import data from "../utils/data";

export default function AboutPage() {


  return (
    <main className="min-h-screen bg-[#090d11] text-slate-100 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        <div>
          <span className="font-mono text-xs text-[#00f2fe] tracking-widest uppercase">&#47;&#47; about.me</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-50 mt-1">Who I Am</h1>
          <p className="text-slate-400 mt-2 text-base">
            Full-stack engineer, open-source maintainer, and cloud developer.
          </p>
        </div>

        {/* Bio Card */}
        <div className="bg-[#0e151b]/80 border border-white/[0.08] rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-xl">
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-body">
            {data.about.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-6 pt-6 border-t border-white/[0.06] text-sm text-slate-400 font-mono">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#00f2fe]" />
              <span>{data.personal.location || "India"}</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#10b981]" />
              <span>Chandigarh University (CSE &apos;26)</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#00f2fe]" />
              <span>GSSoC &apos;25 Admin &bull; 250+ PRs</span>
            </div>
          </div>
        </div>

        {/* Connect / Contact Options */}
        <div>
          <h2 className="text-xl font-bold text-slate-100 mb-4 font-mono">&#47;&#47; get in touch</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href={`mailto:${data.personal.email}`}
              className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.08] bg-[#0e151b] hover:border-[#00f2fe]/40 hover:bg-[#131c24] transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#131c24] border border-white/10 flex items-center justify-center group-hover:border-[#00f2fe]/40 text-[#00f2fe]">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-mono text-slate-400">Email</p>
                <p className="text-sm font-semibold text-slate-200 group-hover:text-slate-100 truncate">
                  {data.personal.email}
                </p>
              </div>
            </a>

            <a
              href={data.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.08] bg-[#0e151b] hover:border-[#00f2fe]/40 hover:bg-[#131c24] transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#131c24] border border-white/10 flex items-center justify-center group-hover:border-[#00f2fe]/40 text-slate-200">
                <Github className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-mono text-slate-400">GitHub</p>
                <p className="text-sm font-semibold text-slate-200 group-hover:text-slate-100 truncate">
                  @{data.personal.github}
                </p>
              </div>
            </a>

            <a
              href={data.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.08] bg-[#0e151b] hover:border-[#00f2fe]/40 hover:bg-[#131c24] transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#131c24] border border-white/10 flex items-center justify-center group-hover:border-[#00f2fe]/40 text-sky-400">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-mono text-slate-400">LinkedIn</p>
                <p className="text-sm font-semibold text-slate-200 group-hover:text-slate-100 truncate">
                  in/{data.social.linkedin.split("/in/").pop()}
                </p>
              </div>
            </a>

            <a
              href={data.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.08] bg-[#0e151b] hover:border-[#00f2fe]/40 hover:bg-[#131c24] transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#131c24] border border-white/10 flex items-center justify-center group-hover:border-[#00f2fe]/40 text-cyan-400">
                <Twitter className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-mono text-slate-400">Twitter / X</p>
                <p className="text-sm font-semibold text-slate-200 group-hover:text-slate-100 truncate">
                  @{data.social.twitter.split("/").pop()}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}


