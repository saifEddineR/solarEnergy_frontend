import '../css/projectsPage.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../components/Card';
import { getProjects } from '../slices/projectSlice';

const Projects = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);
  const projects = useSelector((state) => state.projects.projectList);
  return (
    <div className='projectsPage'>
      <div className='projectsPage-title'>
        <h3>Our Projects</h3>
        <span>
          <p>
            Thanks to its reputation, its know-how and the competence of its team,
            <b>SolarEnergy</b> has carried out dozens of projects in various fields such
            as:
          </p>
          <ul>
            <li>Solar photovoltaic</li>
            <li>Solar thermal</li>
            <li>Public lighting</li>
            <li>Solar pumping</li>
            <li>Hybrid systems</li>
          </ul>
          <p>
            Our company AES also participated in the study and development of various
            projects on Tunisian and European territory: It thus aims to improve the field
            of industrial research in Tunisia by integrating innovative projects.
          </p>
          <h6>Discover a selection of the projects entrusted to us:</h6>
        </span>
      </div>
      <div className='projects-page'>
        {projects ? (
          projects.map((project) => <Card key={project._id} {...project} />)
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Projects;
