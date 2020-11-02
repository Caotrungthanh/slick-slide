import React from 'react';
import './App.css';
import Slider from 'react-slick';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../src/image/bear.png';
import image2 from '../src/image/bear2.png';
import image3 from '../src/image/bear3.png';
import image4 from '../src/image/bear4.png';
import image5 from '../src/image/bear5.png';

import {Style} from './components/style';

function App() {
  var settings = {
    dot: true,
    infinity: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
 
  return (
    <Style>
      <Slider {...settings}>
        <div className='image-content'>
          <img src={image1}/>
        </div>
        <div className='image-content'>
          <img src={image2}/>
        </div>
        <div className='image-content'>
          <img src={image3}/>
        </div>
        <div className='image-content'>
          <img src={image4}/>
        </div>
        <div className='image-content'>
          <img src={image5}/>
        </div>
      </Slider>
    </Style>
  );
}

export default App;
