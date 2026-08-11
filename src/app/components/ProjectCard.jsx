import Image from "next/image";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import PropTypes from "prop-types";

export default function ProjectCard({ project }) {
  const projectTitle = project.title || project.name;
  const projectUrl = project.live || project.url;

  return (
    <div className="group relative rounded-xl bg-[#0e151b] border border-white/[0.08] overflow-hidden hover:border-[#00f2fe]/30 transition-all duration-300 flex flex-col h-full shadow-lg">
      {/* Top subtle glow line on hover */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00f2fe]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Image Preview Container */}
      {project.image && (
        <div className="relative w-full h-44 overflow-hidden bg-[#090d11]">
          <img
            src={project.image}
            alt={projectTitle}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e151b] via-transparent to-transparent" />
        </div>
      )}


      <div className="p-5 flex flex-col flex-1 relative z-10">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            {project.featured && (
              <span className="font-mono text-[11px] text-[#10b981] border border-[#10b981]/30 bg-[#10b981]/10 rounded-md px-2 py-0.5 font-medium">
                Featured
              </span>
            )}
            <span className="font-mono text-[11px] text-slate-400 border border-white/[0.08] rounded-md px-2 py-0.5">
              2026
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-100 hover:bg-white/5 transition-colors"
                aria-label={`GitHub repo for ${projectTitle}`}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {projectUrl && projectUrl !== false && (
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-[#00f2fe] hover:bg-[#00f2fe]/10 transition-colors"
                aria-label={`Live site for ${projectTitle}`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <h3 className="font-bold text-lg text-slate-100 mb-2 group-hover:text-[#00f2fe] transition-colors flex items-center gap-1.5">
          {projectTitle}
          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-[#00f2fe]" />
        </h3>

        <p className="text-slate-300 text-xs leading-relaxed flex-1 mb-4 line-clamp-3">
          {project.description}
        </p>

        {project.tech && project.tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-white/[0.06]">
            {project.tech.map((t) => (
              <span key={t} className="tag-pill">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    tech: PropTypes.arrayOf(PropTypes.string),
    repo: PropTypes.string,
    live: PropTypes.string,
    url: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    image: PropTypes.string,
    featured: PropTypes.bool,
  }).isRequired,
};

