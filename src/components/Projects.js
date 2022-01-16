import { useSelector, useDispatch } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import ModalProject from './ModalProject';
import { deleteProject } from '../slices/projectSlice';

const Projects = () => {
  const { projectList } = useSelector((state) => state.projects);
  return (
    <div>
      <div className='mini-navbar'>
        <span>
          <h3>Projects</h3>
          <ModalProject showedit={false} />
        </span>
      </div>
      <div className='products-container'>
        {projectList
          ? projectList.map((project) => <ProjectCard key={project._id} {...project} />)
          : true}
      </div>
    </div>
  );
};

export const ProjectCard = ({ _id, title, desc, imgUpload, img }) => {
  const dispatch = useDispatch();
  return (
    <div className='productAD-card'>
      <span>
        <img src={imgUpload} alt='project' />
      </span>
      <h4 className='name'>{title}</h4>
      <h6 className='desc'>{desc}</h6>
      <span className='buttons' style={{ paddingTop: '30px' }}>
        <button className='card-btn edit-btn'>
          <ModalProject showedit={true} project={{ _id, title, img, desc }} />
        </button>
        <button
          onClick={() => dispatch(deleteProject(_id))}
          className='card-btn delete-btn'
        >
          <FaTrash className='delete-icon icons' />
        </button>
      </span>
    </div>
  );
};

export default Projects;
