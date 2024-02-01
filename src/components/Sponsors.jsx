import '../styles/Sponsors.css'
import glA from '../assets/images/sponsors/glAcharya.png'
import Godrej from '../assets/images/sponsors/Godrej.png'
import homes from '../assets/images/sponsors/homes.jpg'
import max from '../assets/images/sponsors/max.png'
import pulse from '../assets/images/sponsors/pulselogo.png'
import royal from '../assets/images/sponsors/royalEnf.png'
import stock from '../assets/images/sponsors/stockgro.png'
import sunrise from '../assets/images/sponsors/sunrise.png'
import tcs from '../assets/images/sponsors/tcs.png'
import yok from '../assets/images/sponsors/Yokohama.png'

export default function Sopnsors(){
    return(
        <div className='spons' id="sponsors">
            <div className='spons-heading'>
                <h1>Previous Sponsors</h1>
                <i className="fa-solid fa-arrow-down"></i>
            </div>
            <div className='spons-list'>
                <img src={tcs} alt="spons-img"/>
                <img src={glA} alt="spons-img"/>
                <img src={Godrej} alt="spons-img"/>
                <img src={pulse} alt="spons-img"/>
                <img src={max} alt="spons-img"/>
                <img src={yok} alt="spons-img"/>
                <img src={homes} alt="spons-img"/>
                <img src={royal} alt="spons-img"/>
                <img src={sunrise} alt="spons-img"/>
                <img src={stock} alt="spons-img"/>
            </div>
        </div>
    );

}