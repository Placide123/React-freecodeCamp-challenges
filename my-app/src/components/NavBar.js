import React from 'react';
import airbnb from '../assets/images/airbnb.svg';

export default function NavBar(){
    return(
        
            <nav>
                <img src={airbnb} alt="airbnb" className='nav--logo'/>
            </nav>
    )
}