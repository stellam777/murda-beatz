import React, { useState } from 'react';
//import Carousel from 'react-elastic-carousel';
import Card from './Card'

import tb1 from './assets/banana-split.png';
import tb2 from './assets/video-thumbnail.png';
import tb3 from './assets/video-thumbnail.png';
import prev from './assets/prev-btn.svg';
import next from './assets/next-btn.svg';

const Videos = () => {

  let images = [{ id: 1, image: tb1, index: 0, title: "Banana Split", artist: "Murda Beatz (feat. ynw melly & lil durk)" }, { id: 2, image: tb2, index: 1, title: "Not Banana Split", artist: "Murda Beatz (feat. ynw melly & lil durk)" }, { id: 3, image: tb1, index: 2, title: "Banana Split", artist: "Murda Beatz (feat. ynw melly & lil durk)" }]

  const [image, setImage] = useState(images[0]);
  const [videoInfo, setVideoInfo] = useState({
    title: image.title,
    artist: image.artist
  })

  const nextImage = () => {
    if(image.index !== images.length-1) {
      const newIndex = image.index+1;
      setImage(images[newIndex]);
      setVideoInfo({
        title: images[newIndex].title,
        artist: images[newIndex].artist
      })
    }
  }

  const prevImage = () => {
    if(image.index !== 0) {
      const newIndex = image.index-1;
      setImage(images[newIndex]);
      setVideoInfo({
        title: images[newIndex].title,
        artist: images[newIndex].artist
      })
    }
  }


  return (
    <div id="videos" className="row">
      <div className="col m-5">
        <h2 className="ml-4 mt-4 mb-2">Videos</h2>

        {/* <div className="cards-slider"> */}
          <div className="cards-slider-wrapper"
            style={{
                  'transform': `translateX(-${image.index*(100/images.length)}%)`
                }}>

            {images.map((item) => <Card currImage={image} key={item.id} index={item.index} image={item.image} artist={item.artist} title={item.title}/>)}
          </div>
            <div className="mt-4 video-info">
              <p>{image.title}</p>
              <h5>{image.artist}</h5>
            </div>}
        {/* </div> */}
        <div className="row justify-content-center control-btn-container no-gutters p-0">
          <img src={prev} onClick={prevImage}
            alt="previous button" className="col-1 control-btn float-right" />
          <img src={next} onClick={nextImage}
            alt="next button" className="col-1 control-btn align-left" />
        </div>
        <div className="text-center">
          <a href="#videos">
            <button type="button" className="float-lg-right vid-button mr-4">View All Videos</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Videos;
