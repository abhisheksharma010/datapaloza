import React from 'react';
import { Link } from 'react-router-dom';
import '../componentsStyle/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCog, faBagShopping, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faWandSparkles } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav-items'>
        <Link to="/" className='dashboard'>
          <FontAwesomeIcon icon={faHome} style={{ color: "#ffffff" }} />
          Dashboard
        </Link>
        <Link to="/features" className='features'>
          <FontAwesomeIcon icon={faWandSparkles} />
          Features
        </Link>
        <Link to="/subscription" className='subscription'>
          <FontAwesomeIcon icon={faBagShopping} />
          Subscription
        </Link>
        <Link to="/setting" className='setting'>
          <FontAwesomeIcon icon={faCog} style={{ color: "#ffffff" }} />
          Setting
        </Link>
        <Link to="/logout" className='logout'>
          <FontAwesomeIcon icon={faSignOutAlt} style={{ color: "#ffffff" }} />
          Logout
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
