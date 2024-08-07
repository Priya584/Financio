// components/Avatar.tsx
"use client"

import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

interface AvatarProps {
  modelPath: string;
  message: string;
}

function AvatarModel({ modelPath }: { modelPath: string }) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={[5, 5, 5]} position={[0, -2, 0]} />;
}

const Avatar: React.FC<AvatarProps> = ({ modelPath, message }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-48 h-96 m-5"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Canvas camera={{ position: [0, 7, 10] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} />
        <Suspense fallback={null}>
          <AvatarModel modelPath={modelPath} />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
      {hovered && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 text-white px-3 py-1 rounded">
          {message}
        </div>
      )}
    </div>
  );
};

export default Avatar;
