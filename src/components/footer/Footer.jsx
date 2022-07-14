import React from 'react'
import styles from './Footer.module.scss'



export const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className="container">
            <div className={styles.footerWrapper}>
                <p className={styles.text}>Преподаватель направления: <span className={styles.textAccent}>Дмитрий Сергеевич Кушнир</span></p>
                <div className={styles.contacts}>
                    <div className={styles.socials}>
                        <a href='mailto: dhrkush@gmail.com' target='_blank'>
                            <div className={styles.emailIcon} />
                        </a>
                        <a href='https://t.me/+0IKThz8IURM3NDFi' target='_blank'>
                        <div className={styles.telegramIcon} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
