"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Sparkles } from "lucide-react";

import data from "./utils/data";

import CodingStats from "./components/CodingStats";
import ProjectCard from "./components/ProjectCard";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";

export default function Home() {
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const baseProjects =
    filter === "featured"
      ? data.projects.filter((p) => p.featured)
      : data.projects;

  const filteredProjects = showAll ? baseProjects : baseProjects.slice(0, 6);

  return (
    <main className="min-h-screen bg-[#090d11] text-slate-100">
      {/* Hero Section with Cover Image Banner */}
      <section className="relative flex flex-col overflow-hidden pb-16">
        {/* Cover Landscape Image */}
        <div className="relative w-full h-[220px] sm:h-[280px] md:h-[320px] overflow-hidden bg-gradient-to-br from-[#0c1820] via-[#102430] to-[#090d11]">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&q=80"
            alt="Cover Landscape"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090d11] via-[#090d11]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#090d11]/40 via-transparent to-[#090d11]/40" />

          {/* Inspirational Subtitle Quote Overlay */}
          <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8">
            <p className="font-serif italic text-white/90 text-base sm:text-xl md:text-2xl tracking-wide leading-relaxed text-center max-w-3xl drop-shadow-md">
              &quot; Giving up not in the blood sir, not in the blood&quot;
            </p>
          </div>
        </div>

        {/* Profile Avatar Header & Content Overlay */}
        <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-8">
          {/* Floating Circular Avatar */}
          <div className="absolute -top-14 sm:-top-16 left-4 sm:left-8">
            <div className="relative w-[100px] h-[100px] sm:w-[125px] sm:h-[125px] rounded-full ring-4 ring-[#090d11] overflow-hidden bg-[#0e151b] shadow-2xl">
              <Image
                src={data.personal.avatar}
                alt={data.personal.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Main Hero Bio Details */}
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 pt-16 sm:pt-14 relative z-10">
          <div className="fade-in-up">
            {/* Status Pill Badge */}
            <div className="mb-4">
              {/* <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#10b981]/30 bg-[#10b981]/10 text-[#10b981] text-xs font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
                </span>
                Open to full-time roles & open source collaboration
              </span> */}
            </div>

            {/* Name Heading */}
            <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl text-slate-50 leading-tight tracking-tight mb-2">
              {data.personal.name}
            </h1>

            {/* Subtitle bullet list */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-5 text-slate-400 text-sm sm:text-base font-mono">
              <span>Full Stack Engineer</span>
              <span>&bull;</span>
              <span>Java & Spring boot</span>
              <span>&bull;</span>
              <span>Open-Source Contributor</span>
            </div>

            {/* Concise Bio */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              {data.personal.bio}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a href="#projects" className="btn-primary">
                <span>View Projects</span>
                <Sparkles className="w-4 h-4" />
              </a>
              <a href={`mailto:${data.personal.email}`} className="btn-outline">
                Contact Me
              </a>
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-2">
              <span className="text-slate-500 text-xs font-mono mr-2">Find me on &mdash;</span>
              {data.social?.github && (
                <a
                  href={data.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="social-button"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {data.social?.linkedin && (
                <a
                  href={data.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="social-button"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {data.social?.twitter && (
                <a
                  href={data.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="social-button"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}
              <a
                href={`mailto:${data.personal.email}`}
                aria-label="Email"
                className="social-button"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub & Coding Activity Section */}
      {data.coding && (
        <section className="py-12 bg-[#0c1217]/60 border-y border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-4 sm:px-8">
            <div className="mb-6">
              <span className="font-mono text-xs text-[#00f2fe] tracking-widest uppercase">&#47;&#47; analytics</span>
              <h2 className="text-2xl font-bold text-slate-100 mt-1">Coding Activity & Stats</h2>
            </div>
            <CodingStats codingData={data.coding} />
          </div>
        </section>
      )}

      {/* Projects Showcase Section */}
      <section id="projects" className="py-20 max-w-5xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="font-mono text-xs text-[#00f2fe] tracking-widest uppercase">&#47;&#47; my work</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 mt-1">Featured Projects</h2>
            <p className="text-slate-400 mt-2 text-sm max-w-xl">
              Scalable web platforms, full-stack applications, and developer tools built with React, Spring Boot, and cloud tech.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1 bg-[#0e151b] border border-white/[0.08] rounded-xl p-1 self-start sm:self-auto">
            <button
              onClick={() => { setFilter("all"); setShowAll(true); }}
              className={`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-colors ${filter === "all"
                ? "bg-[#00f2fe]/10 text-[#00f2fe] border border-[#00f2fe]/20"
                : "text-slate-400 hover:text-slate-200"
                }`}
            >
              All
            </button>
            <button
              onClick={() => { setFilter("featured"); setShowAll(false); }}
              className={`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-colors ${filter === "featured"
                ? "bg-[#00f2fe]/10 text-[#00f2fe] border border-[#00f2fe]/20"
                : "text-slate-400 hover:text-slate-200"
                }`}
            >
              Featured
            </button>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
          {filteredProjects.map((project, i) => (
            <div
              key={project.name}
              className="fade-in-up-delayed"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 btn-outline"
          >
            <span>View All Projects on GitHub</span>
            <Github className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      {data.skills && (
        <section id="skills" className="py-16 bg-[#0c1217]/50 border-t border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-4 sm:px-8">
            <div className="mb-8">
              <span className="font-mono text-xs text-[#00f2fe] tracking-widest uppercase">&#47;&#47; tech stack</span>
              <h2 className="text-3xl font-bold text-slate-50 mt-1">Skills & Technologies</h2>
            </div>
            <Skills skills={data.skills} />
          </div>
        </section>
      )}

      {/* Contact Form Section */}
      <ContactForm />
    </main>
  );
}
