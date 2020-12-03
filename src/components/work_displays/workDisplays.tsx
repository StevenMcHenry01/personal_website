// 3rd party imports
import React from 'react'
import Image from 'next/image'
import { useSpring, animated } from 'react-spring'

// My imports
import styles from './WorkDisplays.module.scss'

interface WorkDisplaysProps {
  photoPaths: string[]
}

export const WorkDisplays = ({ photoPaths }: WorkDisplaysProps) => {
  const style1 = useSpring({
    from: { opacity: 0, transform: 'translateY(-100px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: {
      duration: 500,
    },
  })
  const style2 = useSpring({
    from: { opacity: 0, transform: 'translateY(-100px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: {
      duration: 500,
    },
    delay: 500,
  })
  const style3 = useSpring({
    from: { opacity: 0, transform: 'translateY(-100px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: {
      duration: 500,
    },
    delay: 1000,
  })
  return (
    <div className={styles.container}>
      <animated.div
        className={`${styles.image} ${styles.image1}`}
        style={style1}
      >
        <Image src={photoPaths[0]} width={640} height={430} alt="work image" />
      </animated.div>
      <animated.div
        className={`${styles.image} ${styles.image2}`}
        style={style2}
      >
        <Image src={photoPaths[1]} width={640} height={430} alt="work image" />
      </animated.div>
      <animated.div
        className={`${styles.image} ${styles.image3}`}
        style={style3}
      >
        <Image src={photoPaths[2]} width={640} height={430} alt="work image" />
      </animated.div>
    </div>
  )
}
