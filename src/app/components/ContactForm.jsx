"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Twitter, Send, CheckCircle2 } from "lucide-react";
import data from "../utils/data";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [errorMsg, setErrorMsg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to send message.");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("Error submitting contact form:", err);
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      value: data.personal.email,
      href: `mailto:${data.personal.email}`,
    },
    {
      icon: Github,
      label: "GitHub",
      value: `@${data.personal.github}`,
      href: data.social.github,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "in/SandeepVashishtha",
      href: data.social.linkedin,
    },
    {
      icon: Twitter,
      label: "Twitter / X",
      value: "@vsandeep_11",
      href: data.social.twitter,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-[#070b0e] text-slate-100 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <span className="font-mono text-xs text-[#00f2fe] tracking-widest uppercase">&#47;&#47; GET IN TOUCH</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-50 mt-1 tracking-tight">Contact</h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Have a project idea, opportunity, or just want to say hi? I&apos;d love to hear from you.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-8 items-start">
          {/* Left Column: Platforms */}
          <div className="space-y-5">
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-mono">
              The best way to reach me is via email. I typically respond within 24–48 hours. You can also find me on these platforms:
            </p>

            <div className="space-y-3">
              {socialLinks.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-xl bg-[#0d131a]/80 border border-white/10 hover:border-white/20 hover:bg-[#111922] transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 group-hover:text-white group-hover:bg-white/10 transition-all flex-shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] text-slate-500 font-mono mb-0.5">{label}</div>
                    <div className="text-xs sm:text-sm font-mono text-slate-300 group-hover:text-white truncate">{value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form Box */}
          <div>
            <div className="relative p-6 sm:p-8 rounded-2xl bg-[#0a0f15] border border-white/10 shadow-2xl">
              {/* Decorative top circle tab */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full border border-white/10 bg-[#0a0f15] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white/30" />
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="inline-flex p-3 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100">Message Sent!</h3>
                  <p className="text-sm text-slate-400 max-w-sm mx-auto">
                    Thank you for reaching out. I&apos;ll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 text-xs font-mono text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">
                        Name <span className="text-[#00f2fe]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#121922] border border-white/10 rounded-xl text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#00f2fe]/40 transition-all font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">
                        Email <span className="text-[#00f2fe]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@company.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#121922] border border-white/10 rounded-xl text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#00f2fe]/40 transition-all font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Subject <span className="text-[#00f2fe]">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry / Collaboration / Just saying hi"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#121922] border border-white/10 rounded-xl text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-white/30 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Message <span className="text-[#00f2fe]">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, idea, or opportunity..."
                      className="w-full px-3.5 py-2.5 text-sm bg-[#121922] border border-white/10 rounded-xl text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-white/30 transition-all resize-none"
                    />
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono">
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-2 py-3 px-6 rounded-xl bg-white text-zinc-950 font-bold text-sm hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
