function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}) {
  const variants = {
    primary:
      "bg-[#D4B06A] text-white hover:opacity-90",

    secondary:
      "bg-[#DCEAF4] text-[#384152] hover:bg-[#c9ddeb]",

    outline:
      "border border-[#D4B06A] text-[#D4B06A] hover:bg-[#D4B06A] hover:text-white",

    danger:
      "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      className={`
        px-5
        py-2.5
        rounded-xl
        transition
        font-medium
        shadow-sm
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;