import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineHome} from 'react-icons/ai'
import './Navbar.css'
const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link>Home </Link></li>
                <li><Link>New Movie</Link></li>
                <li><Link>About</Link></li>
                <li><Link>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;