import PropTypes from "prop-types";

import Badge from "./ui/Badge";
import Button from "./ui/Button";
import Card from "./ui/Card";

export default function ProjectCard({ project }) {
  return (
    <Card className="h-full flex flex-col">
      <h3 className="text-base sm:text-lg font-semibold text-zinc-50">
        {project.title || project.name}
      </h3>
      <p className="mt-3 text-xs sm:text-sm text-zinc-300 wrap-break-word grow leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-zinc-400 gap-3 mt-4">
        <div className="flex flex-wrap gap-2 max-w-full">
          {project.tech?.map((t) => (
            <Badge key={t} className="border-white/20">
              {t}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2 shrink-0">
          {project.repo && (
            <Button
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              aria-label={`View repository for ${
                project.title || project.name
              }`}
              className="px-3 py-2 text-xs"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
                className="opacity-90"
              >
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  fill="currentColor"
                />
              </svg>
              <span>Repo</span>
            </Button>
          )}
          {(project.live || project.url) && project.url !== false && (
            <Button
              href={project.live || project.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open live site for ${project.title || project.name}`}
              className="px-3 py-2 text-xs"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
                className="opacity-90"
              >
                <path
                  d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"
                  fill="currentColor"
                />
                <path
                  d="M5 5h5V3H3v7h2V5zm0 14v-5H3v7h7v-2H5z"
                  fill="currentColor"
                  opacity="0.9"
                />
              </svg>
              <span>Live</span>
            </Button>
          )}
        </div>
      </div>
    </Card>
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
  }).isRequired,
};
