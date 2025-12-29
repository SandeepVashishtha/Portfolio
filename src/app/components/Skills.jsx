import PropTypes from "prop-types";

export default function Skills({ skills }) {
  if (!skills || skills.length === 0) return null;

  return (
    <div className="space-y-5">
      {skills.map((category, idx) => (
        <div
          key={category.category}
          className="fade-in-up"
          style={{ animationDelay: `${idx * 100}ms` }}
        >
          <h3 className="text-lg font-semibold text-zinc-50 mb-2 text-center">
            {category.category}
          </h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {category.items.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-1 px-3 py-2 border border-white/10 rounded-sm bg-white/5 hover:bg-white/10 transition-colors group min-w-[95px]"
              >
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.img}`}
                  alt={skill.name}
                  className="w-8 h-8 object-contain group-hover:scale-110 transition-transform"
                  loading="lazy"
                />
                <span className="text-[10px] text-zinc-300 text-center font-medium leading-tight whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          img: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ),
};
