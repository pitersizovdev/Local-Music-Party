import React from 'react';
import styles from './forOrg.module.css';
import Logobg from '../../../assets/img/logobg.png';
import MockupMap from '../../../assets/mockups/mockup2.png';
import Blob4 from '../../../assets/img/blob4.png';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

function ForOrg() {
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
    >   <div className={styles.wrapper}>
      <img
        className={styles.logobg}
        src={Logobg}
        alt="logo"
      />
      <motion.h1
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Организаторам
      </motion.h1>

      <motion.img
        className={styles.mockupMap}
        src={MockupMap}
        alt="mockup"
        initial={{ y: "100vh" }}
        animate={inView ? { y: 0 } : { y: "100vh" }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className={styles.blob4}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.h3
          className={styles.titleStep1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.75 }}
        >
          Осветим ваши идеи!
        </motion.h3>
        <motion.h3
          className={styles.titleStep2}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.75 }}
        >
          Оставь заявку <br/> на нашем сайте
        </motion.h3>
        <motion.h3
          className={styles.titleStep3}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.75 }}
        >
          Получайте 10% баллами <br/>от ресторанов-партнеров
        </motion.h3>
        <motion.img
          className={styles.blob4img}
          src={Blob4}
          alt="blob"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.25 }}
        />
      </motion.div></div>
    </motion.div>
  );
}



export default ForOrg