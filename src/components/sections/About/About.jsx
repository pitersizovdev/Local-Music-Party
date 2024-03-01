import React from 'react';
import styles from './about.module.css';
import MockupMap from '../../../assets/mockups/mockup.png';

function About() {
  return (
    <div className={styles.section}>
      <h1 className={styles.title}>Что внутри?</h1>
      <img className={styles.mockupMap} src={MockupMap} alt="Logo" />
      <div className={styles.blob1}><h3>Афиша – подборки крупных событий и выступлений локальных артистов!</h3></div>
      <div className={styles.blob2}><h3>Экслюзивные анонсы зарубежных исполнителей</h3></div>
      <div className={styles.blob3}><h3>Поиск по городам, жанрам и площадкам</h3></div>
    </div>
  );
}
 
export default About;