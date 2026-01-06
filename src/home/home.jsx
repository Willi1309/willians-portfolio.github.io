import './home.css'
import Logo from './logo/logo.jsx'

export default function Home ({greeting, outstanding, me, experience, download}){
    return(<>
        <section id="presentation">
            <div className='side1'>
                <h1 className='greeting'>{greeting}<span className='outstanding'>{outstanding}</span></h1>
                <p className="me">{me}</p>
                <p className="experience-home">{experience}</p>
                <a className="download" href="./CV.pdf" download>{download}</a>
            </div>
            <div className='side2'>
                <div className='logo'>
                    <Logo/>
                </div>
            </div>
        </section>
    </>)
}