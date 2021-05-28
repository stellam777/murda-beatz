import React from 'react';

import logo from './assets/MBlogowhite_x300.svg';

const Nav = () => {
  return (
    <div className='d-flex justify-content-between m-4 align-items-top'>
      <div>
        <img className='logo ml-4' src={logo} alt="Murda Beatz logo"/>
      </div>
      <nav className="mr-4">
        <ul className='row'>
          <li className='col'>
            {/* <Link to='#releases'>Releases</Link> */}
            <a href='#releases'>Releases</a>
          </li>
          <li className='col'>
            <a href='#videos'>Videos</a>
          </li>
          <li className='col'>
            <a href='#store'>Store</a>
          </li>
          <li className='col'>
            <a href='#photos'>Photos</a>
          </li>
          <li className='col'>
            <a href='#subscribe'>Subscribe</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
