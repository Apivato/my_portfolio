import React, {Component} from 'react';
import Navbar from '../component/Navbar';


export default class Experience extends Component {
    render (){
        return (
            <div className='wrapper'>
                <Navbar/>
                <div className='body text-[#81CFE0] text-6xl py-10 pl-48'>
                    <div className='header font-bold'>
                        My experience
                        <hr className="my-8 mx-16 border-2 border-[#81CFE0]"></hr>
                    </div>
                    <div className='grid grid-flow-row-dense grid-cols-2'>
                        <div className='text-[#D2D7D3] mx-10 mb-5'>
                            <div className='text-3xl py-4 font-bold'>
                                Software Developer Consultant
                            </div>
                            <p className='text-2xl'>
                                Working for Jarvis Consulting Group at the National Bank of Canada allowed me to grow my technical skills and 
                                knowledge in the financial district.   
                                I’ve spent a lot of time collaborating with great minds, developing new micro-service tools for managing Data 
                                and helping improve the online user experience
                            </p>
                        </div> 
                        <div className='text-[#D2D7D3] mx-10 mb-5'>
                            <div className='text-3xl py-4 font-bold'>
                                Rock Climbing Instructor
                            </div>
                            <p className='text-2xl'>
                                My passion of sports and problem solving brought me the amazing opportunity to teach rock climbing and work with 
                                an amazing team at the Rock Oasis Inc.
                                There I provided customer service to many climbers and effectively helped them graduate to  proficient certified 
                                top rope climbers.
                            </p>
                        </div>
                        <div className='text-[#D2D7D3] mx-10 mb-5'>
                            <div className='text-3xl py-4 font-bold'>
                                Martial Arts Instructor
                            </div>
                            <p className='text-2xl'>
                                After 15 years training and teaching martial arts, I’ve seen growth in many shapes and forms in myself and in the others 
                                around me.  Having won many competitions and helped my students succeed i can attest to the importance of physical and 
                                mental training of any martial art.
                            </p>
                        </div>
                        <div className='text-[#D2D7D3] mx-10 mb-5'>
                            <div className='text-3xl py-4 font-bold'>
                                VBA Specialist
                            </div>
                            <p className='text-2xl'>
                                My time in Insurance has shown me a lot and taught great responsibility and time management skills through the deliver 
                                automated reports and data processing.
                            </p>
                        </div>
                        <div className='text-[#D2D7D3] mx-10 mb-5'>
                            <div className='text-3xl py-4 font-bold'>
                                Learn to skate Instructor
                            </div>
                            <p className='text-2xl'>
                                Teaching Ice skating with the city of Toronto had improved a lot of my team working and skating skills, while i also helped 
                                students get comfortable with the ice and get them to improve their current level of proficiency for future skating lessons.
                            </p>
                        </div>
                        <div className='text-[#D2D7D3] mx-10 mb-5'>
                            <div className='text-3xl py-4 font-bold'>
                                Kumon Teacher’s Assistant
                            </div>
                            <p className='text-2xl'>
                                With my time at Kumon, i was mentored and trained to provided a quality instructional experience to the children by helping 
                                them learn Math and English.  by the end, i had improved my teaching, discipline, customer service and comunication skills.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}; 