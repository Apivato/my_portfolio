import React, {Component} from 'react';
import Navbar from '../component/Navbar';
import tkdImg from '../Assets/TKDimg.jpg';


export default class About extends Component {
    render (){
        return (
            <div className='wrapper'>
                <Navbar/>
                <div className='body text-[#81CFE0] text-6xl py-10 pl-48'>
                    <div className='header font-bold'>
                        About me
                        <hr className="my-8 mx-16 border-2 border-[#81CFE0]"></hr>
                    </div>
                    <div className='paragraph text-2xl text-left text-[#D2D7D3] px-16'>
                        <p className='py-3'>
                            I'm a Software Developer specializing in Automation and AI  motivated to 
                            help in improving and innovating a sustainable way of life through the 
                            development of  new and creative applications.
                        </p>
                        <p className='py-3'>
                            My professional career started  through working in insurance automating reports and processing data.
                            I then decided to pursue this avenue further by studying AI and Machine learning to better expand my 
                            repertoire of tools to use on project I envisioned in my future.
                        </p>
                        <p className='py-3'>
                            Im a huge fan of the outdoors and enjoying the beauty it holds as I spend a lot of time hiking, snowboarding and camping throughout the year.
                            From all my adventure i've seen many beautiful views and made many friends from all over.
                        </p>
                        <div className='grid grid-flow-row-dense grid-cols-2'>
                            <p className='py-3'>
                                In my spare time I've invested a lot of time practicing Teakwondo and am now a licensed Black belt instructor 
                                where i volunteer my time to teach young ones how to grow their courtesy, integrity, patience, perseverance and 
                                indomitable spirit.  
                                This allows my students to become strong respectful and confident individuals that will be able to strive for their 
                                own successes just like I have.
                                <br></br>
                                <br></br>
                                In addition to teaching Martial Arts, I've also become a rock climbing instructor on the side.  
                                Rock climbing became a passion of mine during my time in university and i've since been training and 
                                qualified as an instructor at the Rock Oasis Inc. wher I guide adults young and old on proper climbing 
                                technique and safety procedures.
                            </p>
                            <div className='flex justify-center'>
                                <img className="image align-middle h-80 w-96 rounded-full border-[#D2D7D375] border-8 drop-shadow-[0_20px_20px_rgba(0,0,0,20)]" src={tkdImg} alt="tkdimg" width="" height="" />
                            </div>
                            
                        </div>
                       
                    </div>
                </div>
            </div>
        );
    }

};