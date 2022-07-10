import React from 'react';
import umwana from './../assets/images/umwana.jpg'
import email from '../assets/images/icons8-mail-30.png'

const  Information = () => {
return (
    <div>
        <img src={umwana} alt="owner" className='info-image'/>
        <h1 className="info-name">TWIRINGIYIMANA PLACIDE</h1>
        <h5 className="info-position">Frontend Developer</h5>
        <h6 className="info-lev">placidetwiringiyimana.website</h6>
       <button className="btn"><img src={email} alt="email"/>Email</button> 
        
    </div>
)
}
export default Information