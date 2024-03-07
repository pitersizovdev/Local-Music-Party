import React from 'react'
import styles from './skeletonloadingscreen.module.css'
import MiniLogo from '../../../assets/img/lillogo3d.png'

const SkeletonLoadingScreen = () => {
    return (
      <div className={styles.loadingbg} style={{ backgroundColor: '#281F61' }}>
        <div className={styles.skeletonlogo}>
          <img src={MiniLogo} alt="Loading..." className={styles.skeletonlogo} />
        </div>
      </div>
    );
  };

export default SkeletonLoadingScreen