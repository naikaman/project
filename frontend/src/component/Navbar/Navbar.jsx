import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("home");

    const toggleMenu = () => {
        const nav = document.getElementById('nav');
        nav.classList.toggle('active');
    };

    return (
        <div className='navbar'>
            <Link to='/'>
                <img className='logo' src={assets.cake_icon} alt="logo" />
            </Link>

            <nav id="nav" className='nav'>
                
                <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""} href="#">Home</Link>
                <a onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""} href="#exploremenu">Menu</a>
                <a onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""} href="#footer">About</a>
                <a onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""} href="#footer">Contact</a>
            </nav>
            <div className='icons'>
                <div id="menu-btn" className='fas fa-bars' onClick={toggleMenu}></div>
                <div id="search-btn" className='fas fa-search'></div>
                <div id="wish-btn" className='fas fa-heart'></div>
                <a id="cart-btn" className='fas fa-shopping-cart' href='/cart'>
                    <div className='dot'></div>
                </a>
                <a onClick={()=>setShowLogin(true)} id="login-btn" className='fas fa-user' href="#"></a>
            </div>
            <div className='hamburger' onClick={toggleMenu}>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </div>
        </div>
    );
}

export default Navbar;
