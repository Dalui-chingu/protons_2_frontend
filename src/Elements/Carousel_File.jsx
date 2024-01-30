import React from 'react';
import Carousel from './Caraousel';

const items = [
  {
    image: 'https://a.mktgcdn.com/p/uY46SE0Hm-HXAdGsncBImQdjnLzeB3YKZm1TiGRcVt8/1170x660.jpg',
    name: 'Cafeteria',
    description: 'A cozy place to grab a snack and relax.',
  },
  {
    image:'https://www.sloan.com/themes/sloan/img/sensor-tech/article-restroom-design-hero.jpg?v=5',
    name: 'Restroom',
    description: 'Clean and well-maintained restroom facilities.',
  },
  {
    image: 'https://bluestarexpresshotelug.com/wp-content/uploads/2022/01/lounge_2-scaled-1170x660.jpg',
    name: 'Lounge',
    description: 'DesComfortable seating area with Wi-Fi access.',
  },
];

 const CarouselFile = () => {
  return (
    <div className="app">
      <h1>Amenities</h1>
      <Carousel items={items} imageWidth="auto" imageHeight="400px" style={{backgroundSize:'cover'}} />
    </div>
  );
};
export default CarouselFile;