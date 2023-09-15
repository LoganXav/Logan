'use client';
import styles from './style.module.scss';
import Image from 'next/image';
import { useState, useEffect } from 'react'
import gsap from 'gsap'
import { motion } from 'framer-motion';
import useMousePosition from '../../utils/useMousePosition';

export default function Index({ }) {

    const [isHovered, setIsHovered] = useState(false);
    const { x, y } = useMousePosition();

    const size = isHovered ? 400 : 40;
    console.log(x, y, isHovered)

    useEffect(() => {
        const t1 = gsap.timeline()

        t1.from('.line .text', {
            y: 500,
            ease: "power4.out",
            delay: 1,
            duration: 1.8,
            stagger: {
                amount: 0.4,
            }
        })
    }, [])



    return (
        <>
            <motion.div className={`${styles.container}`}
            
            >
                <div className={styles.navbar}>
                    <Image className="" src='/logo.gif' width={60} height={60} />
                    <div className={styles.links}>
                        <span>ABOUT</span>
                        <span>WORK</span>
                        <span>CONTACT</span>
                    </div>
                </div>
                <div className={styles.banner}>
                    <h3 className="headerText">Logan Xavier</h3>
                    <div className={styles.wrapper}
                    >
                        <motion.div
                            className={`${styles.maskedHeroTextContainer} mask`}
                            animate={{
                                // WebkitMaskPosition: `${x}px ${y}px`,
                                WebkitMaskPosition: `${x - (size / 2)}px ${y - (size / 2)}px`,
                                WebkitMaskSize: `${size}px`,
                            }}
                            transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
                            >
                            <h1 className={styles.maskedHeroText} 
                            onMouseEnter={() => { setIsHovered(true) }} onMouseLeave={() => { setIsHovered(false) }}
                            >
                                <div className={`${styles.line} line`}>
                                    <div className='text'>Hiding</div>
                                </div>
                                <div className={`${styles.line} line`}>
                                    <div className='text'>Bad</div>
                                </div>
                                <div className={`${styles.line} line`}>
                                    <div className='text'>Shit</div>
                                </div>
                                <div className={`${styles.line} line`}>
                                    <div className='text'>Since</div>
                                </div>
                                <div className={`${styles.line} line`}>
                                    <div className='text'>2009</div>
                                </div>
                            </h1>
                        </motion.div>
                        <h1 className={styles.heroText}
                        >
                            <div className={`${styles.line} line`}>
                                <div className='text'>Making</div>
                            </div>
                            <div className={`${styles.line} line`}>
                                <div className='alternate text'>Good</div>
                            </div>
                            <div className={`${styles.line} line`}>
                                <div className='alternate text'>Shit</div>
                            </div>
                            <div className={`${styles.line} line`}>
                                <div className='text'>Since</div>
                            </div>
                            <div className={`${styles.line} line`}>
                                <div className='text'>2009</div>
                            </div>
                        </h1>
                    </div>
                </div>



                <div className={styles.options}>
                    <div className={styles.icons}>
                        <span>IG</span>
                        <span>YT</span>
                        <span>LN</span>
                        <span>GH</span>
                    </div>
                    <div className={styles.sound}>
                        SOUND ON
                    </div>
                </div>
            </motion.div>

            <video autoPlay loop muted className={styles.backgroundVideo}>
                <source src="https://minhpham.design/assets/video/hero.mp4" type='video/mp4' />
            </video>
        </>
    )
}