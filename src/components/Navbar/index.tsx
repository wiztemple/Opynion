import * as React from 'react';

// Navbar.scss
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="header">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container is-fluid">
          <div className="brand">
            <a href="index.html" className="navbar-item">OPYNION</a>
            <a className="navbar-burger" role="button" aria-label="menu" aria-expanded="false">
              <span>&#8801;</span>
            </a>
          </div>
          <div className="nav-menu">
            <div className="navbar-left">
              <a className="navbar-item" href="feeds.html">Feeds</a>
            </div>
            <div className="navbar-right">
              <a className="navbar-item authLink" href="#">
                Sign Up
                </a>
              <a className="navbar-item authLink" href="#">
                Log In
                </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
