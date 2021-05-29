import React from 'react';

import album1 from "./assets/album1.png";
import album2 from "./assets/album2.png";

const Releases = () => {
  return (
    <div id="releases" className="row align-items-center justify-content-center">
      <div className="col m-5 justify-content-center">
        <h2 className="ml-4 mb-2">Releases</h2>
        <div className="row justify-content-center align-items-center mt-0 p-4" align="center">
          <div className="col-lg-4 col-md-12 mr-4 album-container">
              <img className="album-image1" src={album1} alt="banana-split-album-cover"/>
          </div>
          <div className="col-lg-4 col-md-12 ml-4 album-container">
              <img className="album-image2" src={album2} alt="various albums"/>
          </div>
        </div>
        <div className="text-center">
          <a href="#releases">
            <button type="button" className="float-lg-right text-center mr-4 mt-0 button">View All Releases</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Releases;
