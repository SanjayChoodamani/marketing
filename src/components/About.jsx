import '../styles/About.css';
import { motion } from "framer-motion";

export default function About() {
    return (
        <section>
            <motion.div className='about' id='about'>
                <div className='about-heading'>
                    <h1>WHO ARE WE ?</h1>
                    <i class="fa-solid fa-arrow-down"></i>
                </div>
                <div className='about-info'>
                    <p>The Malnad Technical Club has been a pioneering hub for technological exploration. Established to cope with the rapid growth of technology, we stand as a beacon of excellence in the technological landscape. The legacy of 14 years not just represents the passage of time but a celebration of the profound impact, the club has made.</p><br />
                    <p>Enigma, our flagship event, has been a testament to this legacy – from its humble beginnings as an inter-college tech fest to blossoming into a National-Level extravaganza with cutting-edge events. Lighting up the path for students to unleash latest innovations, Enigma is one such torch fostering innovation and excellence. Join us at Enigma, where The Malnad Technical Club unfolds a tapestry of creativity and achievement of young minds in diverse technological realms.</p><br />
                    <button><a href='https://malnadtechnicalclub.com/'>Check Out <i class="fa-solid fa-arrow-up-right-from-square"></i></a></button>
                </div>
            </motion.div>
        </section>
    );
}