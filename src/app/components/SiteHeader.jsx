"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Twitter, Menu, X, Linkedin } from "lucide-react";

import Button from "./ui/Button";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="backdrop-blur-sm sticky top-0 z-20 w-full border-b border-white/8 bg-black/30 site-header-compact">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-4 min-w-0">
          <Link
            href="/"
            className="text-base sm:text-lg font-bold tracking-tight text-zinc-50 accent-underline accent-text micro-anim truncate"
            onClick={closeMenu}
          >
            {data?.personal.name || "Portfolio"}
          </Link>
        </div>

        <nav className="flex items-center gap-2 sm:gap-4 text-sm text-zinc-300 shrink-0">
          {/* Social links - responsive sizing */}
          {data && (
            <div className="ml-2 sm:ml-4 flex items-center gap-2 sm:gap-3">
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

          <button
            onClick={toggleMenu}
            className="p-2 social-button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </nav>
      </div>

      {/* Menu - shown when hamburger is clicked */}
      {isOpen && (
        <div>
          <div className="mx-auto max-w-6xl px-4 py-3 flex justify-center flex-col sm:flex-row gap-2">
            <Button
              href="/"
              className="border-white/60 border block px-3 py-2 rounded-none hover:underline underline-offset-2 transition-colors text-zinc-300 hover:text-zinc-100"
              onClick={closeMenu}
            >
              Home
            </Button>
            <Button
              href="/projects"
              className="border-white/60 border block px-3 py-2 rounded-none hover:underline underline-offset-2 transition-colors text-zinc-300 hover:text-zinc-100"
              onClick={closeMenu}
            >
              Projects
            </Button>
            <Button
              href="/about"
              className="border-white/60 border block px-3 py-2 rounded-none hover:underline underline-offset-2 transition-colors text-zinc-300 hover:text-zinc-100"
              onClick={closeMenu}
            >
              About
            </Button>
            {data && (
              <Button
                href={`mailto:${data.personal.email}`}
                className="border-white/60 border block px-3 py-2 rounded-none hover:underline underline-offset-2 transition-colors text-zinc-300 hover:text-zinc-100"
                onClick={closeMenu}
              >
                Contact
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
