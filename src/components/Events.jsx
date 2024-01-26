import '../styles/Events.css';
import Container from './Container';
import { eventData } from './data';

export default function Events() {
    return (
        <div className='event-design' id='events'>
            <div className='event-heading'>
                <div className='event-heading-text'>
                    <p>
                        [WHAT HAVE WE GOT?]
                    </p>
                    <h1>
                        Enigma brings a ton of engaging Events, Pronites and Workshops every year
                    </h1>
                </div>
                <i class="fa-solid fa-arrow-down"></i>
            </div>
            <div className='event-container'>
                {eventData.map((data) => {
                    return (
                        <Container content={{
                            imgURL: data.imgloc,
                            eventName: data.name,
                            eventType: data.type,
                            eventDesc: data.desciption
                        }} />
                    );

                })}

            </div>
        </div>
    );

}