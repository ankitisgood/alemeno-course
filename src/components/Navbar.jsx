import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

<nav className="navbar">
  <div className="navbar-left">
  <Link to='/' className="logo">
    {/* <a href="/" className="logo"> */}
      COURSEHUB
      </Link>
  </div>
  <div className="navbar-center">
    <ul className="nav-links">
      <li>
      <Link to='/'>Courses</Link>
      </li>
      <li>
      <Link to='/dashboard'>Dashboard</Link>
      </li>
    </ul>
  </div>
  <div className="navbar-right">
    <div>sign in</div>
  </div>
</nav>
);
};

export default Navbar;