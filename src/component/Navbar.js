import { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import MyLogo from '../Assets/logo1.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SVGComponentMyLogo from './MyLogo.js'

export default class Navbar extends Component {

    toggleSideBar() {
       document.getElementById('sidebar').classList.toggle("invisible"); 
    }
    

    render(){
        return (
            <div id='' className='sm: md: lg: xl: 2xl: page-navigation fixed flex flex-col flex-grow h-screen max-h-screen overflow-y-auto transition-all'>
                <button onClick={this.toggleSideBar} aria-expanded="true" aria-controls="sidebar" class="lg:hidden text-[#81CFE0] active:text-[#65abbb] cursor-pointer rounded">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                        </svg>
                        <svg class="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                </button>
                <nav id='sidebar' className="invisible lg:visible sm: md: lg: xl: 2xl: page-navigation fixed flex flex-col flex-grow h-screen max-h-screen overflow-y-auto bg-[#4D102B] text-[#D2D7D3]">
                    <NavLink to="/" className="page-navigation-header my-8 mx-3" >
                        <SVGComponentMyLogo className=""/>
                    </NavLink>
                    <NavLink to="/About" className="page-navigation-item">
                        ABOUT
                    </NavLink>
                    <NavLink to="/Experience" className="page-navigation-item my-14">
                        EXPERIENCE
                    </NavLink>
                    <NavLink to="/Projects" className="page-navigation-item">
                        PROJECTS
                    </NavLink>
                    <NavLink to="/Contact" className="page-navigation-item my-14">
                        CONTACT
                    </NavLink>
                    <a href="https://www.linkedin.com/in/amos-pivato-885b61185/" class="my-14 flex items-center justify-center">
                        <LinkedInIcon/>
                    </a>
                    <a href="https://github.com/Apivato" class=" flex items-center justify-center">
                        <GitHubIcon/>
                    </a>
                </nav>
            </div>
        );
    }
}