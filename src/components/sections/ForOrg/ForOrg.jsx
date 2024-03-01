import React from 'react'
import styles from './forOrg.module.css'
import Logobg from '../../../assets/img/logobg.png'
import MockupMap from '../../../assets/mockups/mockup.png';
import Blob4 from '../../../assets/img/blob4.png';

function ForOrg() {
  return (
    <div className={styles.section}>
      <img className={styles.logobg} src={Logobg} alt="logo" />
      <div className={styles.wrapper}>
      <h1 className={styles.titleOrg}>Организаторам</h1>
      <h1 className={styles.titleArt}>и <br/>артистам</h1>
        <img className={styles.mockupMap} src={MockupMap} alt="mockup" />
          <div className={styles.blob4}>
          <h3 className={styles.titleStep1}>Есть идея для <br/> мероприятия?</h3>
          <h3 className={styles.titleStep2}>Оставь заявку <br/> на нашем сайте</h3>
          <h3 className={styles.titleStep3}>Получи 10% баллами от <br/>ресторанов-партнеров</h3>
          <img className={styles.blob4img} src={Blob4} alt="blob" />
        </div>
      </div>
    </div>
  )
}

export default ForOrg