import React, { Suspense } from 'react';
import styles from './downl.module.css';
import MiniLogo from '../../../assets/svg/minilogo.svg';
import Qr from '../../../assets/svg/qr.svg';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Scene from '../../models/Scene';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';

function Download() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      className={styles.section}
      id="download"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
    >

<div className={styles.scene}>
  <Canvas>
    <Suspense fallback={null}>
      <Environment preset='night' />
      <OrbitControls enableZoom={false} enableRotate={false} />
      <Scene/>
    </Suspense>
  </Canvas>
</div>

      <motion.img
        className={styles.minilogo}
        src={MiniLogo}
        alt="logo"
        initial={{ opacity: 0, x: "-100vw", y: "-100vh" }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: "-100vw", y: "-100vh" }}
        transition={{ duration: 1 }}
      />
      <motion.img
        className={styles.qr}
        src={Qr}
        alt="qr"
        initial={{ opacity: 0, x: "100vw", y: "-100vh" }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: "100vw", y: "-100vh" }}
        transition={{ duration: 1, delay: 0.25 }}
      />
      <motion.div className={styles.android}
        onClick={() => window.location.href = "https://play.google.com/store/games?hl=ru&gl=US&pli=1"}
        initial={{ opacity: 0, x: "-100vw", y: "100vh" }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: "-100vw", y: "100vh" }}
        transition={{ duration: 1, delay: 0.5 }}>
      </motion.div>

      <motion.div className={styles.ios}
        onClick={() => window.location.href = "https://www.apple.com/app-store/"}
        initial={{ opacity: 0, x: "100vw", y: "100vh" }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: "100vw", y: "100vh" }}
        transition={{ duration: 1, delay: 0.75 }}>
      </motion.div>

    </motion.div>
  );
}

export default Download;
