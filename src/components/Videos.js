import React from 'react';
//import Carousel from 'react-elastic-carousel';
import Card from './Card'

import tb1 from './assets/banana-split-thumbnail.png';
import tb2 from './assets/video-thumbnail.png';
import tb3 from './assets/video-thumbnail.png';

const Videos = () => {
  let images = [{ id: 1, image: tb1 }, { id: 2, image: tb2 }, { id: 3, image: tb1 }]



  return (
    <div id="videos" className="row">
      <div className="col m-5">
        <h2 className="ml-4 mb-2">Videos</h2>

        <div className="cards-slider">
          <div className="cards-slider-wrapper">
            {/* {images.map((item) => <Card key={item.id} image={item.image}/>)} */}
          </div>
        </div>
        <div className="text-center">
          <a href="#videos">
            <button type="button" className="float-lg-right">View All Videos</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Videos;
