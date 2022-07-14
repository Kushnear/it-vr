import React from 'react'
import styles from './VR.module.scss'
import Img from '../../images/vrBanner.jpeg'

const description = [{
  text: 'познакомится с основными трендами в виртуальной и дополненной реальности;',
  id: 1
},
{
  text: 'научатся работать с камерами 360 градусов, снимать и монтировать видео с полным погружением в виртуальность;',
  id: 2
},
{
  text: 'освоят 3D-моделирование в программе Blender, чтобы создавать свои собственные объекты дополненной реальности;',
  id: 3
},
{
  text: 'освоят платформу разработки приложений Unity;',
  id: 4
},
{
  text: 'создадут свои собственные приложения в рамках проектной деятельности.',
  id: 5
},
]


export const VR = () => {
  return (
    <div className='container'>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>VR/AR квантум</h1>
        <div className={styles.imageWrapper}>
          <img className={styles.vrImg} src={Img}></img>
        </div>

        <p className={styles.descriptionTitle}>Обучающиеся VR/AR-квантума смогут:</p>
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
