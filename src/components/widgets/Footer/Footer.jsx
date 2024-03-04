import React from 'react'
import styles from './footer.module.css'
import { ReactComponent as Vk } from '../../../assets/svg/vk.svg';
import { ReactComponent as Tel } from '../../../assets/svg/tel.svg';
import { ReactComponent as Dis } from '../../../assets/svg/dis.svg';

function Footer() {

  return (
    <>
      <div className={styles.footer}>
        <h2 className={styles.appname}>Local music party</h2>
        <nav className={styles.social}>
          <Vk className={styles.footerIcon}/>
          <Tel className={styles.footerIcon}/>
          <Dis className={styles.footerIcon}/>
        </nav>
        <span className={styles.copyright}>©2024</span>
      </div>
    </>
  );
}
export default Footer