'use client';
import Image from 'next/image';
import styles from './style.module.scss';

export default function Index({ }) {

    return (
        <>
            <main className={styles.main}>
                <div className={styles.experienceBody}>
                    <div className={styles.experienceContainer}>
                        <h3 className="headerText">Experience</h3>
                        <p>With <span className="alternate">years of collaborative experience</span> in cross-functional teams, delivering digital products built to the highest industry standards.</p>
                        <h3 className={`${styles.history} headerText`}>History</h3>
                    </div>

                </div>
            </main>
            <main className={styles.main}>
                <div className={styles.historyBody}>
                    <div className={styles.historyContainer}>
                        <div className={styles.wrapper}>
                            <h1 className={styles.services}>
                                <div className={`${styles.line} line`}>
                                    <div className='text'>NOW</div>
                                    <div className='text'>
                                        <p>Frontend Engineer</p>
                                        <p className={styles.role}>Simplify Technologies</p>
                                    </div>
                                </div>
                                <div className={`${styles.line} line`}>
                                    <div className='text'>2021</div>
                                    <div className='text'>
                                        <p>Information Systems Engineer</p>
                                        <p className={styles.role}>Bank of Industry</p>
                                    </div>
                                </div>
                                <div className={`${styles.line} line`}>
                                    <div className='text'>2020</div>
                                    <div className='text'>
                                        <p>Software Engineer</p>
                                        <p className={styles.role}>Consol Limited</p>
                                    </div>
                                </div>
                                <div className={`${styles.line} line`}>
                                    <div className='text'>2019</div>
                                    <div className='text'>
                                        <p>Baby Engineer</p>
                                        <p className={styles.role}>Home</p>
                                    </div>
                                </div>
                            </h1>
                        </div>
                    </div>
                </div>
            </main>
            <main className={styles.main}>
                <div className={styles.projectsBody}>
                    <div className={styles.projectsContainer}>
                        <h3 className="headerText">Projects</h3>
                        <p>Explore my portfolio of<span className="alternate"> past projects</span> where I've brought ideas to life and delivered exceptional digital solutions that make a difference.</p>
                    </div>
                </div>
            </main>
            <main className={styles.main}>
                <div className={styles.projectsBody}>
                    <div className={styles.projectsTitleContainer}>
                        <div className={styles.wrapper}>
                            <div className={styles.imgContainer}>
                                <Image className={styles.img} src='/planet.png' alt='planetImage' width={900} height={900} />
                            </div>
                            <h1 className={styles.services}>
                                <div className={`${styles.line} line`}>
                                    <div className='text'>Steex</div>
                                </div>
                                <div className={`${styles.line} line`}>
                                    <div className='text'>Nexus</div>
                                </div>
                                <div className={`${styles.line} line`}>
                                    <div className='text'>Wild Book</div>
                                </div>
                                <div className={`${styles.line} line`}>
                                    <div className='text'>Cassie</div>
                                </div>
                                <div className={`${styles.line} line`}>
                                    <div className='text'>Logan</div>
                                </div>
                            </h1>
                            <div className={styles.balls}>
                                <span className={styles.ball}></span>
                                <span className={styles.ball}></span>
                                <span className={styles.ball}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}