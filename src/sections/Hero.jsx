import { memo } from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { ChevronDown } from 'lucide-react'
import { profile } from '../data/portfolio'

// Staggered Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

function HeroComponent() {
  return (
    <section
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black selection:bg-red-500/30"
      id="home"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0000] via-black to-black" />
        
        {/* Subtle Tech Grid Background to replace the video */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8000000a_1px,transparent_1px),linear-gradient(to_bottom,#8000000a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Animated Ambient Red Glows */}
      <motion.div
        className="pointer-events-none absolute left-[10%] top-[20%] h-64 w-64 rounded-full bg-[#ff2038]/10 blur-[120px]"
        animate={{ y: [0, -40, 0], x: [0, 30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-[10%] right-[10%] h-80 w-80 rounded-full bg-[#ff2038]/10 blur-[150px]"
        animate={{ y: [0, 40, 0], x: [0, -30, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl px-6 sm:px-10 lg:px-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >

          {/* Name */}
          <motion.h1 
            variants={itemVariants}
            className="text-[3.5rem] font-black uppercase leading-[0.9] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500 sm:text-[5rem] md:text-[6.5rem] lg:text-[8rem] xl:text-[9.5rem]"
          >
            {profile.name}
          </motion.h1>

          {/* Role */}
          <motion.p 
            variants={itemVariants}
            className="mt-6 max-w-2xl text-base font-medium tracking-wide text-zinc-400 sm:text-lg md:text-xl lg:text-2xl"
          >
            {profile.role}
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="mt-10 flex w-full max-w-sm flex-col items-center justify-center gap-4 sm:max-w-none sm:flex-row sm:gap-6"
          >
            <a
              href="#projects"
              className="group relative flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ff2038] to-[#cc182b] px-8 py-4 text-sm font-bold text-white shadow-[0_0_30px_rgba(255,32,56,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,32,56,0.5)] sm:w-auto sm:text-base"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="flex w-full items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/50 px-8 py-4 text-sm font-bold text-zinc-300 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/30 hover:bg-white/10 hover:text-white sm:w-auto sm:text-base"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 flex items-center gap-8 text-zinc-400"
          >
            <a
              href={profile.instagram}
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-300 hover:-translate-y-1 hover:text-[#ff2038]"
              aria-label="Instagram"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="#"
              className="transition-colors duration-300 hover:-translate-y-1 hover:text-[#ff2038]"
              aria-label="Twitter"
            >
              <FaXTwitter size={22} />
            </a>
            <a
              href={`https://${profile.linkedin}`}
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-300 hover:-translate-y-1 hover:text-[#ff2038]"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={22} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-[#ff2038]/70" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default memo(HeroComponent)