import '../../css/footer.css';
import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { FaPhoneAlt, FaFacebook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { AiFillTwitterCircle, AiOutlineLink } from 'react-icons/ai';
import { SiLinkedin } from 'react-icons/si';

const FooterHome = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img
          src='https://unitedsolar.com/wp-content/uploads/2017/05/solarpanel-icon.png'
          alt='logo'
        />
        <h6>SOLAR ENERGY</h6>
        <span>
          <FaFacebook />
          <AiFillTwitterCircle />
          <SiLinkedin />
        </span>
      </div>
      <div className='footer-info'>
        <span>
          <HiLocationMarker />
          <p>Solar Energy, sahloul - Sousse - Tunisia</p>
        </span>
        <span>
          <FaPhoneAlt />
          <p>+21692870xxx</p>
        </span>
        <span>
          <MdEmail />
          <p>projectx.energy@gmail.com</p>
        </span>
        <span>
          <AiOutlineLink />
          <a href='/'>www.solarenergy.tn</a>
        </span>
      </div>
    </div>
  );
};

export default FooterHome;
