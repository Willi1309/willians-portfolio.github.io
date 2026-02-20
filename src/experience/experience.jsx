import Cards_Experience from './cards/cards'
import Asoovinos from './png/asoovinos.png'
import Sistemadeventas from './png/sistema_de_ventas2.png'
import {useTranslation} from 'react-i18next'
import './experience.css'

export default function Experience({experience_title}){
    const {t} = useTranslation()   

    return (<>
        <div id="experience">
            <h1 className="experience-title">{experience_title}</h1>
            <div className='cards-experience'>
                <Cards_Experience img_src={Asoovinos} icon_text={t("see_more")} titulo={t("system_asoovinos")} subtitulo={t("app_desktop")} navigate_text={'/experience/asoovinos'}/>
                <Cards_Experience img_src={Sistemadeventas} icon_text={t("see_more")} titulo={t("system_sv")} subtitulo={t("app_desktop")} navigate_text={'/experience/sistema_de_ventas'}/>
            </div>
        </div>
    </>)
}