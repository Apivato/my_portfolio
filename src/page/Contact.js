import React, {Component} from 'react';
import Navbar from '../component/Navbar';


export default class Contact extends Component {
    render (){
        return (
            <div className='wrapper'>
                <Navbar/>
                <div className='body text-[#81CFE0] text-6xl py-10 pl-48'>
                    <div className='header font-bold'>
                        Contact me
                        <hr className="my-8 mx-16 border-2 border-[#81CFE0]"></hr>
                    </div>
                    <div className='text-black text-2xl'>
                        <div className='mx-60'>
                            <input className="my-5 shadow appearance-none border rounded w-full leading-tight focus:outline-none focus:shadow-outline" id="Email" type="text" placeholder="Email"></input>
                            <textarea className='my-5 shadow appearance-none border rounded w-full leading-tight focus:outline-none focus:shadow-outline' rows="10" id="text" placeholder="What can I help you with?"></textarea>
                            <button className='my-5 bg-[#81CFE0] hover:bg-[#539fb0] text-[#D2D7D3] font-bold py-2 px-4 rounded-full' >
                                Send
                            </button>
                        </div>
                    </div>
                    <p className='my-10 '>
                            Thanks for Reaching out
                    </p>
                </div>
            </div>
        );
    }

}; 