import React from 'react';

const Card = ({ image, artist, title, index, currImage }) => {

    return (
        <div className="card">
          <img className="vid-thumbnail" src={image} alt="Murda Beatz Video" />
        </div>
    )
}


export default Card;
