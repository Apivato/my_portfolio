import React, {Component} from 'react';
import Navbar from '../component/Navbar';
import TimerImg from '../Assets/Timer.JPG';
import SpringImg from '../Assets/Springboot.JPG';


export default class Projects extends Component {
    render (){
        return (
            <div className='wrapper'>
                <Navbar/>
                <div className='body text-[#81CFE0] text-6xl py-10 pl-48'>
                    <div className='header font-bold'>
                        My projects
                        <hr className="my-8 mx-16 border-2 border-[#81CFE0]"></hr>
                    </div>
                    <div className='text-[#D2D7D3] grid grid-cols-2'>
                        <div className='mx-10 mb-5'>
                            <div className='text-3xl py-4'>
                                Count Down Timer web App
                            </div>
                            <a className='flex justify-center' href='https://timer-app-navy.vercel.app/'>
                                <img className="image align-middle h-80 w-96 rounded-3xl border-[#D2D7D375] border-8 drop-shadow-[0_20px_20px_rgba(0,0,0,20)]" src={TimerImg} alt="TimerAppImg" width="" height="" />
                            </a>
                        </div>
                        <div className='mx-10 mb-5'>
                            <div className='text-3xl py-4'>
                                SpringBoot Trading web App
                            </div>
                            <a className='flex justify-center' href='https://github.com/jarviscanada/jarvis_data_eng_AmosPivato'>
                                <img className="image align-middle h-80 w-96 rounded-3xl border-[#D2D7D375] border-8 drop-shadow-[0_20px_20px_rgba(0,0,0,20)]" src={SpringImg} alt="SpringbootImg" width="" height="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}; 