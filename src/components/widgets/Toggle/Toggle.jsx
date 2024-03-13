import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdCloudDownload } from 'react-icons/md';
import { ReactComponent as Vk } from '../../../assets/svg/vk.svg';
import { ReactComponent as Tel } from '../../../assets/svg/tel.svg';
import { ReactComponent as Dis } from '../../../assets/svg/dis.svg';
import styles from './toggle.module.css';

const Toggle = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleRef = useRef();

  const toggleHandler = () => {
    setOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (toggleRef.current && !toggleRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // Cleanup useEffect on unmount

  return (
    <div ref={toggleRef} className={styles.toggle}>
      {isOpen ? (
        <FaTimes className={styles.cross} onClick={toggleHandler} />
      ) : (
        <FaBars className={styles.burger} onClick={toggleHandler} />
      )}
      <nav className={isOpen ? `${styles.toggleSocial} ${styles.active}` : styles.toggleSocial}>
        <ul>
          <li><a href="https://vk.com"><Vk className={styles.toggleIcon} /></a></li>
          <li><a href="https://web.telegram.org/k/"><Tel /></a></li>
          <li><a href="https://discord.com/"><Dis /></a></li>
          <li><a href="#download"><MdCloudDownload className={styles.toggleIcon} /></a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Toggle;
