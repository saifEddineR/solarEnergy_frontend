import React from 'react';

const ProjectsHome = () => {
  return (
    <div className='projects-home'>
      <h2>Finalised Projects</h2>
      <div className='projects-container'>
        <div className='project-box'>
          <h5>autonomous PV System</h5>
          <img
            src='http://www.aes-tunisie.com/projets/2-502cb1d8c8f45619934538.jpg'
            alt='project'
          />
        </div>
        <div className='project-box'>
          <h5>Street lighting</h5>
          <img
            src='http://www.aes-tunisie.com/projets/3-3-502cbb1ad689b338097443.jpg'
            alt='project'
          />
        </div>
        <div className='project-box'>
          <h5>PV System connected to the Grid</h5>
          <img
            src='http://www.aes-tunisie.com/projets/4-4-558d1176e6bef008072573.jpg'
            alt='project'
          />
        </div>
        <div className='project-box'>
          <h5>Solar air conditioning</h5>
          <img
            src='http://www.aes-tunisie.com/projets/27-Projet-de-recherche-europeen---Climatisation-solaire,-ENIT-Tunis.jpg'
            alt='project'
          />
        </div>
        <div className='project-box'>
          <h5>Car with PV system</h5>
          <img
            src='http://www.aes-tunisie.com/projets/121-karhabtek-lebes.png'
            alt='project'
          />
        </div>
        <div className='project-box'>
          <h5>Solar pumping system</h5>
          <img
            src='https://5.imimg.com/data5/YW/CB/MY-38150664/solar-pumping-system-500x500.jpg'
            alt='project'
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsHome;
