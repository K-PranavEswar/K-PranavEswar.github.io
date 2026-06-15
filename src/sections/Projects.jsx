import { memo, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { projects } from '../data/portfolio'

const contentVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
  exit: (direction) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
    transition: { duration: 0.4 },
  }),
}

function Projects() {
  const [[index, direction], setPage] = useState([0, 0])

  useEffect(() => {
    projects.forEach((p) => {
      const img1 = new Image()
      img1.src = p.image
      if (p.background) {
        const img2 = new Image()
        img2.src = p.background
      }
    })
  }, [])

  const active = projects[index]

  const paginate = (newDirection) => {
    let nextIndex = index + newDirection
    if (nextIndex < 0) nextIndex = projects.length - 1
    if (nextIndex >= projects.length) nextIndex = 0
    setPage([nextIndex, newDirection])
  }

  const jumpToSlide = (dotIndex) => {
    setPage([dotIndex, dotIndex > index ? 1 : -1])
  }

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full overflow-hidden bg-black text-white selection:bg-red-500/30"
    >
      {/* Background Image with Premium Dark/Red Overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={active.background || active.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover opacity-[0.08] blur-[50px] grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black to-black" />
          
          {/* Subtle Red Ambient Glow behind the text */}
          <div className="absolute left-1/4 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-red-600/5 blur-[120px] pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* --- Custom Glitch Title --- */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 flex items-center gap-4">
        {/* Fading Red Line */}
        <div className="h-[3px] w-16 bg-gradient-to-r from-transparent to-red-500 sm:w-24 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
        
        {/* Glitch Text */}
        <h2 
          className="text-3xl font-black uppercase tracking-[0.2em] text-white sm:text-4xl lg:text-5xl"
          style={{ 
            textShadow: '2px 0px 0px rgba(70, 150, 255, 0.8), -2px 0px 0px rgba(255, 50, 50, 0.8)' 
          }}
        >
          PROJECTS
        </h2>
      </div>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-150px)] max-w-7xl grid-cols-1 gap-12 px-6 pb-20 pt-10 lg:grid-cols-2 lg:items-center">
        
        {/* Left Content Area */}
        <div className="relative flex min-h-[500px] w-full flex-col justify-center pb-16 sm:min-h-[550px] lg:min-h-[600px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="space-y-8"
            >
              <div>
                <p className="mb-4 text-xs font-bold tracking-[0.3em] text-red-500">
                  PROJECTS — {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="text-4xl font-black tracking-tight text-zinc-100 sm:text-6xl lg:text-7xl">
                  {active.title}
                </h3>
              </div>

              <div className="space-y-4">
                <p className="text-xl font-medium text-zinc-300">
                  {active.subtitle}
                </p>
                <p className="max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                  {active.copy}
                </p>
              </div>

              {/* Red-Themed Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {active.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-red-900/30 bg-red-950/20 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-300 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Source Code Button */}
              <div className="pt-4">
                <a
                  href={active.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full border border-zinc-800 bg-zinc-900/50 px-6 py-3 text-sm font-semibold backdrop-blur-xl transition-all duration-300 hover:border-red-500/50 hover:bg-red-950/40 hover:text-red-400"
                >
                  <ExternalLink size={18} className="transition-transform group-hover:-translate-y-0.5" />
                  View Source Code
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination Dots */}
          <div className="absolute bottom-0 left-0 flex gap-3">
            {projects.map((_, dot) => (
              <button
                key={dot}
                onClick={() => jumpToSlide(dot)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  dot === index 
                    ? 'w-8 bg-red-600 shadow-[0_0_12px_rgba(220,38,38,0.6)]' 
                    : 'w-2 bg-zinc-800 hover:bg-red-900/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Image/Slider Area */}
        <div className="flex flex-col items-center lg:items-end">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, { offset, velocity }) => {
                const swipe = offset.x * velocity.x
                if (swipe < -10000) paginate(1)
                else if (swipe > 10000) paginate(-1)
              }}
              className="relative w-full max-w-lg cursor-grab active:cursor-grabbing"
            >
              {/* Premium Image Card */}
              <div className="group relative overflow-hidden rounded-3xl border border-zinc-800/60 bg-zinc-900/30 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:border-red-900/60 hover:shadow-[0_0_40px_rgba(220,38,38,0.15)]">
                <div className="aspect-[16/10] w-full bg-zinc-950 animate-pulse">
                  <img
                    src={active.image}
                    alt={`${active.title} preview`}
                    loading="eager"
                    fetchpriority="high"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    draggable={false}
                    onLoad={(e) => e.target.parentElement.classList.remove('animate-pulse')}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="mt-8 flex gap-4">
            <button
              onClick={() => paginate(-1)}
              className="group rounded-full border border-zinc-800 bg-zinc-900/50 p-4 backdrop-blur-xl transition-all duration-300 hover:border-red-500/50 hover:bg-red-950/40 hover:text-red-400"
            >
              <ChevronLeft size={24} className="transition-transform group-hover:-translate-x-1" />
            </button>

            <button
              onClick={() => paginate(1)}
              className="group rounded-full border border-zinc-800 bg-zinc-900/50 p-4 backdrop-blur-xl transition-all duration-300 hover:border-red-500/50 hover:bg-red-950/40 hover:text-red-400"
            >
              <ChevronRight size={24} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default memo(Projects)