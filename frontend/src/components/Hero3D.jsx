
import { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

class SRGBTextureLoader extends THREE.TextureLoader {
  load(url, onLoad, onProgress, onError) {
    return super.load(
      url,
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        onLoad?.(texture);
      },
      onProgress,
      onError
    );
  }
}

function ThreeDLogo() {
  const group = useRef();
  const texture = useLoader(SRGBTextureLoader, "/logo.png");

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.1;
  });

  return (
    <group ref={group}>
      <Float speed={1.6} floatIntensity={0.25} rotationIntensity={0.1}>
        <group rotation={[0, 0, 0]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[1.4, 1.4, 0.18, 96]} />
            <meshPhysicalMaterial
              color="#063b85"
              metalness={0.9}
              roughness={0.12}
              clearcoat={1}
              clearcoatRoughness={0.05}
            />
          </mesh>

          <mesh position={[0, 0, 0.095]}>
            <circleGeometry args={[1.37, 96]} />
            <meshBasicMaterial
              map={texture}
              transparent
              side={THREE.FrontSide}
              toneMapped={false}
            />
          </mesh>

          <mesh
            position={[0, 0, -0.095]}
            rotation={[0, Math.PI, 0]}
          >
            <circleGeometry args={[1.37, 96]} />
            <meshBasicMaterial
              map={texture}
              transparent
              side={THREE.FrontSide}
              toneMapped={false}
            />
          </mesh>

          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[1.405, 0.025, 12, 120]} />
            <meshBasicMaterial color="#40b9ff" />
          </mesh>

          <mesh position={[0, 0, -0.09]}>
            <torusGeometry args={[1.405, 0.025, 12, 120]} />
            <meshBasicMaterial color="#40b9ff" />
          </mesh>

          <mesh position={[0, 0, 0.09]}>
            <torusGeometry args={[1.405, 0.025, 12, 120]} />
            <meshBasicMaterial color="#40b9ff" />
          </mesh>
        </group>
      </Float>
    </group>
  );
}

function OrbitalRing({ radius, rotation, speed, color }) {
  const ref = useRef();

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.z += delta * speed;
    }
  });

  return (
    <mesh ref={ref} rotation={rotation}>
      <torusGeometry args={[radius, 0.012, 8, 160]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

function OrbitingNodes() {
  const ref = useRef();

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.16;
    }
  });

  const nodes = Array.from({ length: 24 }, (_, i) => {
    const angle = (i / 24) * Math.PI * 2;
    const radius = 2.2 + (i % 3) * 0.18;

    return [
      Math.cos(angle) * radius,
      Math.sin(angle * 2) * 0.6,
      Math.sin(angle) * radius,
    ];
  });

  return (
    <group ref={ref}>
      {nodes.map((position, i) => (
        <mesh key={i} position={position}>
          <sphereGeometry
            args={[i % 6 === 0 ? 0.065 : 0.025, 10, 10]}
          />
          <meshBasicMaterial color="#80dfff" />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1.3} />

      <directionalLight
        position={[4, 5, 5]}
        intensity={3}
        color="#ffffff"
      />

      <pointLight
        position={[-3, 2, 3]}
        intensity={25}
        color="#168bff"
      />

      <pointLight
        position={[3, -3, 2]}
        intensity={20}
        color="#69dfff"
      />

      <ThreeDLogo />

      <OrbitalRing
        radius={2.08}
        rotation={[Math.PI / 3, 0, 0]}
        speed={0.12}
        color="#168bff"
      />

      <OrbitalRing
        radius={2.43}
        rotation={[0, Math.PI / 3, 0]}
        speed={-0.08}
        color="#69dfff"
      />

      <OrbitalRing
        radius={2.68}
        rotation={[Math.PI / 4, Math.PI / 5, 0]}
        speed={0.06}
        color="#0754b8"
      />

      <OrbitingNodes />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.06}
        autoRotate
        autoRotateSpeed={0.55}
        rotateSpeed={0.9}
      />
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="hero-3d-container premium-hero-3d">
      <div className="hero-hologram-label label-one">
        <span className="hologram-dot" />
        ARTIFICIAL INTELLIGENCE
      </div>

      <div className="hero-hologram-label label-two">
        <span className="hologram-dot" />
        DIGITAL INNOVATION
      </div>

      <div className="hero-hologram-label label-three">
        <span className="hologram-dot" />
        FUTURE TECHNOLOGY
      </div>

      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 45 }}
        dpr={[1, 1.25]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>

      <div className="hero-3d-caption">
        <span className="hero-3d-dot" />
        DRAG TO EXPLORE IN 3D
      </div>
    </div>
  );
}
