// Navbar.js

import React from 'react';

const Navbar = ({ onTabChanged }) => {
  const tabs = [
    { type: 'Network', path: '/network', text: 'Network' },
    { type: 'Gateways', path: '/gateways', text: 'Gateways' },
    { type: 'Applications', path: '/applications', text: 'Applications' },
    { type: 'Home', path: '/', text: 'Home' },
  ];

  const handleTabChange = (tab) => {
    onTabChanged(tab.path, tab.type);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          Your Logo
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {tabs.map((tab) => (
              <li className="nav-item" key={tab.type}>
                <a
                  className="nav-link"
                  href={tab.path}
                  onClick={() => handleTabChange(tab)}
                >
                  {tab.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

