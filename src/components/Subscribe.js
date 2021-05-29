import React,{ useState } from 'react';

const Subscribe = () => {

  const [formSubmit, setFormSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    country: ''
  })

  const ThankYouMessage = () => {
    return (
      <div className="thankyou-message">
        <p>Thank you for submitting!</p>
      </div>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.email && formData.country) {
      setFormSubmit(true);
    } else {
      setErrorMessage(true);
    }

    setFormData({ email: '', country: '' });
  }

  return (
    <div id="subscribe" className="row row justify-content-center">
      <div className="mt-5 mb-5 sub">
        <h2 className="mb-2">Subscribe</h2>
        {formSubmit && <ThankYouMessage />}
        {!formSubmit && (<React.Fragment><form>
            <div className="row mb-4">
              <input
                className="col-sm-12 col-lg-4 col-md-5 col-xs-12 ml-3 mr-2" type="text" id="email" name="email"
                placeholder="Email address"
                autoComplete='off'
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                value={formData.email || ''}
              />
              <select
                onChange={(e) =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                value={formData.country || ''}
                className="col-sm-12 col-lg-4 col-md-5 col-xs-12 mr-3 ml-2"
                id="country"
                name="country"
              >
                <option value="country">Country</option>
                <option value="USA">USA</option>
                <option value="Mexico">Mexico</option>
                <option value="Narnia">Narnia</option>
              </select>
          </div>
              {errorMessage && (<small className="row mb-5">*Fields cannot be empty*</small>)}
          <h3>Subscribe to Emails for:</h3>
          <div className="row ml-3 mb-5 mt-2 justify-content-between no-gutters mr-0">
            <div className="col-sm-12 col-lg-4">
              <div className="row align-items-center check">
                <input type="checkbox" id="checkbox" name="murda-beatz"/>
                <h4 className="ml-1">Murda Beatz</h4>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="row align-items-center check">
                <input type="checkbox" id="checkbox" name="interscope-records"/>
                <h4 className="ml-1">Interscope Records</h4>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="row align-items-center check">
                <input type="checkbox" id="checkbox" name="umg"/>
                <h4 className="ml-1">Universal Music Group</h4>
              </div>
            </div>
          </div>
          <h4><span>By submitting this form, you agree to the </span>universal music group privacy policy.</h4>
        </form>
        <div className="text-center">
          <a href="#subscribe">
            <button onClick={handleSubmit} type="button" className="float-lg-left mt-3">Submit</button>
          </a>
        </div></React.Fragment>)}
      </div>
    </div>
  )
}

export default Subscribe;
