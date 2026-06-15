import { memo, useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { ChevronDown, Sparkles } from 'lucide-react'
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
  const heroRef = useRef(null)
  
  // 1. Scroll Tracking (Parallax)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  // 2. Parallax & Ambient Transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const glow1Y = useTransform(scrollYProgress, [0, 1], ['0%', '80%'])
  const glow2Y = useTransform(scrollYProgress, [0, 1], ['0%', '-40%'])
  
  // 3. New Split Animation Transforms (Alternating Directions)
  const moveLeftX = useTransform(scrollYProgress, [0, 1], ['0%', '-150%'])
  const moveRightX = useTransform(scrollYProgress, [0, 1], ['0%', '150%'])
  const nameOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const nameString = profile?.name || "K Pranav Eswar"
  const nameParts = nameString.split(' ')
  
  // Fallbacks just in case the name isn't exactly 3 words
  const part1 = nameParts[0] || "K"
  const part2 = nameParts[1] || "PRANAV"
  const part3 = nameParts.slice(2).join(' ') || "ESWAR"

  // 5. Custom Typewriter Effect Logic
  const roles = ['Full Stack Developer', 'MERN Stack Expert', 'UI/UX Enthusiast']
  const [currentRole, setCurrentRole] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = roles[roleIndex]
      if (!isDeleting) {
        setCurrentRole(fullText.substring(0, currentRole.length + 1))
        if (currentRole === fullText) {
          setTimeout(() => setIsDeleting(true), 2000) 
        }
      } else {
        setCurrentRole(fullText.substring(0, currentRole.length - 1))
        if (currentRole === '') {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 40 : 100) 

    return () => clearTimeout(timeout)
  }, [currentRole, isDeleting, roleIndex])

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black selection:bg-[#ff2038]/30"
      id="home"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0000] via-black to-black" />
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#8000000a_1px,transparent_1px),linear-gradient(to_bottom,#8000000a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" 
        />
      </div>

      {/* Ambient Glows */}
      <motion.div
        style={{ y: glow1Y }}
        className="pointer-events-none absolute left-[10%] top-[20%] h-64 w-64 rounded-full bg-[#ff2038]/15 blur-[120px]"
      >
        <motion.div
          className="h-full w-full rounded-full"
          animate={{ y: [0, -40, 0], x: [0, 30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      <motion.div
        style={{ y: glow2Y }}
        className="pointer-events-none absolute bottom-[10%] right-[10%] h-80 w-80 rounded-full bg-[#ff2038]/10 blur-[150px]"
      >
        <motion.div
          className="h-full w-full rounded-full"
          animate={{ y: [0, 40, 0], x: [0, -30, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        style={{ y: textY }}
        className="relative z-10 w-full max-w-7xl px-6 sm:px-10 lg:px-20 pt-16"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >

          {/* Stacked Name Container with Alternating Scroll Animations */}
          <motion.h1 
            variants={itemVariants}
            className="flex flex-col items-center justify-center font-black uppercase leading-[0.85] tracking-tighter text-[4.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem]"
          >
            {/* Top Text - Goes Left */}
            <motion.span
              style={{ x: moveLeftX, opacity: nameOpacity }}
              className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-600 drop-shadow-sm"
            >
              {part1}
            </motion.span>

            {/* Middle Text - Goes Right */}
            <motion.span
              style={{ x: moveRightX, opacity: nameOpacity }}
              className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-500 drop-shadow-sm"
            >
              {part2}
            </motion.span>

            {/* Bottom Text - Goes Left */}
            {part3 && (
              <motion.span
                style={{ x: moveLeftX, opacity: nameOpacity }}
                className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-300 to-zinc-700 drop-shadow-sm"
              >
                {part3}
              </motion.span>
            )}
          </motion.h1>

          {/* Typewriting Effect Container */}
          <motion.div 
            variants={itemVariants}
            style={{ opacity: nameOpacity }}
            className="mt-8 flex h-[40px] items-center justify-center text-base font-medium tracking-wide text-zinc-400 sm:text-lg md:text-xl"
          >
            <p>I'm a <span className="font-bold text-white">{currentRole}</span>
              <span className="ml-1 inline-block w-[3px] animate-pulse bg-[#ff2038]">|</span>
            </p>
          </motion.div>

          {/* Enhanced Hover Buttons */}
          <motion.div 
            variants={itemVariants}
            style={{ opacity: nameOpacity }}
            className="mt-10 flex w-full max-w-sm flex-col items-center justify-center gap-4 sm:max-w-none sm:flex-row sm:gap-6"
          >
            <button
  onClick={() =>
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
  className="flex w-full items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/50 px-8 py-4 text-sm font-bold text-zinc-300 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#ff2038]/50 hover:bg-[#ff2038]/10 hover:text-white sm:w-auto sm:text-base shadow-[0_0_0_rgba(255,32,56,0)] hover:shadow-[0_0_20px_rgba(255,32,56,0.2)]"
>
  View Projects
</button>

           <button
  onClick={() => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }}
  className="flex w-full items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/50 px-8 py-4 text-sm font-bold text-zinc-300 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#ff2038]/50 hover:bg-[#ff2038]/10 hover:text-white sm:w-auto sm:text-base shadow-[0_0_0_rgba(255,32,56,0)] hover:shadow-[0_0_20px_rgba(255,32,56,0.2)]"
>
  Contact Me
</button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            style={{ opacity: nameOpacity }}
            className="mt-12 flex items-center gap-8 text-zinc-400"
          >
            <a href={profile.instagram} target="_blank" rel="noreferrer" className="transition-all duration-300 hover:-translate-y-2 hover:text-[#ff2038] hover:drop-shadow-[0_0_10px_rgba(255,32,56,0.8)]" aria-label="Instagram">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="transition-all duration-300 hover:-translate-y-2 hover:text-[#ff2038] hover:drop-shadow-[0_0_10px_rgba(255,32,56,0.8)]" aria-label="Twitter">
              <FaXTwitter size={24} />
            </a>
            <a href={`https://${profile.linkedin}`} target="_blank" rel="noreferrer" className="transition-all duration-300 hover:-translate-y-2 hover:text-[#ff2038] hover:drop-shadow-[0_0_10px_rgba(255,32,56,0.8)]" aria-label="LinkedIn">
              <FaLinkedinIn size={24} />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown size={20} className="text-[#ff2038]/70" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default memo(HeroComponent)