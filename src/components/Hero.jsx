import Button from './Button';
import '../styles/Hero.css';
import { motion } from "framer-motion"
import { HashLink as Link } from 'react-router-hash-link';
// import Brochure from '/docs/Brochure.pdf'


function Hero() {
    const text = "A GUIDE TO WHY ENIGMA IS A GREAT MARKETING OPPORTUINITY".split(
      " "
    );
    return (
      <motion.section>
        <motion.div className="Hero-design" id="home">
          <div className="Hero-content">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1 } }}
            >
              The Malnad Technical Club Presents
            </motion.h3>
            <motion.h1
              initial={{
                scale: 1.5,
                y: 5,
              }}
              animate={{
                scale: 1,
                y: 0,
                transition: {
                  duration: 0.1,
                  type: "tween",
                  ease: "linear",
                  stiffness: 50,
                },
              }}
              whileInView="visible"
              viewport={{ once: true }}
            >
              ENIGMA'24
            </motion.h1>
            <p>
              {text.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: i / 10,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
            </p>
  
            <div className="btn-layout">
              <a href={''} download="Example-PDF-document" target="_blank">
                Brochure
              </a>
              <Link to="#contact" smooth>
                Let's Talk
              </Link>
            </div>
          </div>
          <img
            src="/src/assets/images/bg.svg"
            className="bg-circle"
            alt="circle"
          />
          <div className="imageParent">
            <motion.div
              initial={{
                scale: 1.5,
                y: -10,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                y: 0,
                x: 0,
                opacity: 0.9,
                transition: {
                  delay: 0.2,
                  duration: 1,
                },
              }}
              className="droneParent"
            >
              <img src="./images/drone.png" className="drone" alt="drone" />
            </motion.div>
            <motion.div
              initial={{
                scale: 1.5,
                y: -10,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                y: 0,
                opacity: 0.9,
                transition: {
                  delay: 0.2,
                  duration: 1,
                },
              }}
              className="robotParent"
            >
              <img src="./images/robot.png" className="robot" alt="robot" />
            </motion.div>
          </div>
        </motion.div>
      </motion.section>
    );
  }

export default Hero;

