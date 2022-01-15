import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
  return (
    <Carousel className='home-slider' >
      <Carousel.Item interval={4000}>
        <img
          className='d-block w-1'
          src='https://media.datacenterdynamics.com/media/images/ThinkstockPhotos-119882671.2e16d0ba.fill-1200x630_pLf2wxx.jpg'
          alt='First slide'
          width='100%'
          height='500px'
        />
        <Carousel.Caption style={{ display: 'absolute', bottom: '40%', zIndex: '2' }}>
          <h1>25 Years Efficiency Warranty </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className='d-block w-1'
          src='https://media.datacenterdynamics.com/media/images/ThinkstockPhotos-119882671.2e16d0ba.fill-1200x630_pLf2wxx.jpg'
          alt='Second slide'
          width='100%'
          height='500px'
        />

        <Carousel.Caption style={{ display: 'absolute', bottom: '40%', zIndex: '2' }}>
          <h1>Increase Independence and reduce electricity costs</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className='d-block w-1'
          src='https://media.datacenterdynamics.com/media/images/ThinkstockPhotos-119882671.2e16d0ba.fill-1200x630_pLf2wxx.jpg'
          alt='Third slide'
          width='100%'
          height='500px'
        />

        <Carousel.Caption style={{ display: 'absolute', bottom: '40%', zIndex: '2' }}>
          <h1>Enjoy the benefits of smart systems for solar power</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
