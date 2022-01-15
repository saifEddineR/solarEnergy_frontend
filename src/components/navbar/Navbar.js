import { useState } from 'react';
import './navbar.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { menuItems } from './MenuItems';

const NavBarClient = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <nav className='NavbarItems'>
        <h4 className='navbar-logo'>
          SOLAR<i class='fas fa-solar-panel'></i>ENERGY
        </h4>
        <div className='menu-icon' onClick={() => setActive(!active)}>
          <i className={active ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={active ? 'nav-menu active' : 'nav-menu'}>
          {menuItems.map((item) => (
            <li>
              <Link className={item.cName} to={item.url}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBarClient;
