import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Navigation = () => (
  <div className="navBar">
    <span>BookStore CMS</span>
    <ul className="navLinks">
      <li><NavLink to="/">Books</NavLink></li>
      <li><NavLink to="/categories">categories</NavLink></li>
    </ul>
    <Outlet />
  </div>
);

export default Navigation;
