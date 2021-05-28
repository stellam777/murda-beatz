import React from 'react';

import shirt1 from './assets/long-sleeve-shirt.png';
import shirt2 from './assets/short-sleeve-shirt.png';
import digitalSingle from './assets/digital-single.png';

const Store = () => {
  return (
    <div id="store" className="row justify-content-center">
      <div className="col m-5">
        <h2 className="ml-4 mb-2">Store</h2>
        <div className="row justify-content-center p-4" align="center">
          <div className="col-lg-3 col-md-12 m-3">
            <img className="product-image" src={shirt1} alt="long-sleeve-shirt" />
            <p>Banana Split Long Sleeve</p>
            <h5>$30.00</h5>
          </div>
          <div className="col-lg-3 col-md-12 m-3">
            <img className="product-image" src={shirt2} alt="short-sleeve-shirt" />
            <p>Banana Split Short Sleeve</p>
            <h5>$25.00</h5>
          </div>
          <div className="col-lg-3 col-md-12 m-3">
            <img className="product-image" src={digitalSingle} alt="digital-single" />
            <p>Banana Split - Digital Single</p>
            <h5>$1.29</h5>
          </div>
        </div>
        <a href="#store">
          <button type="button" className="float-right mr-4 mt-0">Shop All</button>
        </a>
      </div>
    </div>
  )
}

export default Store;
