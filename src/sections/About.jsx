import { memo } from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '../components/SectionHeader'
import { aboutText } from '../data/portfolio'
import { riseIn, viewport } from '../animations/motion'

const highlights = [
  {
    title: 'MERN Development',
    desc: 'Building smooth, scalable, and responsive web applications.',
    icon: '💻',
  },
  {
    title: 'Offensive Security',
    desc: 'Penetration testing with a proactive security mindset.',
    icon: '🛡️',
  },
  {
    title: 'Creative Coding',
    desc: 'Crafting interactive experiences with Three.js & Python.',
    icon: '🚀',
  },
]

const marqueeItems = [...highlights, ...highlights, ...highlights, ...highlights]

function About() {
  return (
    <section
      className="section section-wide relative overflow-hidden bg-black py-20"
      id="about"
    >
      {/* Background Ambience: Pure Black with Subtle Red Glows */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0000] via-black to-black" />
        
        {/* Subtle Tech Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8000000a_1px,transparent_1px),linear-gradient(to_bottom,#8000000a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[60vh] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 w-full">
        <SectionHeader eyebrow="ABOUT ME" title="" />

        <div className="w-full px-6 md:px-12 lg:px-24 xl:px-32">
          {/* Header Title */}
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
              Hello, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">Pranav</span>
            </h2>
          </div>

          <motion.div
            variants={riseIn}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mb-16 flex w-full flex-col gap-6"
          >
            {/* About Text Card */}
            <div className="relative w-full overflow-hidden rounded-3xl border border-zinc-800/60 bg-zinc-900/30 p-6 shadow-2xl backdrop-blur-md transition-all duration-500 hover:border-red-900/40 hover:bg-[#080303] hover:shadow-[0_0_40px_rgba(220,38,38,0.1)] md:p-10 lg:p-12">
              {/* Subtle top edge highlight */}
              <div className="absolute left-1/2 top-0 h-[1px] w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-red-900/40 to-transparent" />
              
              <p className="max-w-none text-lg leading-[2] text-zinc-300 md:text-xl font-light">
                {aboutText}
              </p>
            </div>

            {/* Keyword Tags */}
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              {['Kerala', 'Developer', 'Security Enthusiast', 'MCA Student'].map(
                (tag, i) => (
                  <span
                    key={i}
                    className="cursor-default rounded-full border border-zinc-800 bg-zinc-900/40 px-5 py-2 text-sm text-zinc-400 backdrop-blur-md transition-colors duration-300 hover:border-red-500/50 hover:bg-red-950/20 hover:text-red-400 md:text-base"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* Scrolling Marquee Section */}
        <div className="relative mt-10 w-full overflow-hidden py-6">
          {/* Black fade edges for smooth entry/exit */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-black via-black/80 to-transparent md:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-black via-black/80 to-transparent md:w-32" />

          <motion.div
            className="flex w-max gap-6"
            animate={{ x: ['-50%', '0%'] }}
            transition={{
              ease: 'linear',
              duration: 35,
              repeat: Infinity,
            }}
          >
            {marqueeItems.map((item, index) => (
              <div
                key={index}
                className="group relative flex w-[300px] shrink-0 items-center gap-5 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5 backdrop-blur-md transition-all duration-300 hover:border-red-900/60 hover:bg-[#0c0404] md:w-[380px]"
              >
                {/* Shine effect on hover */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-red-500/[0.05] to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                <div className="text-3xl opacity-80 drop-shadow-md transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>

                <div>
                  <h4 className="mb-1 text-lg font-bold tracking-tight text-zinc-100 transition-colors duration-300 group-hover:text-red-400">
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default memo(About)