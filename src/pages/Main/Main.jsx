import { Slider } from '../../components/slider/Slider'
import React from 'react'
import styles from './Main.module.scss'
import { AboutGeneral } from '../../components/aboutGeneral/AboutGeneral'
import { Banner } from '../../components/banner/Banner'
import { useGetData } from '../../hooks/useGetData.hook'

export const Main = () => {
  
  const data = useGetData()

  const slides = [
    {image: '../../../images/photo1.jpeg', id: 1},
    {image: '../../images/photo2.jpeg', id: 2},
    {image: '../../images/photo3.jpeg', id: 3},
    {image: '../../images/photo4.jpeg', id: 4},
    {image: '../../images/photo5.jpeg', id: 5},
    {image: '../../images/photo6.jpeg', id: 6},
    {image: '../../images/photo7.jpeg', id: 7}
  ]

  return (
    <>
      <AboutGeneral />
      <Banner />
      <Slider >
        {slides.map((item) => {
          return (
            <div className={`${styles.item} ${styles.item1}`} key={item.id}>
              <img src={item.image} alt='фото с занятий' className={styles.sliderImg}></img>
            </div>
          )
        })}
      </Slider>
      <div className={styles.testContainer}>
        {data.map((item) => {
          return (
            <img src={item.image} key={item.id}></img>
          )
        })}
      </div>
      <p className={styles.photoDescription}>Фото с занятий</p>
    </>
  )
}
