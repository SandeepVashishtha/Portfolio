import data from "../utils/data";

export default function SiteFooter() {


  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#090d11] py-10 text-center text-xs text-slate-400 font-mono">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>
          Designed & Built by{" "}
          <span className="text-[#00f2fe] font-medium">
            {data?.personal?.name || "Sandeep Vashishtha"}
          </span>
        </p>
        {data && (
          <div className="flex items-center gap-4">
            <a
              href={data.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00f2fe] transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href={data.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00f2fe] transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href={data.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00f2fe] transition-colors"
            >
              Twitter / X
            </a>
          </div>
        )}
      </div>
    </footer>
  );
}

