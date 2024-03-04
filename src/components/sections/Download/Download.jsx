import React from 'react'
import styles from './downl.module.css'
import MiniLogo from '../../../assets/svg/minilogo.svg'
import Qr from '../../../assets/svg/qr.svg'
import Android from '../../../assets/svg/android.svg'
import Ios from '../../../assets/svg/ios.svg'

function Download() {
  return (
    <div className={styles.section}>
      <img className={styles.minilogo} src={MiniLogo} alt="logo" />
      <img className={styles.qr} src={Qr} alt="qr" />
      <img className={styles.android} src={Android} alt="android" />
      <img className={styles.ios} src={Ios} alt="ios" />
    </div>
  )
}

export default Download