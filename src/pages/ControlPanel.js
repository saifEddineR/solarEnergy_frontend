import '../css/control-panel.css';
import '../css/products.css';
import '../css/Sidebar.css';
import React, { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
//imported component
import Products from '../components/Products';
import Projects from '../components/Projects';
import Dashboard from '../components/Dashboard';
// redux
import { useDispatch } from 'react-redux';
import { getProducts, getProjects, getServices, logoutUser } from '../action/authActions';
import { getEsteem } from '../action/esteemAction';
// import from react-icons
import { ImHome } from 'react-icons/im';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { IoLogoDropbox } from 'react-icons/io';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { GiAutoRepair } from 'react-icons/gi';
import UserEsteem from '../components/UserEsteem';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';

// component duhh
const ControlPanel = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getProjects());
    dispatch(getServices());
    dispatch(getEsteem());
  }, [dispatch]);

  return (
    <div>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar-ad'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div>
            <h3 className='AD-title'>Admin Dashboard</h3>
          </div>
          <div className='nav_logout'>
            <Link id='logout' onClick={() => dispatch(logoutUser())} to='/login'>
              <span id='logout-icon'>
                <RiLogoutBoxLine />
              </span>
              <span className='logout-text'>Logout</span>
            </Link>
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li className='nav-text'>
              <Link to='/control-panel'>
                <ImHome />
                Dashboard
              </Link>
            </li>
            <li className='nav-text'>
              <Link to='/control-panel/Products'>
                <IoLogoDropbox />
                Products
              </Link>
            </li>
            <li className='nav-text'>
              <Link to='/control-panel/projects'>
                <AiOutlineFundProjectionScreen />
                Projects
              </Link>
            </li>
            <li className='nav-text'>
              <Link to='/control-panel/userEsteem'>
                <GiAutoRepair />
                Users info
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
      <div className='control-content'>
        <Route exact path='/control-panel' component={Dashboard} />
        <Route path='/control-panel/products' component={Products} />
        <Route path='/control-panel/projects' component={Projects} />
        <Route path='/control-panel/userEsteem' component={UserEsteem} />
      </div>
    </div>
  );
};

export default ControlPanel;
