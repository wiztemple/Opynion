import * as React from 'react';

// Navbar.scss
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="header">
      <nav className="navbar fixed-top" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="brand">
            <a href="index.html" className="navbar-item">OPYNION</a>
            <a className="navbar-burger" role="button" aria-label="menu" aria-expanded="false">
              <span>&#8801;</span>
            </a>
          </div>
          <div className="nav-menu">
            <div className="navbar-left">
              <a className="navbar-item" href="feeds.html">FEEDS</a>
            </div>
            <div className="navbar-right">
              <a className="navbar-item authLink" href="#">
                SIGN UP
              </a>
              <a className="navbar-item authLink" href="#">
                SIGN IN
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
