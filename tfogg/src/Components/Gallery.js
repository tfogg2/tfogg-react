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
        original: require('../Assets/burlington.png'),
        thumbnail: require('../Assets/burlington-small.png')
      },
      {
        original: require('../Assets/nc-water.png'),
        thumbnail: require('../Assets/nc-water-small.png')
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
        original: require('../Assets/charleston-water.png'),
        thumbnail: require('../Assets/charleston-water-small.png')
      },
      {
        original: require('../Assets/kodi-eyes.png'),
        thumbnail: require('../Assets/kodi-eyes-small.png')
      },
      {
        original: require('../Assets/ford-air.svg'),
        thumbnail: require('../Assets/ford-air-small.png')
      },
      {
        original: require('../Assets/st-john-flight.png'),
        thumbnail: require('../Assets/st-john-flight-small.png')
      },
      {
        original: require('../Assets/sushi.png'),
        thumbnail: require('../Assets/sushi-small.png')
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
