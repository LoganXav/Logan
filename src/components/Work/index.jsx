'use client';
import Image from 'next/image';
import styles from './style.module.scss';
import { useRef } from 'react';

export default function Index({ }) {

    const divRef = useRef(null);

    return (
        <>
            <main className={styles.main} id="work" ref={divRef}>
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
                                {[
                                    {
                                        time: "NOW",
                                        role: "Frontend Engineer Intern",
                                        company: "Simplify Technologies"
                                    },
                                    {
                                        time: "2021",
                                        role: "Information Systems Engineer Intern",
                                        company: "Bank of Industry"
                                    },
                                    {
                                        time: "2020",
                                        role: "Software Engineer Intern",
                                        company: "Consol Limited"
                                    },
                                ].map(({ time, role, company }) => (
                                <div className={`${styles.line} line`}>
                                    <div className='text'>{time}</div>
                                    <div className='text'>
                                        <p>{role}</p>
                                        <p className={styles.role}>{company}</p>
                                    </div>
                                </div>
                                ))}
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
                            {[
                                    {
                                        name: "Steex",
                                        stack: "React, MUI, Express",
                                        href1: "#",
                                        href2: "https://steex.vercel.app/"
                                    },
                                    {
                                        name: "Nexus",
                                        stack: "React, Strapi, Stripe",
                                        href1: "#",
                                        href2: "https://nexus-emart.vercel.app/"
                                    },
                                    {
                                        name: "Cassie",
                                        stack: "  React, Scss, Framer motion",
                                        href1: "#",
                                        href2: "https://cassie.vercel.app/"
                                    },
                                    {
                                        name: "Wild Book",
                                        stack: "React, Express, Stripe",
                                        href1: "#",
                                        href2: "https://wild-book.vercel.app/"
                                    },
                                    {
                                        name: "Logan",
                                        stack: "React, MUI, Express",
                                        href1: "#",
                                        href2: "#"
                                    },
                                ].map(({ name, stack, href1, href2 }) => (
                                <div className={`${styles.line} line`}>
                                    <div className={styles.text}>
                                        <div>{name}</div>
                                        <div className={styles.details}>
                                            <span className={styles.stack}>
                                                {stack}
                                            </span>
                                            <span className={styles.redirects}>
                                                <a href={href1}>{href1 ? "Github" : ""}</a>
                                                <a href={href2}>Website</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                ))}
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