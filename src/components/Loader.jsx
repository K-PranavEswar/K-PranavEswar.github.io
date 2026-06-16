import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 35);

    const completeTimer = setTimeout(() => {
      onComplete?.();
    }, 4500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/20 blur-[180px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 w-[90%] max-w-lg">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-3xl md:text-5xl font-bold tracking-widest text-white"
        >
          WELCOME TO MY PORTFOLIO
        </motion.h1>

        {/* Loading Bar */}
        <div className="w-full">
          <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800">
            <motion.div
              className="h-full bg-[#ff2038]"
              animate={{
                width: `${progress}%`,
              }}
              transition={{
                duration: 0.1,
              }}
            />
          </div>

          <div className="mt-4 flex justify-between text-sm text-zinc-400">
            <span>Loading Assets...</span>
            <span>{progress}%</span>
          </div>
        </div>

        <motion.p
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="uppercase tracking-[0.4em] text-red-500 text-xs"
        >
          Loading
        </motion.p>
      </div>
    </motion.div>
  );
}