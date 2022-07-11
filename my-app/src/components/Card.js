import React from 'react';
import location from '../assets/images/location.png'
import wedding from '../assets/images/wedding.jpeg'
export default function Card(props){
    console.log(props)
    return(
    <div className="card">
        <section className="card--section1">
            <img src={props.imageUrl} alt='location' className='card--image'/>
        </section>
        <section className="card--section2">
        <div className="card--location">
             <img src={location} alt="location" className='card--icon'/>
            <p className="card--country">{props.location}</p>
            <a href={props.googleMapsUrl} className="gray"> View on Google Maps</a>
        </div> 
        <div>
            <h2 className="card--city">{props.title}</h2>
            <h4 className="card--date">{props.startDAte} - {props.endDAte}</h4>
            <p className="card--description">{props.description}</p>

        </div>
        </section>    

    </div>
    )
}