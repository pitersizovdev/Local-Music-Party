import React from 'react'
import styles from './forUsers.module.css'
import MockupMap from '../../../assets/mockups/mockup.png';


function ForUser() {
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <h1 className={styles.titleOrg}>Пользователям</h1>
        <img className={styles.mockupMap} src={MockupMap} alt="mockup" />
      </div>

      <div className={styles.blob5}>
        <h3 className={styles.titleStep1}>Узнайте о новых и набирающих <br/> популярность артистах</h3>
        <h3 className={styles.titleStep2}>Сможете запланировать поход <br/> на мероприятие заранее</h3>
        <h3 className={styles.titleStep3}>Посетите больше <br/> музыкальных мероприятиий!</h3>

      </div>
    </div>
  )
}

export default ForUser