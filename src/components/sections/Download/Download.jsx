import React from 'react';
import styles from './downl.module.css';
import MiniLogo from '../../../assets/svg/minilogo.svg';
import Qr from '../../../assets/svg/qr.svg';
import Android from '../../../assets/svg/android.svg';
import Ios from '../../../assets/svg/ios.svg';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

function Download() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      className={styles.section}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
    >
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
      <motion.img
        className={styles.android}
        src={Android}
        alt="android"
        initial={{ opacity: 0, x: "-100vw", y: "100vh" }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: "-100vw", y: "100vh" }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.img
        className={styles.ios}
        src={Ios}
        alt="ios"
        initial={{ opacity: 0, x: "100vw", y: "100vh" }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: "100vw", y: "100vh" }}
        transition={{ duration: 1, delay: 0.75 }}
      />
    </motion.div>
  );
}

export default Download;
