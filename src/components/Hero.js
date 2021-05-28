import React from "react";

import mail from './assets/ico-mail@2x.svg'
import spotify from './assets/ico-spotify@2x.svg'
import apple from './assets/ico-apple@2x.svg'
import ig from './assets/ico-ig@2x.svg'
import twitter from './assets/ico-twitter@2x.svg'
import fb from './assets/ico-fb@2x.svg'
import heroImg from './assets/hero-background-cropped.png'

const Hero = () => {
  return (
    <div id="hero">
      <div>
        <img src={heroImg} alt="hero" className="hero-img"/>
      </div>
      <div className="social-icons float-right">
        <ul>
          <li>
            <img src={mail} alt="mail icon"/>
          </li>
          <li>
            <img src={spotify}alt="spotify icon"/>
          </li>
          <li>
            <img src={apple} alt="apple icon"/>
          </li>
          <li>
            <img src={ig} alt="ig icon"/>
          </li>
          <li>
            <img src={twitter} alt="twitter icon"/>
          </li>
          <li>
            <img src={fb} alt="fb icon"/>
          </li>
        </ul>
      </div>
        <div className="hero-title">
          <h3>Check out on splice</h3>
          <h1>Murda Beatz' quarantize kit sample kit</h1>
          <a href="#">
          <button type="button" className="mt-4">Listen Now</button>
          </a>
        </div>
    </div>
  )
}

export default Hero;