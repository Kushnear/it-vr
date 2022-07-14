import React from 'react'
import styles from '../Header/Header.module.scss'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
        <div className={styles.wrapper}>
            <div className='container'>
                <div className={styles.headerWrapper}>
                    <div className={styles.logoWrapper}>
                        <a href='http://kvantorium33.ru/index.php/mobile' target='_blank' className={styles.quantLogoLink}>
                            <img src={require('../../images/quant-logo.png')} className={styles.quantLogo}/>
                        </a>
                        <p className={styles.logoText}>Мобильный кванториум 33</p>
                    </div>
                    <nav className={styles.navigation}>
                        <ul className={styles.navigationList}>
                            <li className={styles.navigationItem}>
                                <NavLink 
                                    to={'/'} 
                                    className={({isActive}) => isActive ? `${styles.navigationLink} ${styles.active}` : `${styles.navigationLink}`} > главная
                                </NavLink>
                            </li>
                            <li className={styles.navigationItem}>
                                <NavLink 
                                    to={'/form'}
                                    className={({isActive}) => isActive ? `${styles.navigationLink} ${styles.active}` : `${styles.navigationLink}`} > хочу учиться
                                </NavLink>
                            </li>
                            <li className={styles.navigationItem}>
                                <NavLink 
                                    to={'/contacts'}
                                    className={({isActive}) => isActive ? `${styles.navigationLink} ${styles.active}` : `${styles.navigationLink}`} > контакты
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}
