import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshWobbleMaterial, useGLTF, OrbitControls } from '@react-three/drei';
import { Vector3, Mesh, MeshStandardMaterial, Group } from 'three';
import { useLocation } from 'react-router-dom';

function Model(props: { mousePosition: { x: number, y: number } }) {
  const { mousePosition } = props;
  const mesh = useRef<Group>(null);
  
  // Use simple geometric shape instead of loaded model
  useFrame(() => {
    if (!mesh.current) return;
    
    // Smooth follow cursor with limits
    const targetRotationX = (mousePosition.y * 0.2) - 0.2;
    const targetRotationY = (mousePosition.x * 0.5) - 0.2;
    
    mesh.current.rotation.x = mesh.current.rotation.x + (targetRotationX - mesh.current.rotation.x) * 0.05;
    mesh.current.rotation.y = mesh.current.rotation.y + (targetRotationY - mesh.current.rotation.y) * 0.05;
    
    // Add subtle animation
    mesh.current.rotation.z += 0.001;
  });

  return (
    <group ref={mesh} position={[0, 0, 0]} scale={[1.5, 1.5, 1.5]}>
      {/* Main shape */}
      <mesh position={[0, 0, 0]}>
        <dodecahedronGeometry args={[1, 0]} />
        <MeshWobbleMaterial 
          color="#319795" 
          factor={0.15} 
          speed={1} 
          wireframe={true}
          transparent={true}
          opacity={0.8}
        />
      </mesh>
      
      {/* Inner shape */}
      <mesh position={[0, 0, 0]} scale={[0.7, 0.7, 0.7]}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color="#6D28D9" 
          emissive="#4C1D95"
          emissiveIntensity={0.5}
          wireframe={true}
        />
      </mesh>
      
      {/* Outer points */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const x = Math.sin(angle) * 1.5;
        const y = Math.cos(angle) * 1.5;
        const z = Math.sin(angle * 2) * 0.5;
        
        return (
          <mesh key={i} position={[x, y, z]} scale={[0.1, 0.1, 0.1]}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial 
              color="#fff" 
              emissive="#fff"
              emissiveIntensity={0.8}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function ThreeScene() {
  const location = useLocation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Only show on homepage
  if (location.pathname !== '/') {
    return null;
  }
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to -1 to 1
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-dark opacity-90 z-10"></div>
      <Canvas className="z-0">
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.6} color="#319795" />
        <pointLight position={[-10, -10, -10]} intensity={0.4} color="#6D28D9" />
        <Model mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
}

export default ThreeScene;