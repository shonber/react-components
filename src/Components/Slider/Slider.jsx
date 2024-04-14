import { useState, useEffect } from 'react';
import './slider.css';

import Carousel from './Carousel';
import SlickCarousel from './SlickCarousel';

const Slider = () => {
  return (
    <main>
      <SlickCarousel />
      <Carousel />
    </main>
  );
};
export default Slider;
