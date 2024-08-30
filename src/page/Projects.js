import React, {Component} from 'react';
import Navbar from '../component/Navbar';


export default class Projects extends Component {
    render (){
        return (
            <div className='Page-Body'>
                <Navbar/>
                <div className='title text-[#81CFE0] text-6xl py-10 pl-48'>
                    My projets
                    <hr className="my-8 mx-16 border-2 border-[#81CFE0]"></hr>
                </div>
            </div>
        );
    }

}; 