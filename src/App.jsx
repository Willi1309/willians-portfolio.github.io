import Navbar from './navbar/navbar'
import Home from './home/home'
import Services from './services/services'
import Skills from './skills/skills'
import About from './about/about'
import Contact from './contact/contact'
import Language from './language/language.jsx'
import Experience from './experience/experience.jsx'
import {useTranslation} from 'react-i18next'
import './App.css'

function App() {
  const {t} = useTranslation()   

  return (
    <>
      <Navbar 
        home={t("home")}
        experience_navbar={t("experience_navbar")} 
        services={t("services")} 
        skills={t("skills")} 
        about={t("about")} 
        contact={t("contact")}
        language={<Language/>}
        navigate_function={false}
      />
      <Home
        greeting={t("greeting")}
        outstanding={t("outstanding")}
        me={t("me")}
        experience={t("experience")}
        download={t("download")}
      />
      <Experience
        experience_title={t("experience_title")}
        see_more={t("see_more")}
        system={t("system")}
        app_desktop={t("app_desktop")}
      />
      <Services
        services_title={t("services_title")}
        service1={t("service1")}
        service2={t("service2")}
        service3={t("service3")}
        service4={t("service4")}
        text1={t("analysis")}
        text2={t("development")}
        text3={t("data_bases")}
        text4={t("design")}
      />
      <Skills
        my={t("my")}
        skills={t("skills_title")}
        languages={t("languages")}
        tools={t("tools")}
      />
      <About
        about_me={t("about_me")}
        my_description={t("my_description")}
        carrer={t("carrer")}
      />
      <Contact
        contact_me = {t("contact_me")}
        interested_text = {t("interested_text")}
        interested_span = {t("interested_span")}
        fullname = {t("fullname")}
        insert_message = {t("insert_message")}
        submit_button = {t("submit_button")}
      />
    </>
  )
}

export default App
