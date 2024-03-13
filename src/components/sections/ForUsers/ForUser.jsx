import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './forUsers.module.css';
import MockupMap from '../../../assets/mockups/mockup3.png';
import Blob5 from '../../../assets/img/blob5.png';
import Blob6 from '../../../assets/img/blob6.png';
import Blob7 from '../../../assets/img/blob7.png';

function ForUser() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      className={styles.section}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
    >
      <motion.div
        className={styles.wrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className={styles.titleOrg}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Пользователям
        </motion.h1>
        {inView && (
          <motion.img
            className={styles.mockupMap}
            src={MockupMap}
            alt="mockup"
            initial={{ y: "100vh" }}
            animate={inView ? { y: 0 } : { y: "100vh" }}
            transition={{ duration: 1 }}
          />
        )}
      </motion.div>

      <motion.div
        className={styles.blob5}
        initial={{ opacity: 0, y: "100vh" }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : "100vh" }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.h3
          className={styles.titleStep1}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Узнайте о новых и набирающих <br/> популярность артистах
        </motion.h3>
        {inView && (
          <motion.img
            className={styles.blob5img}
            src={Blob5}
            alt="blob"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
        )}
      </motion.div>

      <motion.div
        className={styles.blob6}
        initial={{ opacity: 0, y: "100vh" }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : "100vh" }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <motion.h3
          className={styles.titleStep2}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, delay: 1.75 }}
        >
          Сможете запланировать поход <br/> на мероприятие заранее
        </motion.h3>
        <motion.img
          className={styles.blob6img}
          src={Blob6}
          alt="blob"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, delay: 2 }}
        />
      </motion.div>

      <motion.div
        className={styles.blob7}
        initial={{ opacity: 0, y: "100vh" }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : "100vh" }}
        transition={{ duration: 1, delay: 1.7 }}
      >
        <motion.h3
          className={styles.titleStep3}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          Посетите больше <br/> музыкальных <br/> мероприятиий!
        </motion.h3>
        <motion.img
          className={styles.blob7img}
          src={Blob7}
          alt="blob"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, delay: 2.25 }}
        />
      </motion.div>
    </motion.div>
  );
}

export default ForUser;