// 3rd party imports
import React from 'react'
import Image from 'next/image'
import { useSpring, animated } from 'react-spring'

// My imports
import styles from './WorkCard.module.scss'
import Link from 'next/link'

export interface ProjectI {
  id: number
  title: string
  githubUrl: string
  demoUrl: string
  description: string
  icons: any
  previewPhotoPath: string
  sitePhotoPaths: string[]
}

interface WorkCardProps {
  project: ProjectI
}

export const WorkCard = ({ project }: WorkCardProps) => {
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 400,
    },
  })
  return (
    <animated.div className={styles.work_card} style={style}>
      <div className={`${styles.content} ${styles.left_panel}`}>
        <div className={styles.preview}>
          <Image
            src={project.previewPhotoPath}
            width={300}
            height={181}
            alt="work showcase"
          />
        </div>
      </div>
      <div className={`${styles.content} ${styles.right_panel}`}>
        <h2>{project.title}</h2>
        <div className={styles.icon_list}>
          {project.icons.map((icon: any, index: number) => {
            return (
              <div className={styles.icon} key={index}>
                {icon}
              </div>
            )
          })}
        </div>
      </div>
      <div className={styles.button_wrapper}>
        <Link href={`/project/${project.id}`}>
          <a>
            <button className={`main_button ${styles.button}`}>
              Learn more
            </button>
          </a>
        </Link>
      </div>
    </animated.div>
  )
}
