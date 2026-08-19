import Link from "next/link";

function Button({ href, children, className, onClick }) {
  return (
    <Link
      onClick={onClick}
      href={href}
      className={`flex justify-center text-xs border-text-primary border text-text-primary py-3 font-bold text-center px-7 hover:bg-primary hover:text-white tracking-widest uppercase ${className}   `}
    >
      {children}
    </Link>
  );
}

export default Button;
