import React from 'react';
import { Link } from 'react-router-dom';

import navbar from './Navbar.module.css'



const Navbar = () => {
    return (
        <nav>

            <Link className={navbar.navLink} to="/profile">Profile</Link>
            <Link className={navbar.navLink} to="/dialogs">Dialogs</Link>

        </nav>
    );
}

export default Navbar;


