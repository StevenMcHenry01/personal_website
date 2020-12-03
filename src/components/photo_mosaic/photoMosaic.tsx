import React, { useState, useCallback } from 'react'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { photos } from '../../data/photos'
import useWindowSize from '../../hooks/useWindowSize'

export const PhotoMosaic = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const windowSize = useWindowSize()

  const openLightbox = useCallback((_, { index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <div>
      <Gallery
        photos={photos}
        onClick={openLightbox}
        direction={windowSize && windowSize < 640 ? 'row' : 'column'}
      />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              styles={{
                view: (base) => ({
                  ...base,
                  alignItems: 'center',
                  display: 'flex ',
                  height: 'calc(100vh - 54px)',
                  justifyContent: 'center',
                  '& > img': {
                    maxHeight: 'calc(100vh - 94px)',
                  },
                }),
              }}
              views={(photos as any).map((x: any) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
}
