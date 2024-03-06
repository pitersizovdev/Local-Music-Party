import React from 'react';
import styles from './home.module.css';
import Header from '../../widgets/Header/Header';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { Logo3d } from '../../models/Logo3d';


const Home = () => {
  return (
    <div className={styles.section}>
      <Header />
      
      <div className={styles.presentation}>
        <h1 className={styles.title}>Исследуй <br/>музыку!</h1>
        <h3 className={styles.title2}>Мобильное приложение для поиска локальных мероприятий</h3>
        <button className={styles.downl}>Скачать</button>
      <div/>

      <div className={styles.canva}>
      <Canvas>
        <Environment preset='night' />
          <OrbitControls enableZoom={false}/>
          <Logo3d/>
      </Canvas>
      </div>

      <div className={styles.backgroundImage}></div>
      <div className={styles.backgroundImage2}></div>

    </div>
    </div>
  );
};
export default Home;