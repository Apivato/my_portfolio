import React, {Component} from 'react';
import Navbar from '../component/Navbar';
import { withRouter } from '../WithRouter';

export default withRouter(class Contact extends Component {
    render (){
        return (
            <div className='bg-black'>
                <Navbar/>
            </div>
        );
    }

}); 