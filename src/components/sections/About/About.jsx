import React from 'react';
import styles from './about.module.css';
import MockupMap from '../../../assets/mockups/mockup.png';
import MockupMapLayer from '../../../assets/mockups/mockuplayer.png';
import MarkerSvg from '../../../assets/svg/marker.svg';
import Blob1 from '../../../assets/img/blob1.png';
import Blob2 from '../../../assets/img/blob2.png';
import Blob3 from '../../../assets/img/blob3.png';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const customMarkerIcon = new L.Icon({
    iconUrl: MarkerSvg,
    iconSize: [47, 54], // размер иконки
  });
  
  const CustomMarker = ({ position }) => (
    <Marker position={position} icon={customMarkerIcon}>
      <Popup>
      Новое мероприятие! &#129705;
      </Popup>
    </Marker>
  );

  return (
    <motion.div
      className={styles.section}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
    >
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Что внутри?
      </motion.h1>


      <motion.div
     className={styles.mockupMap}
     style={{
       backgroundImage: `url(${MockupMap})`,
       position: 'relative',
       transform: 'scale(0.9)',
     }}
     initial={{ y: "100vh" }}
     animate={inView ? { y: 0 } : { y: "100vh" }}
     transition={{ duration: 1 }}
   >
<MapContainer
  center={[59.9343, 30.3351]}
  zoom={13}
  style={{ height: '770px', width: '390px', marginTop: '21px', borderTopLeftRadius: '54px', borderTopRightRadius: '54px', position: 'relative', zIndex: 0 }}
  zoomControl={false}
>
  <TileLayer
    attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=0KBMnt76aP50bicBYlYcSS6XFk3jgHCPkNGFR1er7976nLql0toXesIwopN7NPLF"
  />

  {[...Array(20).keys()].map((index) => (
    <CustomMarker key={index} position={[59.9343 + (Math.random() - 0.5) * 0.1, 30.3351 + (Math.random() - 0.5) * 0.1]} />
  ))}
</MapContainer>

     {/* Mockup Map Layer */}
     <img src={MockupMapLayer} alt="Mockup Layer" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} />
   </motion.div>

      <div className={styles.blob1}>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          Афиша – подборки крупных событий и выступлений локальных артистов!
        </motion.h3>
        <motion.img
          className={styles.blob1img}
          src={Blob1}
          alt="blob"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>

      <motion.div
        className={styles.blob2}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <motion.h3
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Эксклюзивные анонсы зарубежных исполнителей
        </motion.h3>
        <motion.img
          className={styles.blob2img}
          src={Blob2}
          alt="blob"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        />
      </motion.div>

      <motion.div
        className={styles.blob3}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
      >
        <motion.h3
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.9 }}
        >
          Поиск по городам, жанрам и площадкам
        </motion.h3>
        <motion.img
          className={styles.blob3img}
          src={Blob3}
          alt="blob"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        />
      </motion.div>
    </motion.div>
  );
}

export default About;
