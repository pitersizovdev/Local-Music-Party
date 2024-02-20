import React from 'react'
import styles from './header.module.css'

function Header() {
  return (
    <div  className={styles.header}>
    <nav>
        <ul>
          <li>Главная</li>
          <li>Приложение</li>
          <li>Пользователям</li>
          <li>ЧАВО</li>
          <li>Контакты</li>
        </ul>
        <button>Скачать</button>
    </nav>
    </div>
  )
}

export default Header