import React from 'react';
import reactLogo from '../images/react-2.svg';

export default function Navbar(){
    return(
        <nav>
            <img src={reactLogo} alt="react-logo" className='nav--icon' />
            <h3 className="nav--logo_test">ReactFacts</h3>
            <h4 className="nav--title">React Course -project 1</h4>
        </nav>
    )
}