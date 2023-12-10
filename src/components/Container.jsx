import { useState } from 'react';
import '../styles/Container.css'
import DisplayCard from './DisplayCard';

export default function Container(props) {

    const [buttonClick, setButtonClick] = useState(false);
    let image = props.content.imgURL
    let eventName = props.content.eventName
    let eventType = props.content.eventType
    let eventDesc = props.content.eventDesc

    return (
        <>
            <div className='container-design'>
                <img src={image} alt={eventName} />
                <p className='event-type'>{eventType}</p>
                <h2>{eventName}</h2>
                <p className='event-desc'>{eventDesc}</p>
                <button onClick={() => setButtonClick(true)}>
                    Learn More
                </button>
            </div>
            <DisplayCard trigger={buttonClick} setTrigger={setButtonClick} desc= {{
                  img :image,
                  name :eventName,
                  type: eventType,
                  desc: eventDesc
            }}/>
        </>


    );
}