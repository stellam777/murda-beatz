import React from 'react';

const Subscribe = () => {
  return (
    <div id="subscribe" className="row row justify-content-center">
      <div className="mt-5 mb-5 sub">
        <h2 className="mb-2">Subscribe</h2>
        <form>
          <div className="row mb-5">
            <input className="col ml-3 mr-2" type="text" id="email" name="email" placeholder="Email address"/>
            <select className="col mr-3 ml-2" id="country" name="country">
              <option value="country">Country</option>
            </select>
          </div>
          <h3>Subscribe to Emails for:</h3>
          <div className="row justify-content-between ml-1 mb-5 mt-2">
            <div className="col">
              <div className="row align-items-center">
                <input type="checkbox" id="checkbox" name="murda-beatz"/>
                <h4 className="ml-1">Murda Beatz</h4>
              </div>
            </div>
            <div className="col">
              <div className="row align-items-center">
                <input type="checkbox" id="checkbox" name="interscope-records"/>
                <h4 className="ml-1">Interscope Records</h4>
              </div>
            </div>
            <div className="col">
              <div className="row align-items-center">
                <input type="checkbox" id="checkbox" name="umg"/>
                <h4 className="ml-1">Universal Music Group</h4>
              </div>
            </div>
          </div>
          <h4><span>By submitting this form, you agree to the </span>universal music group privacy policy.</h4>
        </form>
        <a href="#subscribe">
          <button type="button" className="mt-3">View All Photos</button>
        </a>
      </div>
    </div>
  )
}

export default Subscribe;
