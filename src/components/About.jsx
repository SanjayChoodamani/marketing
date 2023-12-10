import '../styles/About.css';
import { motion } from "framer-motion"

export default function About() {

    return (
        <section>
            <motion.div className='about' id='about'>
                <div className='about-heading'>
                    <h1>WHO ARE WE ?</h1>
                    <i class="fa-solid fa-arrow-down"></i>
                </div>
                <div className='about-info'>
                    <p>The Malnad Technical Club, which was established in 2009 to cope with
                        the rapid growth of technology, has emerged as one of the finest clubs in
                        the college, with a decade of seeding constructive ideas and encouraging
                        students to explore the boundless technology. </p><br />
                    <p>ENIGMA is a state-level technical fest which sets the scene for the students
                        to showcase their talent and create an environment where fun and innovation
                        go hand in hand. Finding solutions to real life problems, simplifying the living,
                        making the world a better place would articulate engineering.</p><br />
                    <button><a href='https://malnadtechnicalclub.com/'>Check Out <i class="fa-solid fa-arrow-up-right-from-square"></i></a></button>
                </div>
            </motion.div>
        </section>
    );
}