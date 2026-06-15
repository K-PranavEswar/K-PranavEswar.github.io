import { memo, useState, useEffect, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Float,
  Html,
  OrbitControls,
  ContactShadows,
  Sparkles,
} from '@react-three/drei'
import { motion } from 'framer-motion'

const iconLabels = [
  'React Js',
  'Node Js',
  'MongoDb',
  'Express Js',
  'Three Js',
  'Python',
  'Flask',
  'PHP',
  'MySQL',
]

function Workstation({ isMobile }) {
  // Memoize the position calculations so they don't re-run on every render
  const icons = useMemo(() => {
    return iconLabels.map((label, index) => {
      const angle = (index / iconLabels.length) * Math.PI * 2
      const radius = isMobile ? 1.8 : 2.8 // Slightly expanded radius for breathing room
      const height = isMobile ? 0.2 : 0.4

      return {
        label,
        position: [
          Math.cos(angle) * radius,
          Math.sin(angle * 2) * 0.4 + height,
          Math.sin(angle) * radius,
        ],
      }
    })
  }, [isMobile])

  return (
    <group scale={isMobile ? 0.8 : 1} position={[0, isMobile ? -0.2 : -0.4, 0]}>
      {/* Added Sparkles for a true "Constellation" ambient effect */}
      <Sparkles 
        count={80} 
        scale={6} 
        size={1.5} 
        speed={0.4} 
        opacity={0.3} 
        color="#ff2038" 
      />

      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Core Crystal - Upgraded to Physical Material for better reflections */}
        <mesh position={[0, 0.5, 0]} rotation={[0, Math.PI / 4, 0]}>
          <octahedronGeometry args={[0.4, 0]} />
          <meshPhysicalMaterial 
            color="#050505" 
            roughness={0.1} 
            metalness={0.9}
            clearcoat={1}
            clearcoatRoughness={0.1}
            emissive="#1a0000"
          />
        </mesh>

        {/* Wireframe Aura */}
        <mesh position={[0, 0.5, 0]} rotation={[0, Math.PI / 4, 0]}>
          <octahedronGeometry args={[0.45, 0]} />
          <meshBasicMaterial
            color="#ff2038"
            wireframe
            transparent
            opacity={0.4}
          />
        </mesh>

        {/* Base Pedestal */}
        <mesh position={[0, -0.4, 0]}>
          <cylinderGeometry args={[1.2, 1.5, 0.1, 64]} />
          <meshStandardMaterial
            color="#050505"
            emissive="#0a0000"
            roughness={0.4}
            metalness={0.8}
          />
        </mesh>

        {/* Inner Glowing Ring */}
        <mesh position={[0, -0.34, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.1, 0.015, 16, 100]} />
          <meshBasicMaterial color="#ff2038" transparent opacity={0.8} />
        </mesh>

        {/* Primary Orbit Ring */}
        <mesh position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[isMobile ? 1.8 : 2.8, 0.004, 16, 100]} />
          <meshBasicMaterial color="#ff2038" transparent opacity={0.2} />
        </mesh>

        {/* Secondary Offset Orbit Ring for added 3D depth */}
        <mesh position={[0, 0.5, 0]} rotation={[Math.PI / 2.5, Math.PI / 6, 0]}>
          <torusGeometry args={[isMobile ? 1.5 : 2.4, 0.003, 16, 100]} />
          <meshBasicMaterial color="#ff2038" transparent opacity={0.1} />
        </mesh>
      </Float>

      {/* Orbiting Tech Stack Icons */}
      {icons.map((item, i) => (
        <group key={item.label} position={item.position}>
          {/* Staggered float speeds for more organic movement */}
          <Float speed={1.5 + (i % 3) * 0.5} floatIntensity={0.6}>
            <Html center transform distanceFactor={isMobile ? 8 : 6}>
              <div className="cursor-pointer rounded-full border border-red-900/40 bg-black/80 px-4 py-2 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-red-500 hover:bg-red-950/60 hover:shadow-[0_0_25px_rgba(255,32,56,0.4)]">
                <span className="text-xs font-bold tracking-wider text-zinc-200 md:text-sm">
                  {item.label}
                </span>
              </div>
            </Html>
          </Float>
        </group>
      ))}
    </group>
  )
}

function TechOrbitSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Adding a slight debounce pattern for window resizing performance
    let timeoutId = null
    const checkMobile = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < 768)
      }, 100)
    }
    
    // Initial check
    setIsMobile(window.innerWidth < 768)
    
    window.addEventListener('resize', checkMobile)
    return () => {
      window.removeEventListener('resize', checkMobile)
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-black py-20">
      {/* Background Grids and Glows */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#8000000a_1px,transparent_1px),linear-gradient(to_bottom,#8000000a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/5 blur-[100px]" />

      {/* Header Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute left-1/2 top-12 z-10 w-full -translate-x-1/2 px-4 text-center sm:top-16"
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-500 sm:text-xs">
          3D Overview
        </p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
          TECH CONSTELLATION
        </h2>
      </motion.div>

      {/* 3D Canvas Scene */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute inset-0 z-10 pt-20"
      >
        <Canvas
          dpr={isMobile ? [1, 1] : [1, 2]} // Crisp rendering on desktop
          camera={{
            position: isMobile ? [0, 1.5, 8.5] : [0, 2, 7.5], // Pulled back slightly for better framing
            fov: isMobile ? 55 : 45,
          }}
        >
          <ambientLight intensity={0.3} />

          <pointLight
            position={[0, 0.5, 0]}
            color="#ff2038"
            intensity={2.5}
            distance={4}
          />

          <spotLight
            position={[5, 5, 5]}
            angle={0.4}
            penumbra={1}
            color="#ffffff"
            intensity={2}
            castShadow
          />

          <spotLight
            position={[-5, 3, -5]}
            angle={0.5}
            penumbra={1}
            color="#ff2038"
            intensity={4}
          />

          <OrbitControls
            autoRotate
            autoRotateSpeed={0.8}
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 1.8} // Prevent users from rotating strictly underneath the scene
            minPolarAngle={Math.PI / 3}   // Prevent users from viewing strictly top-down
          />

          <Workstation isMobile={isMobile} />

          <ContactShadows
            position={[0, -1.2, 0]}
            opacity={0.5}
            scale={12}
            blur={3}
            color="#ff2038" // Slightly tinted shadow to match theme
          />
        </Canvas>
      </motion.div>
    </section>
  )
}

export default memo(TechOrbitSection)