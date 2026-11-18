import type { InputHTMLAttributes, ReactElement } from "react";

// Type-only companion for Input.js (implementation untouched).
declare function Input(
  props: {
    name?: string;
    id?: string;
    label?: string;
    type?: string;
  } & InputHTMLAttributes<HTMLInputElement>,
): ReactElement;

export default Input;
