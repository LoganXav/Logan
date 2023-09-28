'use client';
import styles from './style.module.scss';

export default function Index() {

    return (
        <>
            <main className={styles.main} id="connect">
                <div className={styles.mottoBody}>
                    <div className={styles.mottoContainer}>
                        <h3 className="headerText">Inspiration</h3>
                        <div className={styles.mottoWrapper}>
                            <h1>
                                {[
                                    "Good Design", "Is Honest."
                                ].map((line) => (
                                    <div key={line} className={`${styles.line} line`}>
                                        <div className='text'>{line}</div>
                                    </div>
                                ))}

                            </h1>
                        </div>
                        <h3 className="headerText">Minh Pham</h3>
                    </div>
                </div>
            </main>
            <main className={styles.main}>
                <div className={styles.infoBody}>
                    <div className={styles.infoContainer}>
                        <h3 className="headerText">Connect with me:</h3>
                        <div className={styles.infoWrapper}>
                            <div className={styles.infoGrid}>
                                {[
                                    {
                                        link: "Resume",
                                        url: "https://instagram.com/ssegun__"
                                    },
                                    {
                                        link: "Instagram",
                                        url: "https://instagram.com/ssegun__"
                                    },
                                    {
                                        link: "Twitter",
                                        url: "https://twitter.com/Ssegun_"
                                    },
                                    {
                                        link: "Github",
                                        url: "https://github.com/LoganXav"
                                    },
                                    {
                                        link: "LinkedIn",
                                        url: "https://www.linked.com/in/logan10927"
                                    },
                                    { link: "Mail" },
                                ].map(({ link, url }, index) => (
                                    <div key={url} className={styles.bullet}>
                                        <span className={styles.dot}></span>
                                        <h3 className={styles.infoItem} key={index}>
                                            <a href={url}>

                                                {link}
                                            </a>
                                        </h3>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.infoDetails}>
                                <div>
                                    <p>Email</p>
                                    <span>sogbesansegun22@gmail.com</span>
                                </div>
                                <div>
                                    <p>Phone</p>
                                    <span>+2349068015741</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}