// CardItemList.js
import React, { useState } from 'react';
import Card from './Card';
import './CardItem.css';

const CardItemList = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardId, availabilityStatus) => {
    if (availabilityStatus === 'reserved' || availabilityStatus === 'undermaintenance') {
      // Do not select cards with 'Reserved' or 'Under Maintenance' status
      return;
    }

    setSelectedCard(cardId === selectedCard ? null : cardId);
  };

  const itemList = [
    {
      name: 'AC Type 1',
      imageUrl: 'https://cdn-www.pod-point.com/Type-1.svg?v=1594736894',
      availabilityStatus: 'available',
    },
    {
      name: 'AC Type 2',
      imageUrl: 'https://cdn-www.pod-point.com/Type-2.svg?v=1594736896',
      availabilityStatus: 'undermaintenance',
    },
    {
      name: 'DC Type',
      imageUrl: 'https://cdn-www.pod-point.com/CHAdeMO.svg?v=1594736893',
      availabilityStatus: 'reserved',
    },
    // Add more items as needed
  ];

  return (
    <div className="item-list">
      {itemList.map((item, index) => (
        <Card
          key={index}
          item={item}
          isSelected={item.name === selectedCard}
          onClick={(cardId, availabilityStatus) => handleCardClick(item.name, availabilityStatus)}
        />
      ))}
    </div>
  );
};

export default CardItemList;