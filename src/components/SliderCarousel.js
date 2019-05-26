import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://i.imgur.com/GoiKzJB.jpg',
    altText: 'Slide 1',
    header: 'Slide 1 Header'
  },
  {
    src: 'https://i.imgur.com/GoiKzJB.jpg',
    altText: 'Slide 3',
    header: 'Slide 3 Header'

  }
];

const SliderCarousel = () => <UncontrolledCarousel items={items} />;

export default SliderCarousel;