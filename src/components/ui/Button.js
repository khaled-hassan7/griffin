import Link from "next/link";

function Button({ href, children, className = "", onClick, type = "button", ...props }) {
  const baseStyles = `flex justify-center items-center text-button border border-text-primary text-text-primary py-3 font-bold text-center px-7 hover:bg-primary hover:text-white tracking-widest uppercase transition-colors ${className}`;

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={baseStyles} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseStyles} {...props}>
      {children}
    </button>
  );
}

export default Button;