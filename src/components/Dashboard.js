// redux
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../slices/productSlice';
import { getProjects } from '../slices/projectSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getProjects());
  }, [dispatch]);
  const { productList } = useSelector((state) => state.products);
  const { projectList } = useSelector((state) => state.projects);
  // const allUserInfo = useSelector((state) => state.auth.allUserInfo);

  return (
    <div className='AD-info-boxes'>
      <div className='AD-info-box'>
        <h2>projects</h2>
        {productList.length && (
          <div>
            <h5>{productList.length} products articles</h5>
            <div className='AD-info-lastest'>
              <h6>Latest added product</h6>
              <p>{productList[productList.length - 1].name} </p>
              <p>{productList[productList.length - 1].desc} </p>
              <img
                src={productList[productList.length - 1].img}
                alt='product'
                width='150'
                height='150'
              />
            </div>
          </div>
        )}
      </div>
      <div className='AD-info-box'>
        <h2>products</h2>
        {projectList.length && (
          <div>
            <h5>{projectList.length} realised projects</h5>
            <div className='AD-info-lastest'>
              <h6>Latest project</h6>
              <p>{projectList[projectList.length - 1].title} </p>
              <img
                src={projectList[projectList.length - 1].imgUpload}
                alt='projects'
                width='150'
                height='150'
              />
            </div>
          </div>
        )}
      </div>
      <div className='AD-info-box'>
        <h2>clients</h2>
        {/* {allUserInfo && (
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
        )} */}
      </div>
    </div>
  );
};

export default Dashboard;
