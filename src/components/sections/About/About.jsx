import React from 'react';
import styles from './about.module.css';
import MockupMap from '../../../assets/mockups/mockup.png';
import Blob1 from '../../../assets/img/blob1.png'
import Blob2 from '../../../assets/img/blob2.png'
import Blob3 from '../../../assets/img/blob3.png'

function About() {
  return (
    <div className={styles.section}>

        <h1 className={styles.title}>Что внутри?</h1>
        <img className={styles.mockupMap} src={MockupMap} alt="Logo" />

        <div className={styles.blob1}>
          <h3>Афиша – подборки крупных событий и выступлений локальных артистов!</h3>
          <img className={styles.blob1img} src={Blob1} alt="blob" />
        </div>

        <div className={styles.blob2}>
          <h3>Экслклюзивные анонсы зарубежных исполнителей</h3>
          <img className={styles.blob2img} src={Blob2} alt="blob" />
        </div>

        <div className={styles.blob3}>
          <h3>Поиск по городам, жанрам, и площадкам</h3>
          <img className={styles.blob3img} src={Blob3} alt="blob" />
        </div>
        
    </div>
  );
}
 
export default About;