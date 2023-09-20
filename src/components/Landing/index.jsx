'use client';
import styles from './style.module.scss';
import Image from 'next/image';
import { useState, useEffect } from 'react'
import gsap from 'gsap'
import { motion } from 'framer-motion';
import useMousePosition from '../../utils/useMousePosition';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Index({ }) {

    const [isHovered, setIsHovered] = useState(false);
    const { x, y } = useMousePosition();

    const size = isHovered ? 300 : 30;

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
            <div className={styles.container}>
                <div className={styles.mobileShadeContainer}>
                    <div className={styles.mobileShade}></div>
                    <div className={styles.mobileShade}></div>
                </div>
                <div className={styles.navbar}>
                    <Image className={styles.logo} src='/logo.gif' alt='navbarLogo' width={60} height={60} />
                    <div className={styles.links}>
                        <span>ABOUT</span>
                        <span>WORK</span>
                        <span>CONTACT</span>
                    </div>
                </div>
                <div className={styles.banner}>
                    <h3 className="headerText">SEGUN SOGBESAN</h3>
                    <div className={styles.wrapper}>
                        <h1>
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
                                <div className='text'>2019</div>
                            </div>
                        </h1>
                    </div>
                    <div className={styles.options}>
                        <div className={styles.icons}>
                            <span><InstagramIcon style={{ fontSize: "2rem" }} /></span>
                            <span><GitHubIcon style={{ fontSize: "2rem" }} /></span>
                            <span><LinkedInIcon style={{ fontSize: "2rem" }} /></span>
                            <span><TwitterIcon style={{ fontSize: "2rem" }} /></span>
                        </div>
                        <div className={styles.sound}>
                            SOUND ON
                        </div>
                    </div>
                </div>
            </div>
            {/* <motion.div className={`${styles.container} mask`}
             animate={{
                                 // WebkitMaskPosition: `${x}px ${y}px`,
                                 WebkitMaskPosition: `${x - (size / 2)}px ${y - (size / 2)}px`,
                                 WebkitMaskSize: `${size}px`,
                             }}
                             transition={{ type: "tween", ease: "backOut", duration: 0.5 }}>
                <div className={styles.navbar}>
                    <Image className="" src='/logo.gif' width={60} height={60} />
                    <div className={styles.links}>
                        <span>ABOUT</span>
                        <span>WORK</span>
                        <span>CONTACT</span>
                    </div>
                </div>
                <div className={styles.banner}>
                    <h3 className="headerText">SEGUNs SOGBESAN</h3>
                    <div className={styles.wrapper}>  
                        <h1 className={styles.heroText}>
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
            </motion.div> */}

            <video autoPlay loop muted className={styles.backgroundVideo}>
                <source src="https://minhpham.design/assets/video/hero.mp4" type='video/mp4' />
            </video>
        </>
    )
}

