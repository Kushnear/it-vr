import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Banner.module.scss'

export const Banner = () => {
  return (
    <section>
      <div className='container'>
        <p className={styles.chooseText}>Выберите направление</p>
        <div className={styles.cardWrapper}>
            <Link to={'/vr'}>
              <div className={styles.vrCard}>
                  <div className={styles.imgWrapper}>
                      <img src={require('../../images/vr-logo.png')}></img>
                  </div>
                  <p className={styles.cardTitle}> VR/AR </p>
              </div>
            </Link>

            <Link to={'/it'}>
              <div className={styles.vrCard}>
                  <div className={styles.imgWrapper}>
                      <img src={require('../../images/it-logo.png')}></img>
                  </div>
                  <p className={styles.cardTitle}> IT </p>
              </div>
            </Link>
        </div>
      </div>
    </section>
  )
}
