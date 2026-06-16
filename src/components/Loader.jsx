import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioLoader({ onComplete }) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // 3.5s draw + 1s hold = 4.5s total before exit
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        onComplete?.();
      }, 1000); 
    }, 4500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <>
      {/* Google Font */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap');`}
      </style>
      
      <AnimatePresence>
        {!isExiting && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505] overflow-hidden"
            exit={{ 
              opacity: 0, 
              scale: 1.1, 
              filter: "blur(15px)"
            }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            
            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_100%)] z-10 pointer-events-none" />

            {/* Container: Changed to flex-col to stack the text and the loader neatly */}
            <div className="w-[90vw] max-w-5xl flex flex-col items-center justify-center relative z-20 gap-4 md:gap-8">
              
              {/* The Handwriting Text */}
              <svg 
                viewBox="0 0 1200 200" 
                className="w-full h-auto drop-shadow-[0_0_15px_rgba(220,38,38,0.6)] overflow-visible"
              >
                <motion.text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  style={{ fontFamily: "'Caveat', cursive", fontSize: "110px" }}
                  className="font-bold tracking-widest"
                  initial={{ 
                    fill: "rgba(220, 38, 38, 0)", 
                    stroke: "#ef4444", 
                    strokeWidth: 2.5, 
                    strokeDasharray: 1500, 
                    strokeDashoffset: 1500 
                  }}
                  animate={{ 
                    strokeDashoffset: 0,
                    fill: "rgba(220, 38, 38, 1)"
                  }}
                  transition={{ 
                    strokeDashoffset: { duration: 3.5, ease: "easeInOut" },
                    fill: { duration: 0.8, delay: 2.8, ease: "easeIn" }
                  }}
                >
                  welcome to my portfolio
                </motion.text>
              </svg>

              {/* --- NEW: Sleek Loading Animation --- */}
              <div className="w-48 md:w-64 flex flex-col items-center gap-3 mt-4">
                 {/* Progress Bar Background (Dark Red/Black) */}
                 <div className="w-full h-[2px] bg-red-950 rounded-full overflow-hidden">
                    {/* The drawing progress line */}
                    <motion.div 
                      className="h-full bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)]"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      // Time perfectly synced with the SVG stroke drawing (3.5s)
                      transition={{ duration: 3.5, ease: "easeInOut" }} 
                    />
                 </div>
                 
                 {/* Fading "LOADING" text */}
                 <motion.span 
                   className="text-red-500/70 text-xs md:text-sm font-light tracking-[0.3em] uppercase"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: [0.2, 1, 0.2] }}
                   transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                 >
                   Loading
                 </motion.span>
              </div>

            </div>

            {/* Background Particles */}
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
               <motion.div 
                 className="absolute top-1/4 left-1/4 w-32 h-32 md:w-40 md:h-40 bg-red-600/20 rounded-full blur-[60px]"
                 animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.6, 0.2] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               />
               <motion.div 
                 className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-64 md:h-64 bg-red-800/30 rounded-full blur-[80px]"
                 animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.5, 0.1] }}
                 transition={{ duration: 5, repeat: Infinity, delay: 1, ease: "easeInOut" }}
               />
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}