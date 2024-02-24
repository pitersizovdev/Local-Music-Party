import React from 'react';
import styles from './header.module.css';
import { ReactComponent as Vk } from '../../../assets/svg/vk.svg';
import { ReactComponent as Tel } from '../../../assets/svg/tel.svg';
import { ReactComponent as Dis } from '../../../assets/svg/dis.svg';
import Lillogo3d from '../../../assets/img/lillogo3d.png';
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {

  return (
    <div className={styles.header}>

      <img className={styles.lillogo3d} src={Lillogo3d} alt="Logo" />
      <h2 className={styles.appname}>Local music party</h2>

      <nav className={styles.social}>
        <Vk />
        <Tel />
        <Dis />
        <button className={styles.downl}>Скачать</button>
      </nav>

    </div>
  );
}

export default Header;

