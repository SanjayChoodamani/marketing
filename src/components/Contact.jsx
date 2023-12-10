import '../styles/Contact.css'

export default function Contact(){
    return(
        <div className='contact-design' id='contact'>
            <div className='contact-person'>
                <h1>Let's Talk</h1>
                <div className='contact-card'>
                    <p>Manvith Techie</p>
                    <div className='num'>
                        <a href='tel:+916361034226'>+91 6361034226</a>          
                        <a href='mailto: manvith@malnadtechnicalclub.com'>manvith@malnadtechnicalclub.com</a>
                    </div>
                </div>
                <div className='contact-card'>
                    <p>Vidwath Techie</p>
                    <div className='num'>
                        <a href='tel:+917019347171'>+91 7019347171</a>
                        <a href='mailto: vidwath@malnadtechnicalclub.com'>vidwath@malnadtechnicalclub.com</a>
                    </div>
                </div>
                <div className='contact-card'>
                    <p>Mayura Techie</p>
                    <div className='num'>
                        <a href='tel:+918431121367'>+91 8431121367</a>          
                        <a href='mailto: mayura@malnadtechnicalclub.com'>mayura@malnadtechnicalclub.com</a>
                    </div>
                </div>
                <div className='contact-card'>
                    <p>Keerthi Techie</p>
                    <div className='num'>
                        <a href='tel:+918296292335'>+91 8296292335</a>          
                        <a href='mailto: keerthi@malnadtechnicalclub.com'>keerthi@malnadtechnicalclub.com</a>
                    </div>
                </div>
            </div>
            <div className='contact-social'>
            <div className='social'>
                <p>STAY IN TOUCH</p>
                <a href='https://www.instagram.com/malnad_technical_club/'>INSTAGRAM</a>
                <a href='https://www.facebook.com/FoundationsMTC'>FACEBOOK</a>
                <a href='https://twitter.com/MalnadTechClub/'>X - TWITTER </a>
                <a href='https://youtube.com/@themalnadtechnicalclub'>YOUTUBE</a>
            </div>
            <div className='copyright'>
                <p><i class="fa-regular fa-copyright"></i> Enigma'24</p>
                <p>Designed and Developed By The Malnad Technical Club 🚀.</p>
            </div>
            </div>
        </div>
    );
}