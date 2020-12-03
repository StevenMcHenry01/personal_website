// 3rd party imports
import React from 'react'
import { WorkCard } from '../../components/work_card/workCard'

// My imports
import { projects } from '../../data/projects'
import styles from '../../components/work_card/WorkCard.module.scss'

export const WorkList = () => {
  return (
    <div style={{ margin: '1rem auto' }}>
      <h1>Work</h1>
      <div className={styles.work_list}>
        {projects.map((project, index) => {
          return <WorkCard project={project} key={index} />
        })}
      </div>
    </div>
  )
}
