import React from 'react'
import styles from './forUsers.module.css'
import MockupMap from '../../../assets/mockups/mockup.png';
import Blob5 from '../../../assets/img/blob5.png';
import Blob6 from '../../../assets/img/blob6.png';
import Blob7 from '../../../assets/img/blob7.png';

function ForUser() {
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <h1 className={styles.titleOrg}>Пользователям</h1>
        <img className={styles.mockupMap} src={MockupMap} alt="mockup" />
      </div>

      <div className={styles.blob5}>
        <h3 className={styles.titleStep1}>Узнайте о новых и набирающих <br/> популярность артистах</h3>
        <img className={styles.blob5img} src={Blob5} alt="blob" />
      </div>

      <div className={styles.blob6}>
        <h3 className={styles.titleStep2}>Сможете запланировать поход <br/> на мероприятие заранее</h3>
        <img className={styles.blob6img} src={Blob6} alt="blob" />
      </div>

      <div className={styles.blob7}>
        <h3 className={styles.titleStep3}>Посетите больше <br/> музыкальных <br/> мероприятиий!</h3>
        <img className={styles.blob7img} src={Blob7} alt="blob" />
      </div>
      
    </div>
  )
}

export default ForUser