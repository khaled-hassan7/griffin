import Link from "next/link";

function Button({ href, children, className }) {
  return (
    <Link
      href={href}
      className={`text-xs border-text-primary border text-text-primary py-2 font-bold  px-6 hover:bg-primary hover:text-white tracking-widest uppercase   `}
    >
      {children}
    </Link>
  );
}

export default Button;
