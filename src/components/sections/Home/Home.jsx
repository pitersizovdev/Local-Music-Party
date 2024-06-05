import React, { Suspense } from "react";
import styles from "./home.module.css";
import Header from "../../widgets/Header/Header";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Logo3dlowpoly from "../../models/Logo3dlowpoly";

const Home = () => {
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.presentation}>
          <h1 className={styles.title}>
            Исследуй <br />
            музыку!
          </h1>
          <h3 className={styles.title2}>
            Мобильное приложение для поиска локальных мероприятий
          </h3>
          <button className={styles.downl}>
            <a href="#download">Скачать</a>
          </button>
          <div />

         {/* <div className={styles.canva}>
            <Canvas>
              <Suspense fallback={false}>
                <Environment preset="night" />
                <OrbitControls enableZoom={false} />
                <Logo3dlowpoly />
              </Suspense>
            </Canvas>
          </div>*/}

          <div className={styles.backgroundImage}></div>
          <div className={styles.backgroundImage2}></div>
        </div>
      </div>
    </div>
  );
};
export default Home;
