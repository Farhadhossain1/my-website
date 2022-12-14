import React from 'react';
import { Link } from 'react-router-dom';
import projectImage from '../../assets/My project.png';

const Navbar = () => {
    const menuItems = <>
    <li><Link className='text-xl font-semibold text-white ' to="/">Home</Link></li>
    <li><Link className='text-xl font-semibold text-white ' to="/about">About</Link></li>
    <li><Link className='text-xl font-semibold text-white ' to="/project">Projects</Link></li>
    <li><a className='text-xl font-semibold text-white' href="https://drive.google.com/file/d/12uEdqawQ_zGxYUGaJ6A6Sqv438rWiSA4/view?usp=sharing" target="!blank">Resume</a></li>
    

    </>
    return (
        <div className="navbar bg-base-100 sticky top-0 z-50 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
 
  {menuItems}

      </ul>
    </div>
    <Link className=""><img className='w-16 rounded-full' src={projectImage} alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
  
  {menuItems}

    </ul>
  </div>
</div>
    );
};

export default Navbar;