import { motion } from "motion/react";
import { Scan, Filter } from "lucide-react";

export default function Arena() {
  return (
    <div className="relative flex-grow rounded-sm border border-primary/20 bg-black/60 overflow-hidden group shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]">
      {/* Background with slight glow */}
      <img
        alt="Arena Backdrop"
        className="w-full h-full object-cover opacity-40 mix-blend-screen"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5NUQBNU7JZt5HRp6hHTTHEzUPL5sHPdu7OE6_Xh1NpwsdTc6uw8QTFb_Fem5cuCoRZHIC66r0KvzoAw6pxkjyP1PP9hHDwU5mx7oH6-_9gdNPhnyZMJ1rXPKHy-0Xw6diEYFHexuHtJkzGapghWy3DcfZfirs25nu-L9brzg5YZZVr8okFaasXcn3Wt7_5kQPMGz33VaiPYqElRnx00eHeQvWLii97UeWZXozVvv5zcSGiJboBZo9n117q_l___bkHJ5LbnrUjg"
      />

      {/* HUD Scanlines */}
      <div className="absolute inset-0 hud-scanline pointer-events-none opacity-20" />

      {/* Corner Brackets */}
      <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-primary/60" />
      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary/60" />
      <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-primary/60" />
      <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-primary/60" />

      {/* Holographic Overlays */}
      <div className="absolute top-6 left-16 flex flex-col gap-1">
        <motion.div 
          animate={{ opacity: [1, 0.5, 1], x: [0, 2, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[10px] font-headline text-primary tracking-widest font-black bg-primary/10 px-2 py-0.5 border-l border-primary"
        >
          AR_LINK: STABLE
        </motion.div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-64 h-64 flex items-center justify-center">
          {/* Rotating Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute w-full h-full border border-primary/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-48 h-48 border border-dashed border-primary/20 rounded-full"
          />
          
          <div className="relative z-10 flex flex-col items-center gap-4">
             <motion.div
               animate={{ scale: [1, 1.1, 1] }}
               transition={{ duration: 2, repeat: Infinity }}
             >
               <Scan size={64} className="text-primary opacity-40" />
             </motion.div>
          </div>
        </div>
      </div>

      {/* Progress Bar HUD */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-2/3">
        <div className="flex justify-between items-center px-1 mb-2">
          <span className="text-[9px] font-mono text-primary/80 uppercase tracking-widest">Scanning Alchemy Voids...</span>
          <span className="text-[9px] font-mono text-primary/80">9.4 GIGA-ION/S</span>
        </div>
        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: "0%" }}
            animate={{ width: "72%" }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            className="h-full bg-primary shadow-[0_0_10px_#5ff2ff]"
          />
        </div>
      </div>

      {/* Start Button Overlay */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-20">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-12 py-6 overflow-hidden transition-all duration-300 shadow-[0_0_30px_rgba(95,242,255,0.2)]"
        >
          <div className="absolute inset-0 bg-primary opacity-90 group-hover:opacity-100 transition-opacity" />
          <span className="relative font-headline font-black text-4xl tracking-[0.3em] text-black uppercase">START</span>
          <div className="absolute -bottom-1 left-0 w-full h-1 bg-secondary shadow-[0_0_15px_#ff525c]" />
        </motion.button>
      </div>
    </div>
  );
}
