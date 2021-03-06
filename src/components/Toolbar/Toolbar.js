import React from 'react';

import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const toolbar = props => (
  <header className="toolbar">
  <nav className="toolbar__navigation">
  <div className="toolbar__toggle-button">
    <DrawerToggleButton click={props.drawerClickHandler} />
  </div>
  <div className="toolbar__logo"><a href="/">THE LOGO</a></div>
  <div className="spacer" />
  <div className="toolbar_navigation-items">
  <ul>
    <li><a href="/">About</a></li>
    <li><a href="/">Portfolio</a></li>
    <li><a href="/">Services</a></li>
    <li><a href="/">Contact</a></li>
  </ul>
  </div>
  </nav>
  </header>
);

export default toolbar;