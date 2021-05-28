import React from 'react';

import album1 from "./assets/album1.png";
import album2 from "./assets/album2.png";

const Releases = () => {
  return (
    <div id="releases" className="mt-5">
      <h2>Releases</h2>
      <div className="row no-gutters justify-content-center align-items-start">
          <img className="album-image1 col-4" src={album1} alt="banana-split-album-cover"/>
          <img className="album-imgage2 col-4" src={album2} alt="various albums"/>
      </div>
      <a href="#">
        <button type="button" className="float-right">View All Releases</button>
      </a>
    </div>
  )
}

export default Releases;
