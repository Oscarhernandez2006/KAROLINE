import { useState } from 'react'
import Polaroid from './Polaroid'
import PhotoModal from './PhotoModal'
import { photos } from '../data/photos'

// Distribuye cada foto en una esquina distinta de la carta.
const CORNER_CLASSES = ['corner-top-left', 'corner-top-right', 'corner-bottom-left', 'corner-bottom-right', 'corner-bottom-center']

function PolaroidGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  return (
    <div className="polaroid-gallery">
      {photos.map((photo, index) => (
        <Polaroid
          key={photo.id}
          src={photo.src}
          caption={photo.caption}
          rotate={photo.rotate}
          type={photo.type}
          className={CORNER_CLASSES[index % CORNER_CLASSES.length]}
          style={{ animationDelay: `${0.2 + index * 0.25}s` }}
          onClick={() => setSelectedPhoto(photo)}
        />
      ))}

      {selectedPhoto && (
        <PhotoModal
          src={selectedPhoto.src}
          type={selectedPhoto.type}
          text={selectedPhoto.modalText}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </div>
  )
}

export default PolaroidGallery
