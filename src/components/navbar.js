import React from 'react';
import '../componentsStyle/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCog, faBagShopping, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; // Import faSignOutAlt icon
import { faWandSparkles } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className='nav'>
      {/* <div className='website-logo'> Website Logo</div> */}
      <div className='nav-items'>
        <button className='dashboard'>
          <FontAwesomeIcon icon={faHome} style={{ color: "#ffffff" }} />
          Dashboard
        </button>
        <button className='features'>
          <FontAwesomeIcon icon={faWandSparkles} />
          Features
        </button>
        <button className='subscription'>
          <FontAwesomeIcon icon={faBagShopping} />
          Subscription
        </button>
        <button className='setting'>
          <FontAwesomeIcon icon={faCog} style={{ color: "#ffffff" }} />
          Setting
        </button>
        <button className='logout'>
          <FontAwesomeIcon icon={faSignOutAlt} style={{ color: "#ffffff" }} />
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar;
