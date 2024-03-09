import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './components/sections/Home/Home';
import About from './components/sections/About/About';
import ForOrg from './components/sections/ForOrg/ForOrg';
import ForUser from './components/sections/ForUsers/ForUser';
import Faq from './components/sections/Faq/Faq';
import Contact from './components/sections/Contact/Contact';
import styles from './app.module.css';
import Download from './components/sections/Download/Download';
import SkeletonLoadingScreen from './components/features/SkeletonLoadingScreen/SkeletonLoadingScreen';

const App = () => {
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSkeleton(false);
    }, 3000);
  }, []);

  return (
    <>
      {/*<AnimatePresence exitBeforeEnter={false} mode='wait'>
        {showSkeleton && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ y: '-100vh' }}
            transition={{ duration: 0.5 }}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999 }}
          >
            <SkeletonLoadingScreen />
          </motion.div>
        )}
      </AnimatePresence>*/}
      <SkeletonLoadingScreen />
      <div className={styles.bg} style={{ opacity: showSkeleton ? 0 : 1 }}>
        <Home />
        <About />
        <ForOrg />
        <ForUser />
        <Download />
        <Contact />
        <Faq />
      </div>
    </>
  );
};

export default App;
