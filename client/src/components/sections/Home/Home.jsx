import React from 'react';
import styles from './home.module.css';
import Header from '../../widgets/Header/Header';


const Home = () => {
  return (
    <div className={styles.section}>
      <Header />
      <img src='../../Images/ios.png' />
    </div>
  );
};

export default Home;
