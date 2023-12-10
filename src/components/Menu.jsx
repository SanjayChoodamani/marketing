import "../styles/Menu.css";
import { useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';


export default function Menu() {

    const [toggle, setToggle] = useState(false);
    const handleToggleChange = () => {
        setToggle(!toggle);

    };
    if (toggle) {
        return (
            <div className="menu-open" >
                <div className="menu-list" onClick={handleToggleChange}>
                    <div className="menu">
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                    <ul>
                        <Link to='#home' smooth><li>HOME</li></Link>
                        <Link to='#about' smooth><li>ABOUT</li></Link>
                        <Link to='#events' smooth><li>EVENTS</li></Link>
                        <Link to='#sponsors' smooth><li>SPONSORS</li></Link>
                        <Link to='#gallery' smooth><li>GALLERY</li></Link>
                        <Link to='#contact' smooth><li>CONTACT</li></Link>
                    </ul>
                </div>
            </div>
        );
    } else {
        return (
            <div className="menu" onClick={handleToggleChange}>
                <i className="fa-solid fa-plus"></i>
            </div>
        );
    }
}
