import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, PresentationControls, Environment } from '@react-three/drei'
import * as THREE from 'three'

function PDFDocument(props: any) {
  const group = useRef<THREE.Group>(null!)
  
  // Simple animation
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        (state.mouse.x * Math.PI) / 10,
        0.05
      )
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        (state.mouse.y * Math.PI) / 10,
        0.05
      )
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      {/* PDF document representation */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[2.1, 3, 0.1]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      
      {/* PDF icon/text */}
      <mesh position={[0, 0, 0.051]}>
        <planeGeometry args={[1.8, 2.7]} />
        <meshBasicMaterial color="#f5f5f5" />
      </mesh>
      
      {/* Red PDF banner */}
      <mesh position={[0, 1, 0.052]}>
        <planeGeometry args={[1.5, 0.5]} />
        <meshBasicMaterial color="#f44336" />
      </mesh>
    </group>
  )
}

const PDFModel: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas dpr={[1, 2]} shadows camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <PDFDocument position={[0, 0, 0]} />
        </PresentationControls>
        
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}

export default PDFModel
