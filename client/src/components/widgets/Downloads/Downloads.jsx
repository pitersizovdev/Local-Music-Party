import React from 'react'
import styles from './downloads.module.css'

const Downloads = () => {
  return (
    <div className={styles.downloads}>
        <img src='../../../../public/download/googleplay.svg' className={styles.googleplay}></img>
        <img src='../../../../public/download/appstore.svg' className={styles.ios}></img>
    </div>
  )
}

export default Downloads