import { Component } from "react";
import { Route, Routes } from 'react-router-dom';

import Landing from './page/Landing.js';
import About from './page/About';
import Experience from './page/Experience';
import Projects from './page/Projects';
import Contact from './page/Contact';

export default class Router extends Component {
    render() {
        return (
            <Routes>
                <Route exact path="/" element={<Landing/>}/>
                <Route exact path="/landing" element={<Landing/>}/>
                <Route exact path ="/about" element={<About />} />
                <Route exact path ="/experience" element={<Experience />} />
                <Route exact path="/projects" element={<Projects />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
        );
    }
}