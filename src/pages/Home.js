import '../css/home.css';
import React from 'react';
import Slider from '../components/Home/Slider';
import Intro from '../components/Home/Intro';
import ServicesHome from '../components/Home/ServicesHome';
import ProjectsHome from '../components/Home/ProjectsHome';
import FooterHome from '../components/Home/FooterHome';

const Home = (props) => {
  return (
    <div className='home-container'>
      <Slider />
      <Intro />
      <ServicesHome />
      <ProjectsHome />
      <FooterHome />
    </div>
  );
};

export default Home;
