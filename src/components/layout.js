import React from 'react';
import '../componentsStyle/layout.css';
import Navbar from './navbar';
import Heading from './heading';
// import React from "react";

const Layout = ({ children }) => {


  return (
    <div>
      <Heading></Heading>
      
    <div className="parent-div">
      <div className="child-div1">
 <Navbar/>
      </div>
      <div className="child-div2">
     {children}

      </div>
    </div>
    
    </div>
  );
};

export default Layout;
