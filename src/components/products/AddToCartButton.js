function AddToCartButton({ disabled, className, children, onClick, ...props }) {
  return (
    <div>
      <button
        disabled={disabled}
        onClick={onClick}
        className={`font-semibold bg-primary  text-white   w-full border-primary border  disabled:opacity-50
          disabled:cursor-not-allowed ${className}
          `}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}

export default AddToCartButton;
