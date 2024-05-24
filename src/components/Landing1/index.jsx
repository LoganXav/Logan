"use client"
import styles from "./style.module.scss"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import gsap from "gsap"
import useMousePosition from "../../utils/useMousePosition"
import InstagramIcon from "@mui/icons-material/Instagram"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from "@mui/icons-material/Twitter"

export default function Index({ setIsHovered }) {
  // const [isHovered, setIsHovered] = useState(false);
  // const [isActive, setIsActive] = useState("about");

  // const { x, y } = useMousePosition();

  // const size = isHovered ? 300 : 30;

  // useEffect(() => {
  //     const t1 = gsap.timeline()

  //     t1.from('.line .text', {
  //         y: 500,
  //         ease: "power4.out",
  //         delay: 1,
  //         duration: 1.8,
  //         stagger: {
  //             amount: 0.4,
  //         }
  //     })
  // }, [])

  return (
    <>
      <div className={styles.container}>
        <div className={styles.mobileShadeContainer}>
          <div className={styles.mobileShadeTop}></div>
          <div className={styles.mobileShadeBottom}></div>
        </div>
        <div className={styles.navbar}>
          <Image
            className={styles.logo}
            src="/logo.gif"
            alt="navbarLogo"
            width={60}
            height={60}
          />
          <div className={styles.links}>
            {[
              {
                name: "about",
                hash: "#about"
              },
              {
                name: "work",
                hash: "#work"
              },
              {
                name: "contact",
                hash: "#contact"
              }
            ].map(({ name, hash }) => (
              <Link key={name} href={hash}>
                {name}
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.banner}>
          <h3 className="headerText">SEGUN SOGBESAN</h3>
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={styles.wrapper}
          >
            <h1>
              {[
                {
                  line: "Hiding",
                  style: ""
                },
                {
                  line: "Bad",
                  style: ""
                },
                {
                  line: "Code",
                  style: ""
                },
                {
                  line: "Since",
                  style: ""
                },
                {
                  line: "2021",
                  style: ""
                }
              ].map(({ line, style }) => (
                <div className={`${styles.line} line`} key={line}>
                  <div className={`${style} text`}>{line}</div>
                </div>
              ))}
            </h1>
          </div>
          <div className={styles.options}>
            <div className={styles.icons}>
              {[
                {
                  href: "https://instagram.com/ssegun__",
                  component: <InstagramIcon style={{ fontSize: "2rem" }} />
                },
                {
                  href: "https://github.com/LoganXav",
                  component: <GitHubIcon style={{ fontSize: "2rem" }} />
                },
                {
                  href: "https://ng.linkedin.com/in/logan10927",
                  component: <LinkedInIcon style={{ fontSize: "2rem" }} />
                },
                {
                  href: "https://twitter.com/Ssegun_",
                  component: <TwitterIcon style={{ fontSize: "2rem" }} />
                }
              ].map(({ href, component }, idx) => (
                <span key={idx}>
                  <a href={href} rel="noopener noreferrer" target="_blank">
                    {component}
                  </a>
                </span>
              ))}
            </div>
            <div className={styles.resume}>
              <a href="/resume.pdf" download>
                DOWNLOAD RESUME
              </a>
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
    </>
  )
}
