import { ReactNode } from "react";
import { motion } from "motion/react";

interface HUDContainerProps {
  children: ReactNode;
  title?: string;
  id?: string;
  badge?: string;
  accent?: "primary" | "secondary";
  className?: string;
}

export default function HUDContainer({
  children,
  title,
  id,
  badge,
  accent = "primary",
  className = "",
}: HUDContainerProps) {
  const accentColor = accent === "primary" ? "border-primary/20" : "border-secondary/20";
  const badgeBg = accent === "primary" ? "bg-primary text-black" : "bg-secondary text-white";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative bg-surface-container/60 border ${accentColor} p-5 rounded-sm overflow-hidden group ${className}`}
    >
      {badge && (
        <div className={`absolute top-0 right-0 px-2 py-0.5 ${badgeBg} font-headline text-[8px] font-black uppercase tracking-widest`}>
          {badge}
        </div>
      )}
      {(title || id) && (
        <div className="flex items-center justify-between mb-4">
          {title && (
            <span className={`font-headline ${accent === "primary" ? "text-primary" : "text-secondary"} text-xs tracking-widest font-bold`}>
              {title}
            </span>
          )}
          {id && (
            <span className="text-white/40 font-headline text-[10px]">
              {id}
            </span>
          )}
        </div>
      )}
      {children}
      
      {/* HUD Brackets Decor */}
      <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l ${accentColor}`} />
      <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r ${accentColor} ${badge ? 'hidden' : ''}`} />
      <div className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l ${accentColor}`} />
      <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r ${accentColor}`} />
    </motion.div>
  );
}
