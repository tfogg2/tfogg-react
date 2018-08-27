import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery'
import Fade from 'react-reveal/Fade'


class Passion extends Component {
  render(){

    const images = [
      {
        original: require('../Assets/kodi.svg'),
        thumbnail: require('../Assets/kodi-small.svg')
      },
      {
        original: require('../Assets/camp.svg'),
        thumbnail: require('../Assets/camp-small.svg')
      },
      {
        original: require('../Assets/snow.svg'),
        thumbnail: require('../Assets/snow-small.svg')
      },
      {
        original: require('../Assets/maine.svg'),
        thumbnail: require('../Assets/maine-small.svg')
      },
      {
        original: require('../Assets/ford-air.svg'),
        thumbnail: require('../Assets/ford-air-small.svg')
      },
      {
        original: require('../Assets/rosa.svg'),
        thumbnail: require('../Assets/rosa-small.svg')
      },
      {
        original: require('../Assets/pup.svg'),
        thumbnail: require('../Assets/pup-small.svg')
      },
      {
        original: require('../Assets/ford.svg'),
        thumbnail: require('../Assets/ford-small.svg')
      },
    ]

    return(

      <div className="passion">
        <ImageGallery items={images} />
      </div>

    )
  }
}


export default Passion;
