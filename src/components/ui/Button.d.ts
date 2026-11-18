import type { MouseEvent, ReactElement, ReactNode } from "react";

// Type-only companion for Button.js (implementation untouched).
declare function Button(props: {
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: (event: MouseEvent<Element>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  [key: string]: unknown;
}): ReactElement;

export default Button;
