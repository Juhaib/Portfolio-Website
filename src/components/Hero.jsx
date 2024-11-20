import { motion } from "framer-motion";
import { styles } from "../styles";
import { useEffect } from "react";
import * as THREE from "three";

const ComputersCanvas = () => {
  useEffect(() => {
    // Basic Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Geometry Creation with Validation
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array([
      // Valid vertices for a triangle
      0.0, 1.0, 0.0,
      -1.0, -1.0, 0.0,
      1.0, -1.0, 0.0,
    ]);

    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    // Validate geometry attributes
    const positionArray = geometry.attributes.position.array;
    console.assert(
      !positionArray.some(isNaN),
      "Position attribute contains NaN values."
    );

    // Compute bounding sphere and box
    geometry.computeBoundingSphere();
    geometry.computeBoundingBox();

    // Create Material
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    // Create Mesh
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Camera Position
    camera.position.z = 5;

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on Component Unmount
    return () => {
      document.body.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return null; // No JSX since Three.js manages the canvas directly
};

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Juhaib</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
      </div>

      {/* Render ComputersCanvas */}
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
