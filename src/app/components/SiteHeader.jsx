"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, Twitter, Menu, X, Linkedin } from "lucide-react";
import data from "../utils/data";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#090d11]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 sm:px-6 h-16">
        <Link
          href="/"
          className="text-base sm:text-lg font-bold tracking-tight text-slate-100 hover:text-[#00f2fe] transition-colors"
          onClick={closeMenu}
        >
          {data?.personal?.name || "Sandeep Vashishtha"}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="text-slate-400 hover:text-[#00f2fe] transition-colors">
            Home
          </Link>
          <Link href="/projects" className="text-slate-400 hover:text-[#00f2fe] transition-colors">
            Projects
          </Link>
          <Link href="/about" className="text-slate-400 hover:text-[#00f2fe] transition-colors">
            About
          </Link>

          {data?.social && (
            <div className="flex items-center gap-2 pl-4 border-l border-white/10">
              <a
                href={data.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={data.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={data.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
                aria-label="Twitter (X)"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          )}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-slate-100"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0e151b] px-4 py-4 space-y-3">
          <Link
            href="/"
            className="block text-slate-300 hover:text-[#00f2fe] text-sm py-1"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="block text-slate-300 hover:text-[#00f2fe] text-sm py-1"
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="block text-slate-300 hover:text-[#00f2fe] text-sm py-1"
            onClick={closeMenu}
          >
            About
          </Link>
          {data?.personal?.email && (
            <a
              href={`mailto:${data.personal.email}`}
              className="block text-[#00f2fe] text-sm font-semibold py-1"
              onClick={closeMenu}
            >
              Contact Me
            </a>
          )}
        </div>
      )}
    </header>
  );
}

