import { useEffect, useState } from "react";

export default function StatsFooter() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: "LATENCY", value: "14 MS", color: "text-primary" },
    { label: "ENCRYPTION", value: "SHA-512", color: "text-primary" },
    { label: "ALCHEMICAL STABILITY", value: "OPTIMAL", color: "text-secondary" },
    { label: "STATION TIME", value: time.toLocaleTimeString('en-GB'), color: "text-white" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-auto">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-surface-container/40 p-3 rounded-sm border border-white/5 backdrop-blur-sm">
          <div className="text-[9px] font-headline text-white/40 mb-1 tracking-wider">{stat.label}</div>
          <div className={`font-mono ${stat.color} font-bold text-sm tracking-tighter`}>
            {stat.value}
          </div>
        </div>
      ))}
    </div>
  );
}
