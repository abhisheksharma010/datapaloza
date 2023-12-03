import React from 'react';
import '../componentsStyle/heading.css';

const Heading = () => {
  return (
    <div className='heading'>
              <div className='website-logo'> Website Logo</div>
              {/* <div className="loginsignup">
      <button className="loginButton">Login</button>
      <button className="signupButton">Signup</button>
    </div> */}
     <div className="userProfile">
        <img src='https://cdn-icons-png.flaticon.com/512/805/805385.png' alt="User Avatar" className="avatar" />
        <span className="userName">Abhishek Sharma</span>
      </div>

    </div>
  )
}

export default Heading