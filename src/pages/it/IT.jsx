import React from 'react'
import styles from './IT.module.scss'
import Img from '../../images/it-quantum.jpeg'

const description = [{
  text: 'получают опыт программирования приложений под разные операционные системы;',
  id: 1
},
{
  text: 'осваивают алгоритмы программирования и структуры данных;',
  id: 2
},
{
  text: 'развивают аналитическое мышление и навыки командной работы.',
  id: 3
}
]

export const IT = () => {
  return (
    <div className='container'>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>IT квантум</h1>
        <div className={styles.imageWrapper}>
          <img className={styles.vrImg} src={Img}></img>
        </div>

        <p className={styles.descriptionTitle}>На занятиях обучающиеся:</p>
        <ul className={styles.descriptionList}>
          
          {description.map((item) => {
            return (
              <li className={styles.sescriptionListItem} key = {item.id}>
                <div className={styles.descriptionItem}>
                  <div className={styles.checkMark}></div>
                  <p className={styles.descriptionText}>{item.text}</p>
                </div>
              </li>
            )
          })}
        </ul>
        
      </div>
    </div>
  )
}
