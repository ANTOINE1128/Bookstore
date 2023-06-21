import { NavLink, Outlet } from 'react-router-dom';

const Navbar = () => (
  <div className="navBar">
    <span>BookStore CMS</span>
    <ul className="navLinks">
      <li><NavLink to="/">Books</NavLink></li>
      <li><NavLink to="/categories">Categories</NavLink></li>
    </ul>
    <Outlet />
  </div>
);

export default Navbar;
