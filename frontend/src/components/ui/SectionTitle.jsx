function SectionTitle({
  title,
  subtitle,
  center = false,
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <h2 className="text-3xl font-bold text-[#384152]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2 text-[#384152]/70">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;