import Icons from './icons/icons.jsx' 
import { BiLogoHtml5, BiLogoCss3, BiLogoReact, BiLogoVisualStudio  } from 'react-icons/bi'
import { FaNode, FaJava, FaAngular, FaPython, FaGitAlt, FaFigma, FaGithub  } from "react-icons/fa";
import { SiExpress, SiSqlite, SiMysql, SiPostgresql, SiTypescript, SiCplusplus, SiSpringboot, SiNextdotjs, SiAdobeillustrator } from "react-icons/si";
import { IoLogoElectron, IoLogoFirebase  } from "react-icons/io5";
import './skills.css'

export default function Skills ({my, skills, languages, tools}){
    return(<>
        <div id="skills">
            <div className='tittle-skills'>
                <h1>{my} <span>{skills}</span></h1>
            </div>
            <div className='technologies'>
                <div className='languages'>
                    <h2 className='technology-tittle'>{languages}</h2>
                    <div className='languages-logos'>
                        <Icons logo={<SiTypescript/>} iconName={'Typescript'}/>
                        <Icons logo={<FaJava/>} iconName={'Java'}/>
                        <Icons logo={<SiCplusplus/>} iconName={'C++'}/>
                        <Icons logo={<FaPython/>} iconName={'Python'}/>
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
                <div className='backend'>
                    <h2 className='technology-tittle'>Backend</h2>
                    <div className='backend-logos'>
                        <Icons logo={<SiExpress/>} iconName={'Express'}/>
                        <Icons logo={<FaNode/>} iconName={'Node.js'}/>
                        <Icons logo={<SiMysql />} iconName={'MySQL'}/>
                        <Icons logo={<SiSqlite/>} iconName={'SQLite'}/>
                        <Icons logo={<SiPostgresql/>} iconName={'PostgreSQL'}/>
                        <Icons logo={<IoLogoFirebase/>} iconName={'Firebase'}/>
                    </div>
                </div>
                <div className='frameworks'>
                    <h2 className='technology-tittle'>Frameworks</h2>
                    <div className='frameworks-logos'>
                        <Icons logo={<IoLogoElectron/>} iconName={'Electron'} />
                        <Icons logo={<SiNextdotjs />} iconName={'Next.js'}/>
                        {/*<Icons logo={<FaAngular/>} iconName={'Angular'}/>
                        <Icons logo={<SiSpringboot/>} iconName={'Spring Boot'}/>*/}
                    </div>
                </div>
                <div className='tools'>
                    <h2 className='technology-tittle'>{tools}</h2>
                    <div className='tools-logos'>
                        <Icons logo={<FaGitAlt/>} iconName={'Git'}/>
                        <Icons logo={<FaGithub/>} iconName={'Github'}/>
                        <Icons logo={<FaFigma />} iconName={'Figma'}/>
                        <Icons logo={<SiAdobeillustrator />} iconName={'Adobe Ilustrator'}/>
                    </div>
                </div>
            </div>
        </div>
    </>)
}