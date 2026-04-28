import { motion } from "motion/react";

interface FeedItem {
  text: string;
  type: "info" | "warning" | "alert";
}

interface TacticalFeedProps {
  items: FeedItem[];
  title: string;
  side: "left" | "right";
}

export default function TacticalFeed({ items, title, side }: TacticalFeedProps) {
  const alignClass = side === "left" ? "text-left border-l" : "text-right border-r";
  const flexClass = side === "left" ? "items-start" : "items-end";

  return (
    <div className={`p-4 rounded-sm flex flex-col gap-4 ${flexClass}`}>
      <div className="text-[10px] text-white/40 font-headline uppercase tracking-[0.2em]">
        {title}
      </div>
      <div className="space-y-4 w-full">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: side === "left" ? -10 : 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2 }}
            className={`text-[10px] font-mono pl-3 pr-3 py-1 ${alignClass} ${
              item.type === "info" 
                ? "text-primary/60 border-primary/20" 
                : item.type === "alert" 
                  ? "text-secondary/60 border-secondary/20" 
                  : "text-accent/60 border-accent/20"
            }`}
          >
            &gt; {item.text}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
