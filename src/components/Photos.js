import React from 'react';

import murdaBeatz1 from './assets/murda-beatz1.png';
import murdaBeatz2 from './assets/murda-beatz2.svg';
import murdaBeatz3 from './assets/murda-beatz3.png';
import murdaBeatz4 from './assets/murda-beatz4.png';
import murdaBeatz5 from './assets/murda-beatz5.png';
import murdaBeatz6 from './assets/murda-beatz6.png';
import murdaBeatz7 from './assets/murda-beatz7.png';
import murdaBeatz8 from './assets/murda-beatz8.png';
import murdaBeatz9 from './assets/murda-beatz9.png';
import murdaBeatz10 from './assets/murda-beatz10.png';

const Photos = () => {
  return (
    <div id="photos" className="row justify-content-center">
      <div className="col m-5">
        <h2 className="ml-4 mb-2">Photos</h2>
        <div className="row justify-content-around pt-4 pb-5" align="center">
          <div className="col-lg-2 col-md-4 m-1 mb-4">
            <img className="gallery" src={murdaBeatz1} alt="Murda Beatz"/>
          </div>
          <div className="col-lg-2 col-md-4 m-1 mb-4">
            <img className="gallery" src={murdaBeatz2} alt="Murda Beatz"/>
          </div>
          <div className="col-lg-2 col-md-4 m-1 mb-4">
            <img className="gallery" src={murdaBeatz3} alt="Murda Beatz"/>
          </div>
          <div className="col-lg-2 col-md-4 m-1 mb-4">
            <img className="gallery" src={murdaBeatz4} alt="Murda Beatz"/>
          </div>
          <div className="col-lg-2 col-md-4 m-1 mb-4">
            <img className="gallery" src={murdaBeatz5} alt="Murda Beatz"/>
          </div>
          <div className="col-lg-2 col-md-4 m-1 mb-4">
            <img className="gallery" src={murdaBeatz6} alt="Murda Beatz"/>
          </div>
          <div className="col-lg-2 col-md-4 m-1 mb-4">
            <img className="gallery" src={murdaBeatz7} alt="Murda Beatz"/>
          </div>
          <div className="col-lg-2 col-md-4 m-1 mb-4">
            <img className="gallery" src={murdaBeatz8} alt="Murda Beatz"/>
          </div>
          <div className="col-lg-2 col-md-4 m-1 mb-4">
            <img className="gallery" src={murdaBeatz9} alt="Murda Beatz"/>
          </div>
          <div className="col-lg-2 col-md-4 m-1 mb-4">
            <img className="gallery" src={murdaBeatz10} alt="Murda Beatz"/>
          </div>
        </div>
        <div className="text-center">
          <a href="#photos">
            <button type="button" className="float-lg-right mr-4 mt-0">View All Photos</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Photos;
