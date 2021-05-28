import React from 'react';

import shirt1 from './assets/long-sleeve-shirt.png';
import shirt2 from './assets/short-sleeve-shirt.png';
import digitalSingle from './assets/digital-single.png';

const Store = () => {
  return (
    <div id="store">
      <h2>Store</h2>
      <div className="row justify-content-center no-gutters">
        <div className="col-3 store-img m-0">
          <img className="product-image" src={shirt1} alt="long-sleeve-shirt" />
          <p>Banana Split Long Sleeve</p>
          <h5>$30.00</h5>
        </div>
        <div className="col-3 store-img m-0">
          <img className="product-image" src={shirt2} alt="short-sleeve-shirt" />
          <p>Banana Split Short Sleeve</p>
          <h5>$25.00</h5>
        </div>
        <div className="col-3 store-img m-0">
          <img className="product-image" src={digitalSingle} alt="digital-single" />
          <p>Banana Split - Digital Single</p>
          <h5>$1.29</h5>
        </div>
      </div>
      <a href="#">
        <button type="button" className="float-right">Shop All</button>
      </a>
    </div>
  )
}

export default Store;
