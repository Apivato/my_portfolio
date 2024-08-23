import React, {Component} from 'react';
import Navbar from '../component/Navbar';


export default class About extends Component {
    render (){
        return (
            <div className=''>
                <Navbar/>
                <div className='title text-[#81CFE0] text-6xl py-9'>
                    About Me
                </div>
            </div>
        );
    }

}; 