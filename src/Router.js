import { Component } from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Landing from './page/Landing.js';
import About from './page/About';
import Experience from './page/Experience';
import Projects from './page/Projects';
import Contact from './page/Contact';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path="/">
                        <Navigate to="/landing" />
                    </Route>
                    <Route exact path="/landing">
                        <Landing />
                    </Route>
                    <Route exact path ="/about">
                        <About />
                    </Route>
                    <Route exact path ="/experience">
                        <Experience />
                    </Route>
                    <Route exact path="/projects">
                        <Projects />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    }
}