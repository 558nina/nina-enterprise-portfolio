type SectionGlowProps = {
  position?: "left" | "right" | "center";
};

export default function SectionGlow({ position = "right" }: SectionGlowProps) {
  const alignment =
    position === "left"
      ? "left-0 top-1/4"
      : position === "center"
      ? "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      : "right-0 top-1/4";

  return (
    <div
      className={`pointer-events-none absolute ${alignment} h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl`}
    />
  );
}