import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../styles/general.css';
import '../styles/navigation.css';
import UserIcon from './user';

const Navigation = () => (
  <div className="navBar">
    <span className="Navtitle">BookStore CMS</span>
    <ul className="navLinks">
      <li className="link"><NavLink to="/" className="link">BOOKS</NavLink></li>
      <li className="link"><NavLink to="/categories" className="link">CATEGORIES</NavLink></li>
    </ul>
    <UserIcon />
    <Outlet />
  </div>
);

export default Navigation;
