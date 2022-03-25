import React from "react";
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './navbarElements'

function Header() {
    return (
        <>
    <Nav>
        <NavLink to="/">
            <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to="/about">
                About
            </NavLink>
            <NavLink to="/services">
                Services
            </NavLink>
            <NavLink to="/contact-us">
                Contact Us
            </NavLink>
            <NavLink to="/sign-up">
                Sign Up
            </NavLink>
        </NavMenu>
        <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
    </Nav>
</>
);
}

export default Header;
