import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '../components/SectionHeader'
import { skillCategories } from '../data/portfolio'

const chipVariants = {
  initial: { opacity: 0, scale: 0.92, y: 10 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  },
  hover: {
    y: -8,
    scale: 1.05,
    boxShadow: '0px 10px 30px rgba(255, 32, 56, 0.2)',
    borderColor: 'rgba(255, 32, 56, 0.5)',
  },
}

const SkillChip = memo(({ skill }) => (
  <motion.div
    variants={chipVariants}
    initial="initial"
    whileInView="animate"
    whileHover="hover"
    viewport={{ once: true }}
    className="flex min-w-[220px] cursor-default items-center gap-4 rounded-2xl border border-white/5 bg-[#050000] px-6 py-4 transition-all"
  >
    <span className="text-2xl">
      {skill.icon}
    </span>

    <div className="flex flex-col">
      <strong className="text-sm tracking-wide text-white">
        {skill.name}
      </strong>

      <div className="mt-1 flex items-center gap-2">
        <div className="h-1 w-14 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full bg-[#ff2038]"
            style={{ width: `${skill.level}%` }}
          />
        </div>

        <span className="font-mono text-[10px] uppercase tracking-tight text-gray-400">
          {skill.level}%
        </span>
      </div>
    </div>
  </motion.div>
))

function SkillLane({ skills, reverse = false, speed = 25 }) {
  const duplicatedSkills = useMemo(
    () => [...skills, ...skills],
    [skills]
  )

  return (
    <div className="relative ml-[calc(50%-50vw)] w-screen overflow-hidden transform-gpu">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-32 bg-gradient-to-r from-black via-black/90 to-transparent md:w-64" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-32 bg-gradient-to-l from-black via-black/90 to-transparent md:w-64" />

      <motion.div
        className="flex w-max gap-6 px-6 will-change-transform"
        animate={{
          x: reverse
            ? ['-50%', '0%']
            : ['0%', '-50%'],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        }}
      >
        {duplicatedSkills.map((skill, index) => (
          <SkillChip
            key={`${skill.name}-${index}`}
            skill={skill}
          />
        ))}
      </motion.div>
    </div>
  )
}

function Skills() {
  const allSkills = useMemo(
    () => skillCategories.flatMap((cat) => cat.skills),
    []
  )

  const midpoint = Math.ceil(allSkills.length / 2)

  const firstLane = allSkills.slice(0, midpoint)
  const secondLane = allSkills.slice(midpoint)

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-black py-20"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Expertise"
          title={
            <>
              <span className="text-white">
                TECH
              </span>{' '}
              <span className="text-[#ff2038]">
                STACK
              </span>{' '}
              <span className="text-white">
                & TOOLS
              </span>
            </>
          }
        />

        <div className="mt-12 flex flex-col gap-8">
          <SkillLane
            skills={firstLane}
            speed={22}
          />

          <SkillLane
            skills={secondLane}
            reverse
            speed={28}
          />
        </div>
      </div>
    </section>
  )
}

export default memo(Skills)