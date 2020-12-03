import React, { Component } from 'react';
// import { navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
// import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (

        <nav className="navbar navbar-expand-lg navbar-inverse fixed-top" id="mainNav">
        <div className="container"><Link className="navbar-brand js-scroll-trigger" to="/">Isatou D Sanyang</Link>
            <button className="navbar-toggler navbar-toggler-right font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu <i className="fas fa-bars"></i></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/portfolio" >PORTFOLIO</Link>
                    </li>
                    <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="about">ABOUT</Link>
                    </li>
                    <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="contact">CONTACT</Link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
        );
    }
}
    export default Header;