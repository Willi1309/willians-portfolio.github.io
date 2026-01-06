import React, {useState} from 'react'
import { useGlobalContext } from '../../globalContext/globalContext'
import './language.css'

export default function Language(){
	const {changeLanguage, lang} = useGlobalContext()

	return(<>
		<span className='switch'>
			<input onChange={changeLanguage} checked={lang === 'en'} type='checkbox' id='switcher'/>
			<label htmlFor='switcher'/>
		</span>
	</>)
}
