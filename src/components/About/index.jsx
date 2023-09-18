'use client';
import styles from './style.module.scss';

export default function Index({ }) {

    return (
        <>
        <main className={styles.main}>
            <div className={styles.aboutBody}>
                <div className={styles.aboutContainer}>
                    <h3 className="headerText">About Me</h3>
                    <p>I'm a <span className="alternate">selectively skilled</span> product designer with strong focus on producing high quality & impactful digital experience.</p>
                </div>
            </div>
        </main>
        <main className={styles.main}>
            <div className={styles.servicesBody}>
                <div className={styles.servicesContainer}>
                    <h3 className="headerText">What I Do</h3>
                    <div className={styles.wrapper}>  
                        <h1 className={styles.services}>
                            <div className={`${styles.line} line`}>
                                <div className='text'>3D</div>
                            </div>
                            <div className={`${styles.line} line`}>
                                <div className='text'>VISUAL</div>
                            </div>
                            <div className={`${styles.line} line`}>
                                <div className='text'>MOTION</div>
                            </div>
                            <div className={`${styles.line} line`}>
                                <div className='text'>PRODUCT</div>
                            </div>
                            <div className={`${styles.line} line`}>
                                <div className='text'>TUTORIAL</div>
                            </div>
                        </h1>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}