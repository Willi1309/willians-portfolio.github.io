import Icons from './icons/icons.jsx' 
import { BiLogoHtml5, BiLogoCss3, BiLogoReact, BiLogoJquery } from 'react-icons/bi'
import { FaSass, FaBootstrap, FaNode, FaJava, FaAngular  } from "react-icons/fa";
import { SiExpress, SiSqlite, SiMysql, SiPostgresql, SiTypescript, SiCplusplus, SiSpringboot } from "react-icons/si";
import { IoLogoElectron } from "react-icons/io5";
import './skills.css'

export default function Skills ({my, skills}){
    return(<>
        <div id="skills">
            <div className='tittle-skills'>
                <h1>{my} <span>{skills}</span></h1>
            </div>
            <div className='technologies'>
                <div className='languages'>
                    <h2 className='technology-tittle'>Lenguajes</h2>
                    <div className='frontend-logos'>
                        <Icons logo={<SiTypescript/>} iconName={'Typescript'}/>
                        <Icons logo={<FaJava/>} iconName={'Java'}/>
                        <Icons logo={<SiCplusplus/>} iconName={'C++'}/>
                    </div>
                </div>
                <div className='frameworks'>
                    <h2 className='technology-tittle'>Frameworks</h2>
                    <div className='frontend-logos'>
                        <Icons logo={<IoLogoElectron/>} iconName={'Electron'} />
                        <Icons logo={<FaAngular/>} iconName={'Angular'}/>
                        <Icons logo={<SiSpringboot/>} iconName={'Spring Boot'}/>
                    </div>
                </div>
                <div className='frontend'>
                    <h2 className='technology-tittle'>Frontend</h2>
                    <div className='frontend-logos'>
                        <Icons logo={<BiLogoHtml5/>} iconName={'HTML'} />
                        <Icons logo={<BiLogoCss3/>} iconName={'CSS'}/>
                        <Icons logo={<BiLogoReact/>} iconName={'React'}/>
                    </div>
                </div>
                <div className='frontend'>
                    <h2 className='technology-tittle'>Backend</h2>
                    <div className='frontend-logos'>
                        <Icons logo={<SiExpress/>} iconName={'Express'}/>
                        <Icons logo={<FaNode/>} iconName={'Node.js'}/>
                        <Icons logo={<SiMysql />} iconName={'MySQL'}/>
                        <Icons logo={<SiSqlite/>} iconName={'SQLite'}/>
                        <Icons logo={<SiPostgresql/>} iconName={'PostgreSQL'}/>
                    </div>
                </div>
            </div>
        </div>
    </>)
}