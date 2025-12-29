import PropTypes from "prop-types";

export default function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-none border border-white/15 p-6 card-elevated micro-anim mb-4 card-masonry ${className}`}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
