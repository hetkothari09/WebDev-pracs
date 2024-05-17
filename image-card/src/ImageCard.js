import React from 'react';
import './ImageCard.css';

const ImageCard = ({imgUrl, description}) => {
    return (
      <div className='card'>
        <img src = {imgUrl} alt = 'Image' className='card-img' />
        <div className='card-description'>
          <p>{description}</p>
        </div>     
        </div>
    );
}

export default ImageCard;