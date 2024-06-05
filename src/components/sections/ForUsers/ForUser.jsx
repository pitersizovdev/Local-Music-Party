import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./forUsers.module.css";
import MockupMap from "../../../assets/mockups/mockup3.png";
import Blob5 from "../../../assets/img/blob5.png";
import Blob6 from "../../../assets/img/blob6.png";
import Blob7 from "../../../assets/img/blob7.png";

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
      <div className={styles.wrapper}>
        <motion.div
          className={styles.content}
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
        <div className={styles.blobs}>
          <motion.div
            className={styles.blob5}
            id={styles.right}
            initial={{ opacity: 0, y: "100vh" }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : "100vh" }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.h3 className={styles.titleStep1}>
              Узнайте о&nbsp;новых артистах
            </motion.h3>
            {inView && (
              <motion.img
                className={styles.blob5img}
                src={Blob5}
                alt="blob"
          
              />
            )}
          </motion.div>

          <motion.div
            className={styles.blob5}
            id={styles.left}
            initial={{ opacity: 0, y: "100vh" }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : "100vh" }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <motion.h3 className={styles.titleStep1}>
              Сможете запланировать поход на мероприятие
            </motion.h3>
            <motion.img
              className={styles.blob5img}
              src={Blob6}
              alt="blob"
           
            />
          </motion.div>

          <motion.div
            className={styles.blob5}
            id={styles.right}
            initial={{ opacity: 0, y: "100vh" }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : "100vh" }}
            transition={{ duration: 1, delay: 1.7 }}
          >
            <motion.h3 className={styles.titleStep1}>
              Посетите больше мероприятиий!
            </motion.h3>
            <motion.img
              className={styles.blob5img}
              src={Blob7}
              alt="blob"
         
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default ForUser;
