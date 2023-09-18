'use client';
import styles from './style.module.scss';

export default function Index({ }) {

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
                                <div className={styles.infoItem}>Dribble</div>
                                <div className={styles.infoItem}>Instagram</div>

                                <div className={styles.infoItem}>Twitter</div>
                                <div className={styles.infoItem}>Github</div>

                                <div className={styles.infoItem}>LinkedIn</div>
                                <div className={styles.infoItem}>Mail</div>
                            </div>
                            <div className={styles.infoDetails}>
                                <div>
                                    <p>Email</p>
                                    <span>sogbesansegun22@gmail.com</span>
                                </div>
                                <div>
                                    <p>Phone</p>
                                    <span>+234 9068015741</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}