import {useRef} from 'react'
import { PiList } from "react-icons/pi";
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom'
import './navbar.css'

export default function Navbar({home, experience_navbar, services, skills, about, contact, language, navigate_function}){
	const checkRef = useRef(null)
	const navigate = useNavigate()
	const handleAnchor = () =>{
		checkRef.current.checked = false
	}
	return (<>
	    <nav id="navbar">
	       <input type='checkbox' id='check' ref={checkRef}/>
	       <label htmlFor='check' className='button-check'>
	       	<PiList className='list-icon'/>
	       </label>
	       <ul className='list'>
	       	 <label htmlFor='check' className='button-check-list'>
	       		<IoArrowBack className='list-icon'/>
	       	 </label>
	         <li><a href="#presentation" onClick={() => { navigate_function ? navigate('/#presentation') : handleAnchor}}>{home}</a></li>
			 <li><a href="#experience" onClick={() => { navigate_function ? navigate('/#experience') : handleAnchor}}>{experience_navbar}</a></li>
	         <li><a href="#services" onClick={() => { navigate_function ? navigate('/#services') : handleAnchor}}>{services}</a></li>
	         <li><a href="#skills" onClick={() => { navigate_function ? navigate('/#skills') : null ; handleAnchor}}>{skills}</a></li>
	         <li><a href="#about" onClick={() => { navigate_function ? navigate('/#about') : null ; handleAnchor}}>{about}</a></li>
	         <li><a href="#contact-box" onClick={() => { navigate_function ? navigate('/#contact-box') : null ; handleAnchor}}>{contact}</a></li>
	         <li><a>{language}</a></li>
	         <div className='line'></div>
	       </ul>
	    </nav>
	</>)
}