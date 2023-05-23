import React, { useContext } from "react";
import './Header.css'
import '../../DarkMode.css'
/* ReactScroll */
import { Link } from 'react-scroll';

/* React router */
import { NavLink } from 'react-router-dom';

/* Language */
import { FormattedMessage } from "react-intl";

const Header = () => {
    // Menu desplegable
    const menuDesplegable = () => {
        let navbar = document.querySelector('.navbar');
        navbar.classList.toggle("activar");

        window.onscroll = () => {
            if (window.scrollY > 0) {
                document.querySelector(".site-header").classList.add("activar")
            } else document.querySelector(".site-header").classList.remove("activar")

            navbar.classList.remove("activar")
        }
    }

    return (
        <header className="site-header">
            <div id="menu-btn" className="fas fa-bars" onClick={menuDesplegable}></div>

            <NavLink className="logo" to="/">
                <p>Yehjune Heo</p>
            </NavLink>


            <nav className="navbar">
                <Link to="inicio" offset={-150} href="#inicio">
                    <FormattedMessage
                        id='home'
                        defaultMessage='Home'
                    />
                </Link>
                <Link to="sobre-mi" offset={-150} href="#sobre-mi">
                    <FormattedMessage
                        id='about'
                        defaultMessage='About me'
                    />
                </Link>
                <Link to="servicios" offset={-150} href="#servicios">
                    <FormattedMessage
                        id='services'
                        defaultMessage='Experiences'
                    />
                </Link>
                <Link to="proyectos"offset={-150} href="#proyectos">
                    <FormattedMessage
                        id='projects'
                        defaultMessage='Projects'
                    />
                </Link>
                <Link to="contactos"  offset={-150} href="#contactos">
                    <FormattedMessage
                        id='contact'
                        defaultMessage='Contact'
                    />
                </Link>
            </nav>
        </header>
    )
}

export default React.memo(Header);