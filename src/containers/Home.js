import React from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './homepage.styles.scss';
import women from '../assets/women.jpg';
import "./style.css";



const slideImages = [
  'https://st4.depositphotos.com/10504788/20544/i/1600/depositphotos_205444352-stock-photo-fashion-background-woman-summer-clothes.jpg',
  'https://png.pngtree.com/thumb_back/fh260/back_our/20190619/ourmid/pngtree-shopping-mall-supermarket-selection-merchandise-poster-background-material-image_133225.jpg',
  'https://png.pngtree.com/thumb_back/fh260/back_our/20190619/ourmid/pngtree-simple-and-fresh-cosmetic-lipstick-new-product-release-online-shopping-poster-image_141867.jpg',
  'https://c8.alamy.com/comp/W3F3XY/puzzled-beautiful-girl-looking-up-while-comparing-prizes-in-the-shopping-mall-and-online-shopping-close-up-portrait-isolated-yellow-background-stu-W3F3XY.jpg'
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
    <div className="slide-container" style={{ padding: 0 }}>
      <Slide {...properties} style={{ padding: 0 }}>
        <div className="each-slide" alt="Responsive image" >
          <div style={{ 'backgroundImage': `url(${slideImages[0]})` }} >
          </div>
        </div>
        <div className="each-slide" alt="Responsive image">
          <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
          </div>
        </div>
        <div className="each-slide" alt="Responsive image">
          <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
          </div>
        </div>
      </Slide>

      <div className="container">
        <div className="row" style={{ textAlign: 'center' }}>
          <div className="col-lg-1 col-xs-1">
          </div>
          <div className="col-lg-5 col-xs-10">
            <Link className='background-image' to="/womenproducts">
              <h1 className='title'>WOMEN</h1>
              <img className='background-image' width="100%" height="75%" src='https://ae01.alicdn.com/kf/HTB1IQO0nRDH8KJjy1zeq6xjepXak/2018-Women-Fashion-Turtleneck-Thick-Sweater-Dresses-Plus-Size-Casual-Sexy-Knitted-Cotton-Autumn-Winter-Dress.jpg'></img>
            </Link>
          </div>
          <div className="col-xs-1">
          </div>
          <div className="col-xs-1">
          </div>
          <div className="col-lg-5 col-xs-10">
            <Link className='background-image' to="/menproducts">
              <h1 className='title'>MEN</h1>
              <img className='background-image' width="100%" height="75%" src='https://www.thefashionisto.com/wp-content/uploads/2019/07/Latin-Male-Model-Double-Denim-Style-800x1200.jpg'></img>
            </Link>
          </div>
          <div className="col-lg-1">
          </div>
        </div>
        <div className="row" style={{ textAlign: 'center' }}>
          <div className="col-lg-1">
          </div>
          <div className="col-lg-5">
            <Link className='background-image' to="/childproducts">
              <h1 className='title'>CHILDREN</h1>
              <img className='background-image' width="100%" height="75%" src='https://i.pinimg.com/originals/f0/4b/5f/f04b5f7a094756a2138f99feebf77673.jpg'></img>
            </Link>
          </div>
          <div className="col-lg-5">
            <Link className='background-image' to="/accproducts">
              <h1 className='title'>ACCESSORIES</h1>
              <img className='background-image' width="100%" height="75%" src='https://previews.123rf.com/images/anjelagr/anjelagr1603/anjelagr160300039/55136602-women-s-set-of-fashion-accessories-in-golden-color-on-wooden-background-shoes-handbag-perfume-and-co.jpg'></img>
            </Link>
          </div>
          <div className="col-lg-1">
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomepageLayout;

