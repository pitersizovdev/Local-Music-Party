import React, {useState} from 'react'
import { FaBars, FaXmark } from "react-icons/fa6";
import { MdCloudDownload } from "react-icons/md";
import { ReactComponent as Vk } from '../../../assets/svg/vk.svg';
import { ReactComponent as Tel } from '../../../assets/svg/tel.svg';
import { ReactComponent as Dis } from '../../../assets/svg/dis.svg';
import styles from './toggle.module.css'

const Toggle = () => {
const [isOpen, setOpen] = useState(false)

  return (
    <div className={styles.toggle}>      
    {isOpen ? <FaXmark className={styles.cross} onClick={() => setOpen(!isOpen)} /> : <FaBars className={styles.burger} onClick={() => setOpen(!isOpen)} />}
    <nav className={ isOpen ? `${styles.active} ${styles.toggleSocial}` : styles.toggleSocial }>
    <ul>
        <li><Vk className={styles.toggleIcon} /></li>
        <li><Tel className={styles.toggleIcon} /></li>
        <li><Dis className={styles.toggleIcon} /></li>
        <li><MdCloudDownload className={styles.toggleIcon} /></li>
      </ul>
    </nav>
    </div>
  )
}

export default Toggle