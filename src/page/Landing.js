import React, {Component} from 'react';
import Navbar from '../component/Navbar';
import LandingImg from '../Assets/LandingImg2.jpg';


export default class Landing extends Component {
    render (){
        return (
            <div className='wrapper'>
                <Navbar/>
                <div className='body text-[#81CFE0] text-6xl py-10 pl-48'>
                    <div className='header'>
                        Hi, my name is Amos Anthony Pivato
                        <hr className="my-8 mx-16 border-2 border-[#81CFE0]"></hr>
                    </div>
                    <div className='content my-32 mx-96 flex justify-center items-center'>
                        <img className="imgage h-96 w-96 rounded-full border-[#D2D7D375] border-8 drop-shadow-[0_20px_20px_rgba(0,0,0,20)]" src={LandingImg} alt="LandingImg" width="145" height="56" />
                    </div>
                    <div className='subtitle text-2xl text-[#D2D7D3] px-40'>
                        Creative Software Developer with many years of experience designing, collaborating and implementing ideas.  
                    </div>
                </div>
            </div>
        );
    }

};  