// 3rd party imports
import React from 'react'
import { getAllProjectIds } from '../../data/projects'
import { WorkShowcase } from '../../layout/work_showcase/workShowcase'

// My imports

const WorkPage = ({ id }: any) => {
  return (
    <div className="page_container">
      <WorkShowcase id={id} />
    </div>
  )
}

export default WorkPage

export async function getStaticPaths() {
  const paths = getAllProjectIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  return {
    props: {
      id: params.id,
    },
  }
}
