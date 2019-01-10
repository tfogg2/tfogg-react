import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery'


class Gallery extends Component {
  render(){

    const images = [
      {
        original: require('../Assets/kodi-shake.png'),
        thumbnail: require('../Assets/kodi-shake-mini.png')
      },
      {
        original: require('../Assets/mid-shack.png'),
        thumbnail: require('../Assets/mid-shack-mini.png')
      },
      {
        original: require('../Assets/medic.png'),
        thumbnail: require('../Assets/medic-mini.png')
      },
      {
        original: require('../Assets/kodi-xmas.png'),
        thumbnail: require('../Assets/kodi-xmas-mini.png')
      },
      {
        original: require('../Assets/dash.png'),
        thumbnail: require('../Assets/dash-mini.png')
      },
      {
        original: require('../Assets/cat.png'),
        thumbnail: require('../Assets/cat-mini.png')
      },
      {
        original: require('../Assets/sky.png'),
        thumbnail: require('../Assets/sky-mini.png')
      },
      {
        original: require('../Assets/bridge.png'),
        thumbnail: require('../Assets/bridge-mini.png')
      },
      {
        original: require('../Assets/virginia.png'),
        thumbnail: require('../Assets/virginia-mini.png')
      },
      {
        original: require('../Assets/night-ski.png'),
        thumbnail: require('../Assets/night-ski-mini.png')
      },
      {
        original: require('../Assets/tree.png'),
        thumbnail: require('../Assets/tree-mini.png')
      },
      {
        original: require('../Assets/bv_ski.png'),
        thumbnail: require('../Assets/bv_ski-mini.png')
      },
      {
        original: require('../Assets/sip.png'),
        thumbnail: require('../Assets/sip-mini.png')
      },
      {
        original: require('../Assets/bv-friend.png'),
        thumbnail: require('../Assets/bv-friend-mini.png')
      },
      {
        original: require('../Assets/kodi-profile.png'),
        thumbnail: require('../Assets/kodi-profile-mini.png')
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
