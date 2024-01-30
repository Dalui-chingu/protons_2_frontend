// Card.js
import React from 'react';
import './Card.css';

const Card = ({ item, isSelected, onClick }) => {
  const { name, imageUrl, availabilityStatus } = item;

  return (
    <div className={`card ${isSelected ? 'selected' : ''}`} onClick={() => onClick(name, availabilityStatus)}>
      <img src={imageUrl} alt={name} className="card-image" />
      <div className="card-details">
        <h3 className="card-name">{name}</h3>
        <p className={`availability ${availabilityStatus}`}>
          {availabilityStatus === 'available'
            ? 'Available'
            : availabilityStatus === 'undermaintenance'
            ? 'Under Maintenance'
            : availabilityStatus === 'reserved'
            ? 'Reserved'
            : 'Unknown Status'}
        </p>
      </div>
    </div>
  );
};

export default Card;