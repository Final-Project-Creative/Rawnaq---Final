import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Home.css';


const slideImages = [
  'https://st4.depositphotos.com/10504788/20544/i/1600/depositphotos_205444352-stock-photo-fashion-background-woman-summer-clothes.jpg',
  'https://st4.depositphotos.com/10504788/20544/i/1600/depositphotos_205444352-stock-photo-fashion-background-woman-summer-clothes.jpg',
  'https://st4.depositphotos.com/10504788/20544/i/1600/depositphotos_205444352-stock-photo-fashion-background-woman-summer-clothes.jpg'
];

const properties = {
  duration: 5000,
  transitionDuration: 1000,
  infinite: true,
  indicators: true,
  arrows: true
}

const HomepageLayout = () => {
  return (
    <div className="slide-container">
    <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
        </Slide>
    </div>
  )
}
export default HomepageLayout;


