import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h4>Header</h4>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/create">Add</NavLink>
  </header>
);

export default Header;