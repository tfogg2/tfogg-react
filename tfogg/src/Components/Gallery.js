import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery'


class Gallery extends Component {
  render(){

    const images = [
      {
        original: require('../Assets/kodi.svg'),
        thumbnail: require('../Assets/kodi-small.png')
      },
      {
        original: require('../Assets/camp.svg'),
        thumbnail: require('../Assets/camp-small.png')
      },
      {
        original: require('../Assets/snow.svg'),
        thumbnail: require('../Assets/snow-small.png')
      },
      {
        original: require('../Assets/maine.svg'),
        thumbnail: require('../Assets/maine-small.png')
      },
      {
        original: require('../Assets/ford-air.svg'),
        thumbnail: require('../Assets/ford-air-small.png')
      },
      {
        original: require('../Assets/rosa.svg'),
        thumbnail: require('../Assets/rosa-small.png')
      },
      {
        original: require('../Assets/pup.svg'),
        thumbnail: require('../Assets/pup-small.png')
      },
      {
        original: require('../Assets/ford.svg'),
        thumbnail: require('../Assets/ford-small.png')
      },
    ]

    return(
      <div className="gallery">
        <ImageGallery items={images} />
      </div>
    )
  }
}


export default Gallery;
