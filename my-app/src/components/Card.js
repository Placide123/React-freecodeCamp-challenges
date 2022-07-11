import React from 'react';
import star from '../assets/images/star.png'
export default function Card(props){
    console.log(props)
    let badgeText 
    if(props.openSpots===0){
        badgeText = 'SOLD OUT'
    }else if(props.location ==="Online"){
        badgeText = "Online"
    }
    return(
    <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.coverImg} alt="katie" className='card--image'/>
            <div className="card--stats">
                <img src={star} alt="star" className='card--star'/>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p> {props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>

    </div>
    )
}