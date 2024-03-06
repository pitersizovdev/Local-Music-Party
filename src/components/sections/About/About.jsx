import React from 'react';
import styles from './about.module.css';
import MockupMap from '../../../assets/mockups/mockup.png';
import Blob1 from '../../../assets/img/blob1.png';
import Blob2 from '../../../assets/img/blob2.png';
import Blob3 from '../../../assets/img/blob3.png';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

function About() {
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
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Что внутри?
      </motion.h1>
      <motion.img
        className={styles.mockupMap}
        src={MockupMap}
        alt="Logo"
        initial={{ y: "100vh" }}
        animate={inView ? { y: 0 } : { y: "100vh" }}
        transition={{ duration: 1 }}
      />

      <div className={styles.blob1}>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          Афиша – подборки крупных событий и выступлений локальных артистов!
        </motion.h3>
        <motion.img
          className={styles.blob1img}
          src={Blob1}
          alt="blob"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>

      <motion.div
        className={styles.blob2}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <motion.h3
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Эксклюзивные анонсы зарубежных исполнителей
        </motion.h3>
        <motion.img
          className={styles.blob2img}
          src={Blob2}
          alt="blob"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        />
      </motion.div>

      <motion.div
        className={styles.blob3}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
      >
        <motion.h3
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.9 }}
        >
          Поиск по городам, жанрам и площадкам
        </motion.h3>
        <motion.img
          className={styles.blob3img}
          src={Blob3}
          alt="blob"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        />
      </motion.div>
    </motion.div>
  );
}

export default About;
