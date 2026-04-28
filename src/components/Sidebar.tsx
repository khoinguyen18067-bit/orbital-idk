import { Rocket, Database, Wand2, Terminal, User } from "lucide-react";
import { motion } from "motion/react";

export default function Sidebar() {
  const navItems = [
    { icon: Rocket, label: "COCKPIT", active: true },
    { icon: Database, label: "RESOURCES" },
    { icon: Wand2, label: "TRANSMUTATION" },
    { icon: Terminal, label: "LOGS" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container/80 backdrop-blur-xl border-r border-white/5 flex flex-col z-40 hidden lg:flex shadow-[10px_0_30px_rgba(0,0,0,0.3)]">
      {/* Profile Section */}
      <div className="px-6 py-8 mt-16 mb-8 flex items-center gap-3">
        <div className="w-10 h-10 rounded-sm bg-surface-container-high overflow-hidden border border-primary/20 shrink-0">
          <img 
            alt="Commander Avatar" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUUxIMT_sFJEbFwosrwTp6opz6eGy8Fe3Aeu06RyzneU5xn9N7QUK6HvTAjiF8w27uUY93D-6y_jr1lJkafScp-U7bo5dletei2cKB5_-u9WWZJ7RoL-hui8FtOBf9wqwdFxjGUh5WE9LV0bd_JPQnk-aNcLMVJNTaeSj1RKIHHPUMW9ObmY9OozaRK9DIghSXkCi9myalmU6PUor_esxtiWr_4FvW-i15j4P8i26Inl5AKKpx8-MgyvKCHWR5qa2j8nE8FYzIDg" 
          />
        </div>
        <div>
          <div className="text-primary font-headline uppercase text-xs tracking-[0.2em] font-bold">ALCHEMIST-01</div>
          <div className="text-[10px] text-white/40 font-headline tracking-[0.15em] uppercase">SECTOR-7G</div>
        </div>
      </div>

      {/* Nav Items */}
      <nav className="flex flex-col gap-1">
        {navItems.map((item, id) => (
          <a
            key={id}
            href="#"
            className={`flex items-center gap-4 px-6 py-4 font-headline uppercase text-xs tracking-[0.2em] transition-all group ${
              item.active 
                ? "bg-primary/10 text-primary border-l-2 border-primary glow-blue" 
                : "text-white/40 hover:bg-white/5 hover:text-white"
            }`}
          >
            <item.icon size={18} className="group-hover:translate-x-1 transition-transform" />
            {item.label}
          </a>
        ))}
      </nav>

      {/* Action Button */}
      <div className="mt-auto p-6">
        <motion.button 
          whileHover={{ scale: 0.98 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 bg-primary text-black font-black font-headline tracking-widest text-xs rounded-sm shadow-[0_0_20px_rgba(95,242,255,0.3)]"
        >
          INITIATE
        </motion.button>
      </div>
    </aside>
  );
}
