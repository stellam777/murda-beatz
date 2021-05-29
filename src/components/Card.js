import React from 'react';

const Card = ({ image }) => {

    return (
        <div className="card">
          <img className="vid-thumbnail" src={image} alt="image" />
        </div>
    )
}


export default Card;
