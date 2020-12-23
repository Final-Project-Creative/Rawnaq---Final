import React from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './homepage.styles.scss';
import women from '../assets/women.jpg'


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
    <div className="slide-container" style={{ padding: 0 }}>
      <Slide {...properties} style={{ padding: 0 }}>
        <div className="each-slide" alt="Responsive image">
          <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
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
              <img className='background-image' width="100%" src='https://image.made-in-china.com/2f0j00oOStnyLzMgcF/Modern-Fashion-Elegant-Women-Clothes.jpg'></img>
            </Link>
          </div>
          <div className="col-xs-1">
          </div>
          <div className="col-xs-1">
          </div>
          <div className="col-lg-5 col-xs-10">
            <Link className='background-image' to="/menproducts">
              <h1 className='title'>MEN</h1>
              <img className='background-image' width="100%" src='https://cf.shopee.ph/file/1a4c08a2503d9ada5307c116673328ab'></img>
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
              <img className='background-image' width="100%" src='https://previews.123rf.com/images/olgagi/olgagi1904/olgagi190400207/121197640-collage-set-of-children-clothes-denim-jacket-and-pants-shoes-and-rain-jacket-for-child-boy-isolated-.jpg'></img>
            </Link>
          </div>
          <div className="col-lg-5">
            <Link className='background-image' to="/accproducts">
              <h1 className='title'>ACCESSORIES</h1>
              <img className='background-image' width="100%" src='https://image.shutterstock.com/image-photo/fashion-women-stylish-accessories-outfit-260nw-1532053424.jpg'></img>
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

