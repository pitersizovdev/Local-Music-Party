import React from 'react'
import Home from './components/sections/Home/Home'
import About from './components/sections/About/About'
import ForOrg from './components/sections/ForOrg/ForOrg'
import ForUser from './components/sections/ForUsers/ForUser'
import Faq from './components/sections/Faq/Faq'
import Contact from './components/sections/Contact/Contact'
import styles from './app.module.css'
import Downl from './components/sections/Download/Download'

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>

      <Home/>
      <About/>
      <ForOrg/>
      <ForUser/>
      <Faq/>
      <Contact/>
      <Downl/>
      </div>
    </div>
  )
}

export default App