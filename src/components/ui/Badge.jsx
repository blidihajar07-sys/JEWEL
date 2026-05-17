function Badge({
  children,
  color = "gold",
}) {
  const colors = {
    gold: "bg-[#D4B06A]/20 text-[#D4B06A]",
    blue: "bg-[#DCEAF4] text-[#384152]",
    pink: "bg-[#F3DDE5] text-[#384152]",
    green: "bg-green-100 text-green-700",
    red: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        px-3
        py-1
        rounded-full
        text-xs
        font-medium
        ${colors[color]}
      `}
    >
      {children}
    </span>
  );
}

export default Badge;