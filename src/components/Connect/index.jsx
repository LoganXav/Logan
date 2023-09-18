'use client';
import styles from './style.module.scss';

export default function Index() {

    return (
        <>
            <main className={styles.main}>
                <div className={styles.mottoBody}>
                    <div className={styles.mottoContainer}>
                        <h3 className="headerText">My Motto</h3>
                        <div className={styles.mottoWrapper}>
                            <h1>
                                <div className={`${styles.line} line`}>
                                    <div className='text'>Good Design</div>
                                </div>
                                <div className={`${styles.line} line`}>
                                    <div className='text'>is Honest</div>
                                </div>
                            </h1>
                        </div>
                        <h3 className="headerText">Sogbesan Segun</h3>
                    </div>
                </div>
            </main>
            <main className={styles.main}>
                <div className={styles.infoBody}>
                    <div className={styles.infoContainer}>
                        <h3 className="headerText">Connect</h3>
                        <div className={styles.infoWrapper}>
                            <div className={styles.infoGrid}>
                                {[
                                    { link: "Resume" },
                                    { link: "Instagram" },
                                    { link: "Twitter" },
                                    { link: "Github" },
                                    { link: "LinkedIn" },
                                    { link: "Mail" },
                                ].map(({ link }, index) => (
                                    <h3 className={styles.infoItem} key={index}>
                                        {link}
                                    </h3>
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