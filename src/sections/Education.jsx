import { memo } from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '../components/SectionHeader'
import { education } from '../data/portfolio'
import { riseIn, stagger, viewport } from '../animations/motion'

const EducationCard = memo(({ item, index }) => {
  return (
    <motion.article
      variants={riseIn}
      className="relative w-full overflow-hidden rounded-2xl border-[1.5px] border-red-900/50 bg-gradient-to-r from-[#080000] to-[#030000] p-4 shadow-[0_0_30px_rgba(220,38,38,0.05)] transition-all duration-500 hover:border-red-500/80 hover:shadow-[0_0_50px_rgba(220,38,38,0.25)] sm:p-8 lg:hover:translate-x-2"
    >
      {/* Deep Space / Nebula Red Glow Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute right-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-red-600/10 blur-[80px] sm:h-64 sm:w-64 sm:blur-[100px]" />
        <div className="absolute left-10 top-10 h-24 w-24 rounded-full bg-red-500/5 blur-[60px] sm:left-20 sm:h-40 sm:w-40 sm:blur-[80px]" />
        {/* Subtle star particles effect using CSS gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:30px_30px] opacity-10 mix-blend-screen sm:bg-[size:40px_40px]" />
      </div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-8">
        
        {/* Left Side: 3D Crystal Hexagon Effect */}
        <div className="relative flex h-32 w-28 shrink-0 self-center lg:h-56 lg:w-44 lg:self-auto items-center justify-center">
          {/* Hexagon Shape Outline */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-red-500/50 via-red-950/40 to-red-500/30 backdrop-blur-md"
            style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
          >
            {/* Inner Hexagon for Border effect */}
            <div 
              className="absolute inset-[2px] bg-[#0a0000]"
              style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
            >
              {/* Inner Red Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/30 to-transparent blur-md" />
            </div>
          </div>
          
          {/* Logo Content */}
          <div className="relative z-10 flex flex-col items-center justify-center drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]">
            {typeof item.logo === 'string' && item.logo.startsWith('/') ? (
              <img
                src={item.logo}
                alt={`${item.institution} logo`}
                loading="lazy"
                className="h-12 w-12 sm:h-20 sm:w-20 object-contain drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]"
              />
            ) : (
              <span className="text-2xl sm:text-4xl font-black text-red-500 tracking-wider">
                {item.logo}
              </span>
            )}
          </div>
        </div>

        {/* Center: Details Section */}
        <div className="flex-1 space-y-4 sm:space-y-5">
          {/* Header Info */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.4)]">
              {item.degree}
            </h3>
            <p className="mt-1 sm:mt-2 text-sm sm:text-base font-semibold text-zinc-400">
              {item.institution}
            </p>
          </div>

          {/* Academic Performance Box */}
          <div className="relative mx-auto flex w-fit lg:mx-0 flex-col rounded-lg border border-red-500/40 bg-red-950/20 px-3 py-1.5 sm:px-4 sm:py-2 text-center lg:text-left">
            <h4 className="mb-1 text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-red-500/80">
              Academic Performance
            </h4>
            <p className="text-xs sm:text-sm font-medium text-zinc-200">
              {item.grade}
            </p>
          </div>

          {/* Skills & Subjects Tags */}
          <div className="pt-1 sm:pt-2">
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
              {item.subjects.map((subject) => (
                <span
                  key={subject}
                  className="rounded-full border border-red-900/60 bg-[#120000] px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-semibold text-zinc-300 shadow-[0_0_10px_rgba(220,38,38,0.1)] transition-all duration-300 hover:-translate-y-0.5 hover:border-red-400 hover:text-white hover:shadow-[0_0_15px_rgba(220,38,38,0.4)]"
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Date & Hologram Number */}
        <div className="mt-4 flex flex-row items-center justify-between border-t border-red-900/30 pt-4 lg:mt-0 lg:h-56 lg:flex-col lg:items-end lg:justify-between lg:border-t-0 lg:pt-0">
          
          {/* Cyberpunk Date Badge */}
          <div className="relative flex items-center justify-center px-4 py-1.5 sm:px-6 sm:py-2">
            {/* Custom cut-corner border effect using Clip-path */}
            <div 
              className="absolute inset-0 bg-red-950/40 border border-red-500/50 backdrop-blur-sm"
              style={{ clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}
            />
            <span className="relative z-10 text-[10px] sm:text-xs font-bold tracking-widest text-zinc-100 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
              {item.years}
            </span>
          </div>

          {/* Large Hollow Hologram Number */}
          <div className="relative flex items-center justify-center lg:pr-4">
            {/* Glowing Base (Simulating the 3D stand) */}
            <div className="absolute -bottom-2 sm:-bottom-4 h-4 sm:h-8 w-16 sm:w-24 rounded-[100%] bg-red-600/30 blur-[10px]" />
            <div className="absolute -bottom-1 sm:-bottom-2 h-1 sm:h-2 w-10 sm:w-16 rounded-[100%] border border-red-500 bg-red-500/50 shadow-[0_0_15px_red]" />
            
            {/* The Number */}
            <span 
              className="relative z-10 text-5xl sm:text-7xl lg:text-8xl font-black text-transparent"
              style={{ 
                WebkitTextStroke: '2px rgba(239, 68, 68, 0.8)',
                filter: 'drop-shadow(0 0 15px rgba(239, 68, 68, 0.6))'
              }}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        </div>

      </div>
    </motion.article>
  )
})

EducationCard.displayName = 'EducationCard'

function Education() {
  return (
    <section
      id="education"
      className="relative min-h-screen w-full bg-[#030000] px-4 py-16 sm:px-6 sm:py-24 lg:px-8 text-white overflow-hidden"
    >
      {/* Subtle Tech Grid Background */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#8000000f_1px,transparent_1px),linear-gradient(to_bottom,#8000000f_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_90%_60%_at_50%_50%,#000_60%,transparent_100%)] sm:[mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Academic Journey"
          title="My educational background and academic achievements."
        />

        {/* Timeline Container */}
        <div className="relative mx-auto mt-12 max-w-[1050px] sm:mt-20">
          
          {/* The Vertical Glowing Timeline Line */}
          <div className="absolute bottom-0 left-[16px] sm:left-[40px] top-8 w-[2px] bg-gradient-to-b from-red-500 via-red-900/40 to-transparent shadow-[0_0_15px_rgba(239,68,68,0.6)]" />

          <motion.div
            className="space-y-12 sm:space-y-24"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            {education.map((item, index) => (
              <div key={index} className="group relative flex w-full items-center">
                
                {/* Timeline Node (Glowing Dot with Radar Pulse) */}
                <div className="absolute left-[5px] sm:left-[29px] top-1/2 z-20 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border-2 border-red-500 bg-[#050000] shadow-[0_0_20px_rgba(239,68,68,0.9)]">
                  <div className="h-2 w-2 rounded-full bg-red-400" />
                  {/* Pulsing ring effect */}
                  <div className="absolute h-8 w-8 sm:h-10 sm:w-10 animate-ping rounded-full border border-red-500/40" />
                </div>

                {/* Horizontal Connector Line from Node to Card */}
                <div className="absolute left-[17px] sm:left-[41px] top-1/2 z-10 h-[2px] w-[23px] sm:w-[60px] -translate-y-1/2 bg-gradient-to-r from-red-500 to-transparent transition-all duration-500 group-hover:from-red-400 sm:group-hover:w-[75px]" />

                {/* The Main Content Card */}
                <div className="w-full pl-[40px] sm:pl-[100px]">
                  <EducationCard item={item} index={index} />
                </div>

              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default memo(Education)