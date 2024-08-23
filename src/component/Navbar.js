import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import MyLogo from '../Assets/logo1.png';

export default class Navbar extends Component {
    render(){
        return (
            <nav className="page-navigation fixed z-20 flex flex-col flex-grow h-screen max-h-screen overflow-y-auto bg-[#4D102B] text-[#D2D7D3]">
                <NavLink to="/" className="page-navigation-header my-9 mx-7" >
                    <img className="" src={MyLogo} alt="Logo" width="145" height="56" />
                </NavLink>
                <NavLink to="/About" className="page-navigation-item my-14">
                    ABOUT
                </NavLink>
                <NavLink to="/Experience" className="page-navigation-item ">
                    EXPERIENCE
                </NavLink>
                <NavLink to="/Projects" className="page-navigation-item my-14">
                    PROJECTS
                </NavLink>
                <NavLink to="/Contact" className="page-navigation-item">
                    CONTACT
                </NavLink>
            </nav>
        );
    }
}