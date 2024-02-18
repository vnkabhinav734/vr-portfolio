import React, { useState } from 'react';
import './navBar.css'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll';

const NavBar = () => {

    const [nav, setNav]= useState(false)
    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'experience'
        },
        {
            id: 4,
            link: 'contact'
        },
    ]
return (
<div className="navbar">
    <div>
      <h1 className='name-heading font-signature'>Vinayak</h1>
    </div>
        <ul className='flex hidden-md'>
            {links.map(({ id, link }) => (
            <li key={id} className='list-item'>
                <Link to={link} smooth duration={500}>{link}</Link>
            </li>
            ))}
        </ul>
    <div onClick={() => setNav(!nav)}className= "hamburgermenu">
        {nav ? <FaTimes size={30}/> : <FaBars size={30}/> }
    </div>

    {nav && (
         <ul className='mobilemenu'>
         {links.map(({ id, link }) => (
                 <li key={id} className='mobilelistitem'>
                    <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                 </li>
             ))}
         </ul>
    )}  
  </div>
  );
};

export default NavBar;
