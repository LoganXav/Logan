'use client';
import styles from './style.module.scss';

export default function Index({ }) {

    return (
        <>
        <main className={styles.main}>
            <div className={styles.aboutBody}>
                <div className={styles.aboutContainer}>
                    <h3 className="headerText">About Me</h3>
                    <p>I'm a selectively skilled<span className="alternate"> web developer</span> with a strong focus on producing high quality & impactful digital experiences.</p>
                </div>
            </div>
        </main>
        <main className={styles.main}>
            <div className={styles.servicesBody}>
                <div className={styles.servicesContainer}>
                    <h3 className="headerText">What I Work With</h3>
                    <div className={styles.wrapper}>  
                        <h1 className={styles.services}>
                            <div className={`${styles.line} line`}>
                                <div className='text'>Html</div>
                            </div>
                            <div className={`${styles.line} line`}>
                                <div className='text'>ReactJs</div>
                            </div>
                            <div className={`${styles.line} line`}>
                                <div className='text'>NodeJs</div>
                            </div>
                            <div className={`${styles.line} line`}>
                                <div className='text'>Tailwind</div>
                            </div>
                            <div className={`${styles.line} line`}>
                                <div className='text'>Mongo db</div>
                            </div>
                        </h1>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}