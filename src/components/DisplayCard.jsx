import React from 'react';
import '../styles/DisplayCard.css'

export default function DisplayCard(props) {
    return (props.trigger) ? (
        <div className='card'>
            <div className='inner-card'>
                <button onClick={() => props.setTrigger(false)} >
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <img src={props.desc.img} alt={props.desc.name} />
                <div className='desc'>
                <p className='desc-p1'>{props.desc.type}</p>
                <h2>{props.desc.name}</h2>
                <p className='desc-p2'>{props.desc.desc}</p>
                </div>
                
            </div>
        </div>
    ) : "";
}