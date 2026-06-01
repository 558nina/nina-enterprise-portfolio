import { ReactNode } from "react";

type PremiumCardProps = {
  children: ReactNode;
  className?: string;
};

export default function PremiumCard({
  children,
  className = "",
}: PremiumCardProps) {
  return (
    <div
      className={`
        relative overflow-hidden
        rounded-[2rem]
        border border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        transition-all duration-500
        hover:-translate-y-1
        hover:border-cyan-400/40
        hover:shadow-[0_0_60px_rgba(34,211,238,0.10)]
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/[0.03] via-transparent to-transparent" />

      <div className="relative">
        {children}
      </div>
    </div>
  );
}