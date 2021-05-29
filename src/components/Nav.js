import React from 'react';

import logo from './assets/MBlogowhite_x300.svg';

const Nav = () => {
  return (
    <div id="nav" className='row justify-content-around m-4 align-items-top'>
      <div className="col">
        <img className='logo ml-4' src={logo} alt="Murda Beatz logo"/>
      </div>
      <nav className="mr-4 col">
        <ul className='row justify-content-between p-1'>
          <li className='col-xs-2'>
            <a href='#releases'>Releases</a>
          </li>
          <li className='col-xs-2'>
            <a href='#videos'>Videos</a>
          </li>
          <li className='col-xs-2'>
            <a href='#store'>Store</a>
          </li>
          <li className='col-xs-2'>
            <a href='#photos'>Photos</a>
          </li>
          <li className='col-xs-2'>
            <a href='#subscribe'>Subscribe</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
