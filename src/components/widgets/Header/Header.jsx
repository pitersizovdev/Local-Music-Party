import React from 'react';
import styles from './header.module.css';
import { ReactComponent as Vk } from '../../../assets/svg/vk.svg';
import { ReactComponent as Tel } from '../../../assets/svg/tel.svg';
import { ReactComponent as Dis } from '../../../assets/svg/dis.svg';
import Lillogo3d from '../../../assets/img/lillogo3d.png';
import Toggle from '../Toggle/Toggle';



function Header() {

  return (
    <div className={styles.header}>
      <img className={styles.lillogo3d} src={Lillogo3d} alt="Logo" />
      <h2 className={styles.appname}>Local music party</h2>
      
      <nav className={styles.social}>
        <a href="https://vk.com"><Vk /></a>
        <a href="https://web.telegram.org/k/"><Tel /></a>
        <a href="https://discord.com/"><Dis /></a>
        <button className={styles.downl} ><a href="#download">Скачать</a></button>
      </nav>
      <div className={styles.toggle}><Toggle /></div>
    </div>
  );
}

export default Header;
