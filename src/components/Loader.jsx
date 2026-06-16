import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Progress interval: reaches 100% in roughly 3.5 seconds
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 35);

    // Total loader duration: 4.5 seconds
    const completeTimer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        onComplete?.();
      }, 800); // Exiting animation duration
    }, 4500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <>
      {/* Google Font for Handwriting */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap');`}
      </style>

      <AnimatePresence>
        {!isExiting && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505] overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(12px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute top-1/2 left-1/2 h-[400px] md:h-[600px] w-[400px] md:w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[150px] md:blur-[200px]" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center gap-8 md:gap-12 w-[90vw] max-w-4xl">
              
              {/* The Handwriting Animation */}
              <div className="w-full flex justify-center relative z-20">
                <svg 
                  viewBox="0 0 1200 200" 
                  className="w-full h-auto drop-shadow-[0_0_12px_rgba(255,32,56,0.6)] overflow-visible"
                >
                  <motion.text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    style={{ fontFamily: "'Caveat', cursive", fontSize: "120px" }}
                    className="font-bold tracking-widest"
                    initial={{ 
                      fill: "rgba(255, 255, 255, 0)", 
                      stroke: "#ff2038", // Vibrant Red Ink
                      strokeWidth: 2.5, 
                      strokeDasharray: 1800, 
                      strokeDashoffset: 1800 
                    }}
                    animate={{ 
                      strokeDashoffset: 0,
                      fill: "rgba(255, 255, 255, 1)" // Fills with solid white at the end
                    }}
                    transition={{ 
                      strokeDashoffset: { duration: 3.5, ease: "easeInOut" },
                      fill: { duration: 0.8, delay: 3, ease: "easeIn" }
                    }}
                  >
                    welcome to my portfolio
                  </motion.text>
                </svg>
              </div>

              {/* Loading Bar Section */}
              <div className="w-full max-w-md">
                {/* Progress Track */}
                <div className="h-[3px] w-full overflow-hidden rounded-full bg-zinc-900 shadow-inner">
                  {/* Progress Fill */}
                  <motion.div
                    className="h-full bg-[#ff2038] shadow-[0_0_10px_rgba(255,32,56,0.8)]"
                    animate={{
                      width: `${progress}%`,
                    }}
                    transition={{
                      duration: 0.1,
                      ease: "linear",
                    }}
                  />
                </div>

                {/* Loading Stats */}
                <div className="mt-4 flex justify-between text-xs md:text-sm text-zinc-500 font-mono tracking-wider">
                  <span>Initializing UI/UX Assets...</span>
                  <span className="text-[#ff2038] font-semibold">{progress}%</span>
                </div>
              </div>

              {/* Pulsing Indicator */}
              <motion.p
                animate={{
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="uppercase tracking-[0.4em] text-[#ff2038] text-[10px] md:text-xs font-semibold"
              >
                Loading
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}