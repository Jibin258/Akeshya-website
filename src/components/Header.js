import React, { useEffect } from 'react';
import { Link } from 'react-scroll';

function Header({ activeSection }) {

    useEffect(() => {
        const onScroll = () => {
            const navbar = document.querySelector('#header');
            if (window.scrollY > 100) {
                navbar.classList.add('header-scrolled');
            } else {
                navbar.classList.remove('header-scrolled');
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleNavToggle = () => {
        const navbar = document.querySelector('#navbar');
        navbar.classList.toggle('navbar-mobile');
        document.querySelector('.mobile-nav-toggle').classList.toggle('bi-list');
        document.querySelector('.mobile-nav-toggle').classList.toggle('bi-x');
    };

    return (
        <header id="header" className="fixed-top d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">

                <div className="logo">
                    <h1><img src="https://akeshya.com/assets/img/logo.png" alt="" className="img-fluid" />AKESHYA</h1>
                </div>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li><Link className={activeSection === 'hero' ? 'nav-link scrollto active' : 'nav-link scrollto'} to="hero" type='button' offset={-70}>Home</Link></li>
                        <li><Link className={activeSection === 'about' ? 'nav-link scrollto active' : 'nav-link scrollto'} to='about' type='button' offset={-70}>About</Link></li>
                        <li><Link className={activeSection === 'services' ? 'nav-link scrollto active' : 'nav-link scrollto'} to="services" type='button' offset={-70}>Services</Link></li>
                        <li><Link className='getstarted scrollto text-decoration-none' to='contact' type='button' offset={-70}>Contact us</Link></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle" onClick={handleNavToggle}></i>
                </nav>
            </div>
        </header>
    );
}

export default Header;