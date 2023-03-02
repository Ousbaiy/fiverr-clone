import { useState } from 'react';
import './sidebar.scss';

const Sidebar = ({ sidebarActive }) => {
  return (
    <div className={`sidebar ${sidebarActive ? "active" : ""}`}>
      <button>Join Fiverr</button>
      <span>Sign in</span>
      <span>Browse Categories</span>
      <span>Explore</span>
      <span className='bs'>Fiverr Business</span>
      <span>General</span>
      <hr />
      <span>Home</span>
      <span>English</span>
      <span>EUR</span>
    </div>
  );
};

export default Sidebar;
