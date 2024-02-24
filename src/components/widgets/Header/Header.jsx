import React from 'react'
import styles from './header.module.css'
import { ReactComponent as Vk } from '../../../assets/svg/vk.svg';
import { ReactComponent as Tel } from '../../../assets/svg/tel.svg';
import { ReactComponent as Dis } from '../../../assets/svg/dis.svg';


function Header() {
  return (
    <div  className={styles.header}>
      <h2>Local music party</h2>
      <nav>
        <Vk/>
        <Tel/>
        <Dis/>
        <button>Скачать</button>
        </nav>
    </div>
  )
}

export default Header