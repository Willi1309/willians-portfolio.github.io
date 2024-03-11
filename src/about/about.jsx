import './about.css'
import me from './me.png'
import { FaCode } from 'react-icons/fa6'

export default function About ({about_me, my_description, carrer}){
    return (<>
        <div id="about">
            <h1 className='about-me'>{about_me}</h1>
            <div className='me-box'>
                <div className='me-photo'>
                    <FaCode className='iconCode'/>
                    <img className='my-photo' src={me} alt='me'/>
                </div>
                <div className='me-text'>
                    <p className='my-description'>{my_description}</p>
                    <p className='my-carrer'>{carrer}</p>
                </div>
            </div>
        </div>
    </>)
}