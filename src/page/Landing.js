import React, {Component} from 'react';
import Navbar from '../component/Navbar';


export default class Landing extends Component {
    render (){
        return (
            <div className=''>
                <Navbar/>
                <div className='title text-[#81CFE0] text-6xl py-9'>
                    Hi, my name is Amos Anthony Pivato
                </div>
            </div>
        );
    }

}; 