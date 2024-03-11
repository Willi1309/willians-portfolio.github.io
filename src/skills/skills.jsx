import Icons from './icons/icons.jsx' 
import { BiLogoHtml5, BiLogoCss3, BiLogoReact, BiLogoJquery, BiLogoJavascript, BiLogoMongodb } from 'react-icons/bi'
import { FaSass, FaBootstrap, FaNode } from "react-icons/fa";
import { SiExpress, SiSqlite } from "react-icons/si";
import './skills.css'

export default function Skills ({my, skills}){
    return(<>
        <div id="skills">
            <div className='tittle-skills'>
                <h1>{my} <span>{skills}</span></h1>
            </div>
            <div className='technologies'>
                <div className='frontend'>
                    <h2 className='technology-tittle'>Frontend</h2>
                    <div className='frontend-logos'>
                        <Icons logo={<BiLogoHtml5/>} iconName={'HTML'} />
                        <Icons logo={<BiLogoCss3/>} iconName={'CSS'}/>
                        <Icons logo={<BiLogoReact/>} iconName={'React'}/>
                        <Icons logo={<BiLogoJquery/>} iconName={'jQuery'}/>
                        <Icons logo={<FaSass/>} iconName={'Sass'}/>
                        <Icons logo={<FaBootstrap/>} iconName={'Bootstrap'}/>
                    </div>
                </div>
                <div className='backend'>
                    <h2 className='technology-tittle'>Backend</h2>
                    <div className='backend-logos'>
                        <Icons logo={<BiLogoJavascript/>} iconName={'Javascript'}/>
                        <Icons logo={<SiExpress/>} iconName={'Express'}/>
                        <Icons logo={<FaNode/>} iconName={'Node.js'}/>
                        <Icons logo={<BiLogoMongodb/>} iconName={'MongoDB'}/>
                        <Icons logo={<SiSqlite/>} iconName={'SQLite'}/>
                    </div>
                </div>
            </div>
        </div>
    </>)
}