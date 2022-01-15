import React from 'react';

const ServicesHome = () => {
  return (
    <div className='services-home'>
      <h2>Our Services</h2>
      <img src='http://www.aes-tunisie.com/images/iphone6-plus.png' alt='energy'  />
      <div className='boxbox'>
        <div className='service-box'>
          <h5>Diagnosis of water systems</h5>
          <p>
            The purpose of the diagnosis of water systems is to identify the state of play
            of the water supply service and to propose appropriate technical solutions
            allowing a choice to be made ...
          </p>
        </div>
        <div className='service-box'>
          <h5>Photovoltaic</h5>
          <p>
            "The sun is our great provider of energy on earth" If you want to contribute
            to the reduction of greenhouse gases responsible for climatic disturbances,
            while living ...
          </p>
        </div>
        <div className='service-box'>
          <h5>Solar thermal</h5>
          <p>
            What is solar thermal? Solar thermal is another form of energy produced from
            the sun. This energy is obtained by the transformation of solar radiation into
            thermal energy ...
          </p>
        </div>
        <div className='service-box'>
          <h5>Energetic audience</h5>
          <p>
            An energy audit generally leads to the identification of the technical and
            financial measures necessary to obtain energy savings. It also allows ...
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesHome;
