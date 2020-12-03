// 3rd party imports
import React from 'react'

// My imports
import { WorkDescription } from '../../components/work_description/workDescription'
import { WorkDisplays } from '../../components/work_displays/workDisplays'
import styles from './WorkShowcase.module.scss'
import { projects } from '../../data/projects'
import { ProjectI } from '../../components/work_card/workCard'

interface WorkShowcaseProps {
  id: number
}

export const WorkShowcase = ({ id }: WorkShowcaseProps) => {
  const project: ProjectI[] = projects.filter((proj: any) => {
    return proj.id === parseInt((id as unknown) as string)
  })

  if (project) {
    return (
      <div className={styles.container}>
        <h1 style={{ margin: '-3rem 0 1rem 0' }}>{project[0].title}</h1>
        <div className={styles.spacer} />
        <WorkDescription description={project[0].description} />
        <div className={styles.spacer} />
        <div className={styles.button_container}>
          <button className="main_button">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={project[0].demoUrl}
            >
              Live demo
            </a>
          </button>
          <button className="main_button">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={project[0].githubUrl}
            >
              View on github
            </a>
          </button>
        </div>
        <WorkDisplays photoPaths={project[0].sitePhotoPaths} />
      </div>
    )
  }
  return <div>No project found</div>
}
