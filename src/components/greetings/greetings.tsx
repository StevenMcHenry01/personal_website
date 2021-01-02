// 3rd party imports
import Link from 'next/link'
import React from 'react'
import { useSpring, animated } from 'react-spring'

// My imports
import styles from './Greetings.module.scss'

export const Greetings = () => {
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  })
  return (
    <div className={styles.greetings_container}>
      <h2 style={{ marginBottom: '0' }}>Hello,</h2>
      <h2 style={{ marginTop: '.3rem' }}>my name is Steven</h2>
      <animated.h1 style={style}>
        I make <span className={styles.pop}>stuff</span>.
      </animated.h1>
      <p>
        I am a recent graduate with a degree in Computer Science! Web-dev is my
        current passion, but I am always trying to push myself out of my comfort
        zone and learn new things.
      </p>
      <Link href="/about">
        <a>
          <button className="main_button">More about me</button>
        </a>
      </Link>
    </div>
  )
}
