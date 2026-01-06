import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useTranslation } from 'react-i18next'
import { PiList } from "react-icons/pi";
import { IoArrowBack } from 'react-icons/io5';
import Language from "../../language/language";
import Slider from "./slider/slider";
import './trabajos.css'

export default function Trabajos({img_src, description_text, link, logos}){
    const {t} = useTranslation()
    const checkRef = useRef(null)
	const navigate = useNavigate()

	const handleAnchor = () =>{
		checkRef.current.checked = false
	}

    const slides = img_src.map((img, index)=>{
        return { url: img, title: `ASOOVINOS ${index+1}`}
    })

    return <>
        <nav id="navbar">
           <input type='checkbox' id='check' ref={checkRef}/>
           <label htmlFor='check' className='button-check'>
            <PiList className='list-icon'/>
           </label>
           <ul className='list'>
             <label htmlFor='check' className='button-check-list'>
                <IoArrowBack className='list-icon'/>
             </label>
             <li><a href="#presentation" onClick={() => { navigate('/#presentation') ; handleAnchor }}>{t("home")}</a></li>
             <li><a><Language/></a></li>
             <div className='line'></div>
           </ul>
        </nav>
        <div className="asoovinos-box">
            <div className="slider-container-wrapper">
                <Slider slides={slides} />
            </div>
            <div className="asoovinos-box2">
                <h1>{t("experiece_description")}</h1>
                <p>{t(`experience_description_text_${description_text}`)}</p>
                <p>{t("see")}<a href={link} className="codigo_fuente" target="_blank">{t("source_code")}</a></p>
            </div>
            <div className="asoovinos-box3">
                <h1>{t("use_tec")}</h1>
                {logos}
            </div>
        </div>
    </>
}