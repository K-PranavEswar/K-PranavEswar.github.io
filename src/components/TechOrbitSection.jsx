import { memo, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Float,
  Html,
  OrbitControls,
  ContactShadows,
} from '@react-three/drei'
import * as THREE from 'three'
import { motion } from 'framer-motion'
import { motion as motion3d } from 'framer-motion-3d' // <-- New Import

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
  const icons = iconLabels.map((label, index) => {
    const angle = (index / iconLabels.length) * Math.PI * 2
    const radius = isMobile ? 1.8 : 2.5
    const height = isMobile ? 0.2 : 0.4

    return {
      label,
      // Target destination coordinates
      position: [
        Math.cos(angle) * radius,
        Math.sin(angle * 2) * 0.4 + height,
        Math.sin(angle) * radius,
      ],
    }
  })

  // Center of Gravity coordinate
  const gravityCenter = { x: 0, y: 0.5, z: 0 }

  return (
    <group scale={isMobile ? 0.8 : 1} position={[0, isMobile ? -0.2 : -0.4, 0]}>
      
      {/* CORE ELEMENTS: Expand from Center */}
      <motion3d.group
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, type: 'spring', bounce: 0.3 }}
      >
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          
          {/* Floating Abstract Core */}
          <mesh position={[0, 0.5, 0]} rotation={[0, Math.PI / 4, 0]}>
            <octahedronGeometry args={[0.4, 0]} />
            <meshStandardMaterial color="#050505" roughness={0.1} metalness={0.9} />
          </mesh>

          {/* Inner Glowing Wireframe */}
          <mesh position={[0, 0.5, 0]} rotation={[0, Math.PI / 4, 0]}>
            <octahedronGeometry args={[0.42, 0]} />
            <meshBasicMaterial color="#ff2038" wireframe={true} transparent opacity={0.5} />
          </mesh>

          {/* Sleek Cyber Base */}
          <mesh position={[0, -0.4, 0]}>
            <cylinderGeometry args={[1.2, 1.5, 0.1, 64]} />
            <meshStandardMaterial color="#050505" emissive="#1a0000" roughness={0.4} metalness={0.8} />
          </mesh>

          {/* Glowing Red Base Ring */}
          <mesh position={[0, -0.34, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[1.1, 0.015, 16, 100]} />
            <meshBasicMaterial color="#ff2038" transparent opacity={0.8} />
          </mesh>

          {/* Orbital Track Ring */}
          <mesh position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[isMobile ? 1.8 : 2.5, 0.004, 16, 100]} />
            <meshBasicMaterial color="#ff2038" transparent opacity={0.2} />
          </mesh>
        </Float>
      </motion3d.group>

      {/* TECH LABELS: Shoot out from the Center of Gravity */}
      {icons.map((item, index) => (
        <motion3d.group
          key={item.label}
          // Start at the center of gravity (0, 0.5, 0) with 0 scale
          initial={{ 
            x: gravityCenter.x, 
            y: gravityCenter.y, 
            z: gravityCenter.z, 
            scale: 0 
          }}
          // Travel to their respective orbital coordinates
          animate={{ 
            x: item.position[0], 
            y: item.position[1], 
            z: item.position[2], 
            scale: 1 
          }}
          transition={{ 
            duration: 2, 
            delay: index * 0.1 + 0.5, // Staggered explosion effect
            type: "spring", 
            stiffness: 40,
            damping: 12
          }}
        >
          <Float speed={1.5} floatIntensity={0.5}>
            <Html center transform distanceFactor={isMobile ? 8 : 6}>
              <div className="cursor-default rounded-full border border-red-900/30 bg-black/80 px-4 py-2 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-red-500/80 hover:bg-red-950/40 hover:shadow-[0_0_20px_rgba(255,32,56,0.2)]">
                <span className="text-xs font-bold tracking-wider text-zinc-200 md:text-sm">
                  {item.label}
                </span>
              </div>
            </Html>
          </Float>
        </motion3d.group>
      ))}
    </group>
  )
}

function TechOrbitSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-black py-20">
      
      {/* Background Grids & Glows */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#8000000a_1px,transparent_1px),linear-gradient(to_bottom,#8000000a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/5 blur-[100px]" />

      {/* Section Headers */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute left-1/2 top-12 z-10 w-full -translate-x-1/2 px-4 text-center sm:top-16"
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-500 sm:text-xs">
          3D Overview
        </p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
          TECH CONSTELLATION
        </h2>
      </motion.div>

      {/* 3D Canvas wrapper triggered on Scroll */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-10 pt-20"
      >
        <Canvas
          dpr={isMobile ? [1, 1] : [1, 1.5]}
          camera={{
            position: isMobile ? [0, 1.5, 7.5] : [0, 1.8, 6.5],
            fov: isMobile ? 55 : 45,
          }}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.2} />
          <pointLight position={[0, 0.5, 0]} color="#ff2038" intensity={2} distance={3} />
          
          <spotLight position={[4, 5, 4]} angle={0.5} penumbra={1} color="#ffffff" intensity={2} />
          <spotLight position={[-4, 3, -4]} angle={0.5} penumbra={1} color="#ff2038" intensity={5} />

          <OrbitControls
            autoRotate
            autoRotateSpeed={isMobile ? 0.4 : 0.6}
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 3}
          />

          <Workstation isMobile={isMobile} />

          <ContactShadows position={[0, -1.2, 0]} opacity={0.4} scale={10} blur={2.5} color="#000000" />
        </Canvas>
      </motion.div>
    </section>
  )
}

export default memo(TechOrbitSection)