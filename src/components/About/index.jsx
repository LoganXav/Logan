'use client';
import styles from './style.module.scss';
import { scrollToSection } from "../Landing"

export default function Index({ }) {

    return (
        <>
            <main className={styles.main} id="about">
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
                                {[
                                    "Html & Css", "Typescript", "React", "Express", "Git", "MongoDb"
                                ].map((skill) => (
                                    <div key={skill} className={`${styles.line} line`}>
                                        <div className='text'>{skill}</div>
                                    </div>
                                ))}
                            </h1>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}