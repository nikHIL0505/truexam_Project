import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { SidebarData } from './sideBarData';
import './navbar.css';



function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
       <>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaBars onClick={showSidebar} />
          </Link>
          <div className='navbar-logo'>
            Truexam
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <FaTimes />
              </Link>
            </li>
            {SidebarData().map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </>
  );
}

export default Navbar;
