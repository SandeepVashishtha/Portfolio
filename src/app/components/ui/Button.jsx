import Link from "next/link";

export default function Button({ children, href, className = "", ...props }) {
  if (href) {
    return (
      <Link
        href={href}
        className={`btn-primary micro-anim focus-accent hover:underline underline-offset-2 ${className}`}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`btn-primary micro-anim focus-accent hover:underline underline-offset-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
