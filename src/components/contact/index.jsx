'use client';
import styles from './style.module.scss';

export default function Index({ }) {

    return (
        <>
            <main className={styles.main}>
                <div className={styles.mottoBody}>
                    <div className={styles.mottoContainer}>
                        <h3 className="headerText">My Motto</h3>
                        <div className={styles.wrapper}>
                            <h1>
                                <div className={`${styles.line} line`}>
                                    <div className='text'>Good Design</div>
                                </div>
                                <div className={`${styles.line} line`}>
                                    <div className='text'>is Honest</div>
                                </div>
                            </h1>
                        </div>
                        <h3 className={`${styles.name} headerText`}>Sogbesan Segun</h3>
                    </div>
                </div>
            </main>
        </>
    )
}