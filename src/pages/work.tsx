// 3rd party imports
import React from 'react'
import { WorkList } from '../layout/work_list/workList'

// My imports

const Work = () => {
  return (
    <div
      className="page_container"
      style={{ maxWidth: 'var(--breakpoint-medium' }}
    >
      <WorkList />
    </div>
  )
}

export default Work
