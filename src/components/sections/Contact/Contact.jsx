import React from 'react'
import styles from './contact.module.css'

const Contact = () => {
  return (
    <div className={styles.section}>
      <h1>Свяжитесь с нами</h1>
      <div className={styles.wrapper}>
      <form>

        <input type="text" className={styles.leftcolumn}></input>

        <div className={styles.rightcolumn}>
          <input type="text"/>
          <input type="email"/>
          <select name="topic">
            <option value="">Выберете тему обращения</option>
            <option value="announcement">Заявка</option>
            <option value="comment">Отзыв</option>
            <option value="ask">Вопрос</option>
          </select>
          <button>Отправить</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Contact