import { memo } from 'react'
import { motion } from 'framer-motion'
import { MapPin, CalendarDays, Briefcase } from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { TiltCard } from '../components/TiltCard'
import { timeline } from '../data/portfolio'
import { riseIn, viewport } from '../animations/motion'

function Timeline() {
  return (
    <section
      id="experience"
      className="relative w-full overflow-hidden bg-black px-4 py-16 md:px-8 md:py-20"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeader 
          eyebrow="EXPERIENCE" 
          title="Career Experiences"
        />

        <div className="relative mt-12 md:mt-24">
          
          {/* Main Vertical Timeline Line */}
          <div className="absolute left-[16px] top-0 h-full w-[1px] bg-gradient-to-b from-red-900/80 via-red-900/20 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-6 md:space-y-24">
            {timeline.map((item, index) => {
              // Alternate left and right positioning for desktop
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  variants={riseIn}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`relative flex flex-col items-start md:flex-row md:items-center ${
                    isLeft ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  
                  {/* Premium Timeline Dot */}
                  <div className="absolute left-[16px] z-20 mt-[28px] flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-red-600 bg-black transition-transform duration-300 group-hover:scale-110 md:left-1/2 md:mt-0">
                    <div className="h-1.5 w-1.5 rounded-full bg-red-600" />
                  </div>

                  {/* Desktop Date Display (Outside the card) */}
                  <div className={`hidden absolute top-1/2 w-[45%] -translate-y-1/2 text-sm font-medium tracking-widest text-zinc-500 md:block ${isLeft ? 'right-0 pl-12 text-left' : 'left-0 pr-12 text-right'}`}>
                    {item.duration}
                  </div>

                  {/* Experience Card */}
                  <TiltCard
                    className={`ml-[36px] w-[calc(100%-36px)] rounded-2xl border border-zinc-800/60 bg-zinc-950/80 p-5 backdrop-blur-xl transition-all duration-500 hover:border-red-900/60 hover:bg-[#080303] group md:ml-0 md:w-[45%] md:p-8 shadow-xl shadow-black`}
                    data-cinema-panel
                  >
                    
                    {/* Header Section (Always Visible) */}
                    <div>
                      <h3 className="text-[1.3rem] font-black tracking-tight text-zinc-100 transition-colors duration-300 group-hover:text-red-500 md:text-2xl">
                        {item.role}
                      </h3>
                      
                      <div className="mt-3 flex flex-col gap-3 text-[13px] text-zinc-400 md:text-sm">
                        <span className="flex items-center gap-3">
                          <Briefcase size={16} className="shrink-0 text-red-600/90" />
                          <span className="font-semibold text-zinc-300">{item.company}</span>
                        </span>

                        {/* Mobile Date Display (Inside the card, hidden on Desktop) */}
                        <span className="flex items-center gap-3 md:hidden">
                          <CalendarDays size={16} className="shrink-0 text-red-600/90" />
                          <span className="font-medium tracking-wide text-zinc-400">{item.duration}</span>
                        </span>

                        <span className="flex items-center gap-3">
                          <MapPin size={16} className="shrink-0 text-red-600/90" />
                          <span className="text-zinc-400">{item.location}</span>
                        </span>
                      </div>
                    </div>

                    {/* Divider Line (Hidden on Mobile) */}
                    <div className="my-5 hidden h-[1px] w-full bg-gradient-to-r from-red-900/30 to-transparent md:block" />

                    {/* Description (Hidden on Mobile) */}
                    <p className="hidden text-[0.95rem] font-light leading-relaxed text-zinc-400 md:block">
                      {item.description}
                    </p>

                    {/* Tech Tags (Hidden on Mobile) */}
                    <div className="mt-6 hidden flex-wrap gap-2 md:flex">
                      {item.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-white/[0.05] bg-white/[0.03] px-3 py-1.5 text-xs font-semibold tracking-wider text-zinc-300 transition-colors duration-300 group-hover:border-red-900/50 group-hover:bg-red-900/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </TiltCard>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(Timeline)