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
    <div id="photos">
      <h2>Photos</h2>
      <div className="row justify-content-center no-gutters">
        <img className="col-2 gallery" src={murdaBeatz1} alt="Murda Beatz"/>
        <img className="col-2 gallery" src={murdaBeatz2} alt="Murda Beatz"/>
        <img className="col-2 gallery" src={murdaBeatz3} alt="Murda Beatz"/>
        <img className="col-2 gallery" src={murdaBeatz4} alt="Murda Beatz"/>
        <img className="col-2 gallery" src={murdaBeatz5} alt="Murda Beatz"/>
      </div>
      <div className="row justify-content-center no-gutters">
        <img className="col-2 gallery" src={murdaBeatz6} alt="Murda Beatz"/>
        <img className="col-2 gallery" src={murdaBeatz7} alt="Murda Beatz"/>
        <img className="col-2 gallery" src={murdaBeatz8} alt="Murda Beatz"/>
        <img className="col-2 gallery" src={murdaBeatz9} alt="Murda Beatz"/>
        <img className="col-2 gallery" src={murdaBeatz10} alt="Murda Beatz"/>
      </div>
      <a href="#">
        <button type="button" className="float-right">View All Dates</button>
      </a>
    </div>
  )
}

export default Photos;
