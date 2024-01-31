import '../styles/Container.css'

export default function Container(props) {

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
            </div>

        </>


    );
}