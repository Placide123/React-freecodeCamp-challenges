import React from 'react'
import github from '../assets/images/GitHub Icon.png'
import linkedin from '../assets/images/Linkedin Icon.png'
import instagram from '../assets/images/Instagram Icon.png'
import facebook from '../assets/images/Facebook Icon.png'
import twitter from '../assets/images/Twitter Icon.png'

export default function Footer(){
    return(
        <div className="footer">
        <img src={github} alt="github" className="ft-image"></img>
        <img src={linkedin} alt="linkedin" className="ft-image"></img>
        <img src={instagram} alt="instagram" className="ft-image"></img>
        <img src={facebook} alt="facebook" className="ft-image"></img>
        <img src={twitter} alt="twitter" className="ft-image"></img>
        </div>
    )
}