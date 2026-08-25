function Input({ name, id, label, type, ...props }) {
  return (
    <div className="relative capitalize">
      <input
        type={type}
        name={name}
        id={id}
        placeholder=" "
        {...props}
        className="peer w-full px-3 pt-5 pb-1.75 bg-transparent border border-primary text-formInput focus:outline-none"
      />
      <label
        aria-label={label}
        htmlFor={id}
        className="
        pointer-events-none
        transition-all ease-out
        absolute left-3 top-1.75 text-xs text-text-muted 
        peer-placeholder-shown:top-4
        peer-placeholder-shown:text-formInput
        peer-focus:top-1.75
        peer-focus:text-xs
        "
      >
        {label}
      </label>
    </div>
  );
}

export default Input;
