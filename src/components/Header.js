import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from 'hamburger-react';

import logo2 from '../assets/Logo-02.png';
import uk from '../assets/uk.png';


export const Header = () => {
    const [isOpen, setOpen] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const onClick = () => {
        setShowResults(false);
        setOpen();
    }


    return (
        <header>
            <div></div>
            <table>
                <tbody>
                    <tr>
                        <td className="color1"></td>
                        <td className="color2"></td>
                        <td className="color3"></td>
                    </tr>
                </tbody>
            </table>
            
            <img src={logo2} alt="Main Logo" className="header-logo" />

            <div className="burger">
                
                <Hamburger toggled={isOpen} toggle={setOpen} color="#236c9e" rounded onToggle={toggled => {
                    if (toggled) {
                        setShowResults(true);
                    } else {
                        setShowResults(false);
                    }
                }} />
            </div>

            <ul className="menu">
                <NavLink to="/" className="menu-links">Home</NavLink>
                <NavLink to="/courses" className="menu-links">Courses</NavLink>
                <NavLink to="/gallery" className="menu-links">Gallery</NavLink>
                <NavLink to="/aboutus" className="menu-links">About Us</NavLink>
                <NavLink to="/extracurricular" className="menu-links"><span>Extra Curricular Camps &#38; Tours</span></NavLink>
                <NavLink to="/contact" className="menu-links">Contact</NavLink>
            </ul>

            <img src={uk} alt="UK flag" className="uk-flag" />


            { showResults ? 
                <ul className="menu-burger">
                    <NavLink to="/" className="menu-links" onClick={onClick}>Home</NavLink>
                    <NavLink to="/courses" className="menu-links" onClick={onClick}>Courses</NavLink>
                    <NavLink to="/gallery" className="menu-links" onClick={onClick}>Gallery</NavLink>
                    <NavLink to="/aboutus" className="menu-links" onClick={onClick}>About Us</NavLink>
                    <NavLink to="/extracurricular" className="menu-links" onClick={onClick}><span>Extra Curricular Camps &#38; Tours</span></NavLink>
                    <NavLink to="/contact" className="menu-links" onClick={onClick}>Contact</NavLink>
                </ul> 
            : null }
        </header>
    )
    
}

