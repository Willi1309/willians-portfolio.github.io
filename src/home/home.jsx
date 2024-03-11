import './home.css'
import Logo from './logo/logo.jsx'

export default function Home ({greeting, outstanding, me, download}){
    return(<>
        <section id="presentation">
            <div className='side1'>
                <h1 className='greeting'>{greeting}<span className='outstanding'>{outstanding}</span></h1>
                <p className="me">{me}</p>
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