import React from 'react';
import { Link } from 'react-router-dom';

import logo from './assets/MBlogowhite_x300.svg';

const Nav = () => {
  return (
    <div className='d-flex justify-content-between m-4 align-items-top'>
      <div>
        <img className='logo' src={logo} />
      </div>
      <nav>
        <ul className='row'>
          <li className='col'>
            <Link to='#releases'>Releases</Link>
          </li>
          <li className='col'>
            <Link to='#videos'>Videos</Link>
          </li>
          <li className='col'>
            <Link to='#store'>Store</Link>
          </li>
          <li className='col'>
            <Link to='#photos'>Photos</Link>
          </li>
          <li className='col'>
            <Link to='#subscribe'>Subscribe</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
