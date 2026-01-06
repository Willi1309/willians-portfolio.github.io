import Cards_Experience from './cards/cards'
import Asoovinos from './png/asoovinos.png'
import './experience.css'

export default function Experience({experience_title, see_more, system, app_desktop}){
    
    return (<>
        <div id="experience">
            <h1 className="experience-title">{experience_title}</h1>
            <div className='cards-experience'>
                <Cards_Experience img_src={Asoovinos} icon_text={see_more} titulo={system} subtitulo={app_desktop} navigate_text={'/experience/asoovinos'}/>
            </div>
        </div>
    </>)
}