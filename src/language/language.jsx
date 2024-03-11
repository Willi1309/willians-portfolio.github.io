import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'
import './language.css'

export default function Language(){
	const [lang, setLang] = useState("en")
	const {i18n} = useTranslation()
	const changeLanguage = () =>{
		if(lang==="en"){
			setLang("es")
    		i18n.changeLanguage(lang)
		}else{
			setLang("en")
    		i18n.changeLanguage(lang)
		}
  	}
	return(<>
		<span className='switch'>
			<input onClick={changeLanguage} type='checkbox' id='switcher'/>
			<label htmlFor='switcher'/>
		</span>	
	</>)
}