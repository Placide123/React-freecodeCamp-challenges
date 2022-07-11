import React from 'react';
import earth from '../assets/images/earth.png';

export default function NavBar(){
    return(
        
            <nav>
                <img src={earth} alt="earth" className='nav--logo'/>
                <p className="nav--text">my travel journal.</p>
            </nav>
    )
}