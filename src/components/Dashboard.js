// redux
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const products = useSelector((state) => state.auth.products);
  const projects = useSelector((state) => state.auth.projects);
  const allUserInfo = useSelector((state) => state.auth.allUserInfo);

  return (
    <div className='AD-info-boxes'>
      <div className='AD-info-box'>
        <h2>projects</h2>
        {products ? (
          <div>
            <h5>{products.length} products articles</h5>
            <div className='AD-info-lastest'>
              <h6>Latest added product</h6>
              <p>{products[products.length - 1].name} </p>
              <p>{products[products.length - 1].desc} </p>
              <img
                src={products[products.length - 1].img}
                alt='product'
                width='150'
                height='150'
              />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className='AD-info-box'>
        <h2>products</h2>
        {projects ? (
          <div>
            <h5>{projects.length} realised projects</h5>
            <div className='AD-info-lastest'>
              <h6>Latest project</h6>
              <p>{projects[projects.length - 1].title} </p>
              <img
                src={projects[projects.length - 1].imgUpload}
                alt='projects'
                width='150'
                height='150'
              />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className='AD-info-box'>
        <h2>clients</h2>
        {allUserInfo ? (
          <div>
            <h5>{allUserInfo.length} future clients</h5>
            <div className='AD-info-lastest'>
              <h6>Latest User</h6>
              <p>
                {allUserInfo[allUserInfo.length - 1].fName}{' '}
                {allUserInfo[allUserInfo.length - 1].lName}
              </p>
              <p>
                {allUserInfo[allUserInfo.length - 1].addressCity}{' '}
                {allUserInfo[allUserInfo.length - 1].addressLocation}
              </p>
              <img
                src={allUserInfo[allUserInfo.length - 1].roofImg[0]}
                alt='user img input'
                width='150'
                height='150'
              />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
