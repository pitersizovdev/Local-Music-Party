import React from 'react'
import styles from './home.module.css'
import Header from '../../widgets/Header/Header'
import Download from '../../widgets/Downloads/Downloads'
import BigLogo from '../../widgets/BigLogo/BigLogo'

const Home = () => {
  return (
    <div className={styles.section}>
      <Header/>
      <BigLogo/>
      <Download/>
    </div>
  )
}

export default Home