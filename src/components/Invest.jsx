import '../styles/Invest.css'
import Img1 from '../assets/images/reel.svg'
import Img2 from '../assets/images/invest2.svg'

export default function Invest(){
    return(
        <div className='invest-design'>
            <div className='invest-text'>
            <p>[SPONSOR US]</p>
            <h1>Here’s why you <br/>should invest in Enigma</h1>
            </div>
            <div className='invest-card' id='card-1'>
                <img src={Img1} alt='media-button'/>
                <h2>Active presence in media</h2>
                <p>Provision for maximum publicity through all the social media platforms, having a reach of over 5K</p>
            </div>
            <div className='invest-card' id='card-2'>
                <img src={Img2} alt='media-button'/>
                <h2>Targeted marketing <br/>& lead generation</h2>
                <p>Opportunity to engage among a targeted audience and sets a nice backdrop for building deeper, meaningful connections with people.</p>
            </div>
        </div>
    );

}