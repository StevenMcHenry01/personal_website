// 3rd party imports
import React, { useState } from 'react'
import {
  FaRegSmile,
  FaRegSmileBeam,
  FaRegFrown,
  FaRegSadCry,
} from 'react-icons/fa'
import { GrFormClose } from 'react-icons/gr'
import { useSpring, animated } from 'react-spring'

// My imports
import styles from './HowIsYourDay.module.scss'

export const HowIsYourDay = () => {
  const [message, setMessage] = useState('')
  const [hideBox, setHideBox] = useState(false)

  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 500,
    },
    delay: 500,
  })

  const handleHappyClick = () => {
    setMessage('I am so glad to hear it! 🎉')
  }

  const handleSadClick = () => {
    setMessage(`Oh no. I'm sorry to hear that. 🥺`)
  }

  return (
    <div className={`${styles.container} ${hideBox && styles.hide}`}>
      <animated.div className={styles.box} style={style}>
        <button className={styles.x} onClick={() => setHideBox(true)}>
          <GrFormClose className={styles.x_style} size={'1.2rem'} />
        </button>
        <p>How is your day going?</p>
        <div className={styles.icon_container}>
          <div onClick={handleSadClick} className={styles.icon_box}>
            <FaRegSadCry size={'1.2rem'} className={styles.icon} />
          </div>
          <div className={styles.icon_box} onClick={handleSadClick}>
            <FaRegFrown size={'1.2rem'} className={styles.icon} />
          </div>
          <div className={styles.icon_box} onClick={handleHappyClick}>
            <FaRegSmile size={'1.2rem'} className={styles.icon} />
          </div>
          <div className={styles.icon_box} onClick={handleHappyClick}>
            <FaRegSmileBeam size={'1.2rem'} className={styles.icon} />
          </div>
        </div>
        {message && <p>{message}</p>}
      </animated.div>
    </div>
  )
}
