import React, {useRef} from 'react'
import { PiList } from "react-icons/pi";
import { IoArrowBack } from 'react-icons/io5';
import './navbar.css'

export default function Navbar({home, services, skills, about, contact, language}){
	const checkRef = useRef(null)
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
	         <li><a href="#presentation" onClick={handleAnchor}>{home}</a></li>
	         <li><a href="#services" onClick={handleAnchor}>{services}</a></li>
	         <li><a href="#skills" onClick={handleAnchor}>{skills}</a></li>
	         <li><a href="#about" onClick={handleAnchor}>{about}</a></li>
	         <li><a href="#contact-box" onClick={handleAnchor}>{contact}</a></li>
	         <li><a>{language}</a></li>
	         <div className='line'></div>
	       </ul>
	    </nav>
	</>)
}