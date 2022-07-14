import React from 'react'
import styles from './Contacts.module.scss'

export const Contacts = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>

          <div className={styles.imageWrapper}>
            <img src='/images/quantBuilding.jpeg'></img>
          </div>

          <div className={styles.contactsCard}>
            <div className={styles.contact}>
              <div className={styles.iconAdress} />
              <p className={styles.text}>ул. Каманина, д. 30/18, Владимир, Владимирская обл., 600009</p>
            </div>

            <div className={styles.contact}>
              <div className={styles.iconPhone} />
              <p className={styles.text}>8 (492) 252-08-67</p>
            </div>

            <div className={styles.contact}>
              <div className={styles.iconEmail} />
              <p className={styles.text}>info@kvantorium33.ru</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
