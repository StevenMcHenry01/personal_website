// 3rd party imports
import React from 'react'

// My imports

interface WorkDescriptionProps {
  description: string
}

export const WorkDescription = ({ description }: WorkDescriptionProps) => {
  return (
    <div style={{ maxWidth: '30rem', marginBottom: '1rem' }}>
      <p>{description}</p>
    </div>
  )
}
