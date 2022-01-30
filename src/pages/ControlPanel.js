import '../css/control-panel.css';
import '../css/products.css';
import '../css/Sidebar.css';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
// redux
import { useDispatch } from 'react-redux';
// import from react-icons
import { ImHome } from 'react-icons/im';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { IoLogoDropbox } from 'react-icons/io';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { GiAutoRepair } from 'react-icons/gi';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { logout } from '../slices/userSlice';

// component duhh
const ControlPanel = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const dispatch = useDispatch();
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
            <Link id='logout' onClick={() => dispatch(logout())} to='/signin'>
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
        <Outlet />
      </div>
    </div>
  );
};

export default ControlPanel;
