import PropTypes from "prop-types";

export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`tag-badge micro-anim ${className} border-white/20 text-xs`}
    >
      {children}
    </span>
  );
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
