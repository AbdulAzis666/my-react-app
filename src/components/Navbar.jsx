import React from 'react';
import logoImage from '../assets/logo.png'; // Import gambar logo
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logoImage} alt="Logo" className="logo" />
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/locations">Locations</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;