import { Bell, Settings } from "lucide-react";

export default function Header() {
  const links = ["STATION", "ALCHEMY", "VOID", "ARCHIVE"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-surface-container/60 backdrop-blur-xl border-b border-white/5">
      <div className="text-xl font-black italic tracking-tighter text-primary drop-shadow-[0_0_10px_rgba(95,242,255,0.8)] font-headline uppercase">
        ORBITAL ALCHEMIST
      </div>

      <nav className="hidden md:flex items-center gap-8 font-headline tracking-tighter uppercase font-bold text-xs">
        {links.map((link, idx) => (
          <a
            key={idx}
            href="#"
            className={`transition-colors duration-300 pb-1 ${
              link === "STATION"
                ? "text-primary border-b-2 border-primary glow-blue"
                : "text-white/40 hover:text-primary"
            }`}
          >
            {link}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4 text-primary">
        <button className="p-2 hover:bg-white/5 rounded-sm transition-colors group">
          <Bell size={18} className="group-hover:scale-110 transition-transform" />
        </button>
        <button className="p-2 hover:bg-white/5 rounded-sm transition-colors group">
          <Settings size={18} className="group-hover:rotate-45 transition-transform duration-500" />
        </button>
      </div>
    </header>
  );
}
