import React from 'react'
import styles from './contact.module.css'

const Contact = () => {
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
      <h1>Свяжитесь с нами</h1>
      <h3>Наши администраторы ответят вам в обратном письме</h3>
      <form>
        <textarea type="text" className={styles.leftcolumn} placeholder='Расскажите нам о вашей идее'></textarea>
        <div className={styles.rightcolumn}>
          <input className={styles.rightinput} type="text" placeholder='Как вас зовут?'/>
          <input className={styles.rightinput} type="email" placeholder='Ваш e-mail'/>
          <select className={styles.rightselect} name="topic">
            <option value="">Выберете тему обращения</option>
            <option value="announcement">Заявка</option>
            <option value="comment">Отзыв</option>
            <option value="ask">Вопрос</option>
          </select>
          <button className={styles.rightbutton}>Отправить</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Contact

