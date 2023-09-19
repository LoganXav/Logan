'use client';
import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader';
import Landing from '../components/Landing';
import About from '../components/About';
import Work from '../components/Work';
import Connect from '../components/Connect';



export default function Home() {
  

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();

        !isLoading && window.scrollTo(0, 0);

        // setTimeout( () => {
        //   setIsLoading(false);
        //   document.body.style.cursor = 'default'
        //   window.scrollTo(0,0);
        // }, 3000)
      }
    )()
  }, [])


  return (
    <main className={styles.main}>
        <AnimatePresence mode='wait'>
          {isLoading && <Preloader setIsLoading={setIsLoading} />}
        </AnimatePresence>
        {!isLoading && (
          <>
          <Landing />
          <About />
          <Work />
          <Connect />
          </>
        )
        }
    </main>
  )
}