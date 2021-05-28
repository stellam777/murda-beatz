import React from 'react';

const Tours = () => {
  return (
    <div id='tours'>
      <h2>Tour</h2>
      <div className='row justify-content-around align-items-center'>
        <div className='col-4 tour-left'>
          <div className="tour-item">
            <h5>Jan 6</h5>
            <div className='row align-items-center'>
              <h4 className='col'>Jewel Nightclub</h4>
              <div className='d-flex justify-content-between'>
                <p className='m-3'>Tickets</p>
                <p className='m-3'>VIP</p>
                <p className='m-3'>RSVP</p>
              </div>
            </div>
            <p><span>Las Vegas, NV</span></p>
          </div>
          <div className='mt-4 tour-item'>
            <h5>Jun 6</h5>
            <div className='row align-items-center'>
              <h4 className='col'>Jewel Nightclub</h4>
              <div className='d-flex justify-content-between'>
                <p className='m-3'>Tickets</p>
                <p className='m-3'>VIP</p>
                <p className='m-3'>RSVP</p>
              </div>
            </div>
            <p><span>Las Vegas, NV</span></p>
          </div>
          <div className='mt-4 tour-item'>
            <h5>Aug 7</h5>
            <div className='row align-items-center'>
              <h4 className='col'>Jewel Nightclub</h4>
              <div className='d-flex justify-content-between'>
                <p className='m-3'>Tickets</p>
                <p className='m-3'>VIP</p>
                <p className='m-3'>RSVP</p>
              </div>
            </div>
            <p><span>Las Vegas, NV</span></p>
          </div>
        </div>
        <div className='col-4 tour-right'>
          <div className="tour-item">
            <h5>Jul 31</h5>
            <div className='row align-items-center'>
              <h4 className='col'>Jewel Nightclub</h4>
              <div className='d-flex justify-content-between'>
                <p className='m-3'>Tickets</p>
                <p className='m-3'>VIP</p>
                <p className='m-3'>RSVP</p>
              </div>
            </div>
            <p><span>Las Vegas, NV</span></p>
          </div>
          <div className='mt-4 tour-item'>
            <h5>Jun 6</h5>
            <div className='row align-items-center'>
              <h4 className='col'>Jewel Nightclub</h4>
              <div className='d-flex justify-content-between'>
                <p className='m-3'>Tickets</p>
                <p className='m-3'>VIP</p>
                <p className='m-3'>RSVP</p>
              </div>
            </div>
            <p><span>Las Vegas, NV</span></p>
          </div>
          <div className='mt-4 tour-item'>
            <h5>Jul 31</h5>
            <div className='row align-items-center'>
              <h4 className='col'>Jewel Nightclub</h4>
              <div className='d-flex justify-content-between'>
                <p className='m-3'>Tickets</p>
                <p className='m-3'>VIP</p>
                <p className='m-3'>RSVP</p>
              </div>
            </div>
            <p><span>Las Vegas, NV</span></p>
          </div>
        </div>
      </div>
      <a href="#">
        <button type="button" className="float-right">View All Dates</button>
      </a>
    </div>
  );
};

export default Tours;
