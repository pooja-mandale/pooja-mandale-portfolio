import React, { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Text, Environment, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

const codeSnippets = [
  'const [data, setData] = useState(null)',
  'export default function Portfolio() {',
  '<motion.div animate={{ opacity: 1 }} />',
  'npm install lucide-react three.js',
  'const mesh = useRef()',
  'api.get("/user/profile").then(res => ...)',
  'import { Canvas } from "@react-three/fiber"',
  'console.log("Full Stack Dev mode ON")',
  'grid-template-columns: repeat(3, 1fr)',
  'await mongoose.connect(process.env.DB)',
  '() => setIsOpen(prev => !prev)',
  '<Scene />',
  'TailwindCSS: v4.0.0-alpha',
  'useEffect(() => { ... }, [deps])',
  'const theme = isDark ? "dark" : "light"',
  'git commit -m "Amazing 3D Code Field"'
]

const CodeSnippet = ({ position, speed }) => {
  const text = useMemo(() => codeSnippets[Math.floor(Math.random() * codeSnippets.length)], [])
  const textRef = useRef()

  useFrame(() => {
    if (textRef.current) {
      textRef.current.position.y += speed * 0.01
      if (textRef.current.position.y > 10) textRef.current.position.y = -10
    }
  })

  return (
    <Text
      ref={textRef}
      position={position}
      fontSize={0.2}
      color="#6366f1"
      font="/consola.ttf"
      anchorX="center"
      anchorY="middle"
      fillOpacity={0.15}
      strokeWidth={0.002}
      strokeColor="#a855f7"
    >
      {text}
    </Text>
  )
}

const CodeField = () => {
  const snippets = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10
      ],
      speed: 0.5 + Math.random() * 1.5,
      delay: Math.random() * 10
    }))
  }, [])

  return (
    <group>
      {snippets.map((props, i) => (
        <CodeSnippet key={i} {...props} />
      ))}
    </group>
  )
}

const Scene = () => {
  return (
    <div className="canvas-container fixed inset-0 -z-10 pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#6366f1" />
        <CodeField />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  )
}

export default Scene
