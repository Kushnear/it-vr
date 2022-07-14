import React, { cloneElement } from 'react'
import styles from './Slider.module.scss';
import { useEffect, useState, Children } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const PAGE_WIDTH = 850

export const Slider = ({children}) => {

    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);

    const handleLeftArrow = () => {
        console.log('handleArrowClick')

        setOffset(currentOffset => {
            const newOffset = currentOffset + PAGE_WIDTH

            console.log(newOffset)
            return Math.min(newOffset, 0)
        })
    }
    const handleRightArrow = () => {
        console.log('handleArrowClick')
        const fn = (currentOffset) => {
            console.log(currentOffset)
            const newOffset = currentOffset - PAGE_WIDTH

            const maxOffset = -(PAGE_WIDTH * (pages.length - 1))

            console.log(newOffset, maxOffset)
            // return Math.max(newOffset, -900)
            return Math.max(newOffset, maxOffset)
        }

        setOffset(fn)
    }

    useEffect(() => {
        setPages(
          Children.map(children, (child) => {
            return cloneElement(child, {
              style: {
                minWidth: `${PAGE_WIDTH}px`,
                maxWidth: `${PAGE_WIDTH}px`,
                height: '100%',
              },
            })
          })
        )
      }, [])

  return (
    <section className={styles.photos}>

            <div className={styles.mainContainer}>
                <FaChevronLeft className={styles.arrow} onClick={handleLeftArrow} />
                <div className={styles.window}>
                    <div 
                    className={styles.allPagesContainer}
                    style={{
                        transform: `translateX(${offset}px)`,
                    }}
                    >{pages}</div> 
                </div>
                <FaChevronRight className={styles.arrow} onClick={handleRightArrow} />
            </div>

    </section>
  )
}
