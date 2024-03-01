import React from 'react';
import styles from './home.module.css';
import Header from '../../widgets/Header/Header';

const Home = () => {
  return (
    <div className={styles.section}>
      <Header />
      <h1 className={styles.title}>Исследуй <br/>музыку!</h1>
      <h3 className={styles.title2}>Мобильное приложение для <br/>поиска локальных мероприятий</h3>
      <div className={styles.backgroundImage}></div>
      <div className={styles.backgroundImage2}></div>
    </div>
  );
};
export default Home;