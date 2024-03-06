import React, { useState } from 'react'
import styles from './contact.module.css'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Contact = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [feedBack, setFeedBack] = useState({
    Name:'',
    Email:'',
    Topic:'',
    Comment:'',
  });
  
  const data = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFeedBack({ ...feedBack, [name]: value });
  }
  
  const send = async (e) => {
    e.preventDefault();
    const { Name, Email, Topic, Comment } = feedBack;
  
    if (Name === '' || Email === '' || Topic === '' || Comment === '') {
      alert('Пожалуйста, заполните все поля и выберите тему обращения');
      return;
    }
  
    if (!Email.includes('@')) {
      alert('Пожалуйста, введите корректный Email адрес');
      return;
    }
  
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        Name, Email, Topic, Comment
      })
    }
  
    const res = await fetch(`https://local-music-party-default-rtdb.europe-west1.firebasedatabase.app/${Topic}.json`, options);
    console.log(feedBack);
  
    if (res.ok) {
      alert('Заявка успешно отправлена! 🚀');
      setFeedBack({
        Name: '',
        Email: '',
        Topic: '',
        Comment: ''
      });
    } else {
      alert('Что-то пошло не так. Попробуйте снова! 😔');
    }
  }
  return (
    <div className={styles.section}>
        <h1>Свяжитесь с нами</h1>

        <form method='POST'>
          <textarea
            className={styles.leftcolumn}
            placeholder='Расскажите нам о вашей идее'
            name="Comment"
            value={feedBack.Comment}
            onChange={data}
          />

          <div className={styles.rightcolumn}>
          <h3>Наши администраторы ответят вам в обратном письме</h3>

          <div className={styles.rightset}>
            <input
              className={styles.rightinput}
              type="text"
              placeholder='Как вас зовут?'
              name="Name"
              value={feedBack.Name}
              onChange={data}
            />

            <input
              className={styles.rightinput}
              name="Email"
              type="email"
              placeholder='Ваш e-mail'
              value={feedBack.Email}
              onChange={data}
            />
            
            <select
              className={styles.rightselect}
              name="Topic"
              value={feedBack.Topic}
              onChange={data}>
              <option value="" disabled>Выберите тему обращения</option>
              <option value="Заявки">Заявка</option>
              <option value="Отзывы">Отзыв</option>
              <option value="Вопросы">Вопрос</option>
            </select>

            <button className={styles.rightbutton} onClick={send}>Отправить</button>
            </div>
          </div>
        </form>
    </div>
  );
}

export default Contact;
