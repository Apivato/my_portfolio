import { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    render(){
        return (
            <nav className="page-navigation">
                <NavLink to="/" className="page-navigation-header">
                    {/* <></> logo geos here */}
                    LOGO
                </NavLink>
                <NavLink to="/About" className="page-navigation-item">
                    ABOUT
                </NavLink>
                <NavLink to="/Experience" className="page-navigation-item">
                    EXPERIENCE
                </NavLink>
                <NavLink to="/Projects" className="page-navigation-item">
                    PROJECTS
                </NavLink>
                <NavLink to="/Contact" className="page-navigation-item">
                    CONTACT
                </NavLink>
            </nav>
        );
    }
}