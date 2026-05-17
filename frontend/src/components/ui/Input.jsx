function Input({
  label,
  className = "",
  ...props
}) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-[#384152]">
          {label}
        </label>
      )}

      <input
        className={`
          w-full
          px-4
          py-3
          rounded-xl
          border
          border-[#DCEAF4]
          bg-white/80
          outline-none
          transition
          focus:ring-2
          focus:ring-[#D4B06A]
          focus:border-[#D4B06A]
          ${className}
        `}
        {...props}
      />
    </div>
  );
}

export default Input;