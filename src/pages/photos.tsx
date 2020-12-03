// 3rd party imports
import React from 'react'
import { PhotoMosaic } from '../components/photo_mosaic/photoMosaic'

// My imports

const Photos = () => {
  return (
    <div className="page_container" style={{ flexDirection: 'column' }}>
      <h1>Photos</h1>
      <PhotoMosaic />
    </div>
  )
}

export default Photos
