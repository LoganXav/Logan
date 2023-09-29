'use client';
import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader';
import Landing from '../components/Landing';
import Landing1 from '../components/Landing1';
import About from '../components/About';
import About1 from '../components/About1';
import Work from '../components/Work';
import Work1 from '../components/Work1';
import Connect from '../components/Connect';
import Connect1 from '../components/Connect1';
import { Raleway } from '@next/font/google'
import useMousePosition from '../utils/useMousePosition';
import { motion } from 'framer-motion'

const raleway = Raleway({
  subsets: ['latin'],
})



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

  const [isHovered, setIsHovered] = useState(false);

  const { x, y } = useMousePosition();

  const size = isHovered ? 400 : 30;


  return (
    <main className={`${styles.main} ${raleway.className}`}>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader setIsLoading={setIsLoading} />}
      </AnimatePresence>
      {!isLoading && (
        <>
          <div className={styles.container}>
            <div>
              <Landing />
              <About setIsHovered={setIsHovered}/>
              <Work />
              <Connect />
            </div>
            <motion.div
              className='mask'
              animate={{
                // WebkitMaskPosition: `${x}px ${y}px`,
                WebkitMaskPosition: `${x - (size / 2)}px ${y - (size / 2)}px`,
                WebkitMaskSize: `${size}px`,
              }}
              transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
            >
              <Landing1 setIsHovered={setIsHovered}/>
              <About1 setIsHovered={setIsHovered}/>
              <Work1 setIsHovered={setIsHovered}/>
              <Connect1 setIsHovered={setIsHovered}/>
            </motion.div>
          </div>
        </>
      )
      }
    </main>
  )
}






































// <main className={`${styles.main} ${raleway.className}`}>
//       <AnimatePresence mode='wait'>
//         {isLoading && <Preloader setIsLoading={setIsLoading} />}
//       </AnimatePresence>
//       {!isLoading && (
//         <>
//           <div>
//             <div className={styles.landing}>
//               <Landing />
//               <motion.div
//                 className={`${styles.container} mask`}
//                 animate={{
//                   // WebkitMaskPosition: `${x}px ${y}px`,
//                   WebkitMaskPosition: `${x - (size / 2)}px ${y - (size / 2)}px`,
//                   WebkitMaskSize: `${size}px`,
//                 }}
//                 transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
//               >
//                 <Landing1 />
//               </motion.div>
//             </div>
//             <About />
//             <Work />
//             <Connect />
//           </div>
//         </>
//       )
//       }
//     </main>