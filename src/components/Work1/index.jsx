"use client"
import Image from "next/image"
import styles from "./style.module.scss"
import { useRef } from "react"

export default function Index({ setIsHovered }) {
  return (
    <>
      <main className={styles.main} id="work">
        <div className={styles.experienceBody}>
          <div className={styles.experienceContainer}>
            <h3 className="headerText">Experience</h3>
            <p
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              3+ years of experience building fintech apps and centering divs on
              teams with smart people that actually know what they're doing.
            </p>
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
                    role: "Frontend Engineer",
                    company: "Simplify Technologies"
                  },
                  {
                    time: "2021",
                    role: "Information Systems Engineer",
                    company: "Bank of Industry"
                  },
                  {
                    time: "2020",
                    role: "Software Solutions Engineer",
                    company: "Consol Limited"
                  }
                ].map(({ time, role, company }) => (
                  <div key={company} className={`${styles.line} line`}>
                    <div className="text">{time}</div>
                    <div className="text">
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
            <p
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Some web applications I practice new concepts and ideas I learn
              from the internet that never really materialize into the startup
              wonders I envisioned.
            </p>
          </div>
        </div>
      </main>
      <main className={styles.main}>
        <div className={styles.projectsBody}>
          <div className={styles.projectsTitleContainer}>
            <div className={styles.wrapper}>
              <h1 className={styles.services}>
                {[
                  {
                    name: "Steex",
                    stack: "ReactJs, MUI, ExpressJs",
                    href1: "https://github.com/LoganXav/Steex",
                    href2: "https://steex.vercel.app/"
                  },
                  {
                    name: "Golfnco",
                    stack: "NextJs, Supabase, Paystack, Flutterwave",
                    href1: "https://github.com/LoganXav/Golfnco",
                    href2: "https://golfnco.vercel.app/"
                  },
                  {
                    name: "ReactCli",
                    stack: "NodeJs, CommanderJs, Clack",
                    href1: "https://github.com/LoganXav/SimplifyReactCli",
                    href2: ""
                  },
                  {
                    name: "KeniaAPI",
                    stack: "NodeJS, Typescript, ExpressJs",
                    href1: "https://github.com/LoganXav/KeniaAPI",
                    href2: ""
                  },
                  {
                    name: "My Portfolio",
                    stack: "Next, Scss, Gsap",
                    href1: "",
                    href2: ""
                  }
                ].map(({ name, stack, href1, href2 }) => (
                  <div key={name} className={`${styles.line} line`}>
                    <div className={styles.text}>
                      <div>{name}</div>
                      <div className={styles.details}>
                        <span className={styles.stack}>{stack}</span>
                        <span className={styles.redirects}>
                          <a
                            href={href1}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            {href1 ? "Github" : ""}
                          </a>
                          <a
                            href={href2}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            {href2 ? "Website" : ""}
                          </a>
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
