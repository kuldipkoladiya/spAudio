"use client";

import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function Wave() {
    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh>
                <torusKnotGeometry args={[1, 0.3, 128, 32]} />
                <meshStandardMaterial color="#7c3aed" wireframe />
            </mesh>
        </Float>
    );
}

export default function SoundWave() {
    return (
        <div className="w-full h-[300px] md:h-[500px]">
            <Canvas>
                <ambientLight intensity={1} />
                <directionalLight position={[2, 2, 2]} />
                <Wave />
            </Canvas>
        </div>
    );
}