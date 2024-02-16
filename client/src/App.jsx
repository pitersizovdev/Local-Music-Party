import React from 'react'
import Home from './components/sections/Home/Home'
import About from './components/sections/About/About'
import ForOrg from './components/sections/ForOrg/ForOrg'
import ForUser from './components/sections/ForUsers/ForUser'
import Faq from './components/sections/Faq/Faq'
import Contact from './components/sections/Contact/Contact'
import Footer from './components/widgets/Footer/Footer'
import styles from './app.module.css'
import Header from './components/widgets/Header/Header'

const App = () => {
  return (
    <div className={styles.container}>

      <Home/>
      <About/>
      <ForOrg/>
      <ForUser/>
      <Faq/>
      <Contact/>

    </div>
  )
}

export default App