import Navbar from './navbar/navbar'
import Home from './home/home'
import Services from './services/services'
import Skills from './skills/skills'
import About from './about/about'
import Contact from './contact/contact'
import Language from './language/language.jsx'
import {useTranslation} from 'react-i18next'
import './App.css'

function App() {
  const {t} = useTranslation()   

  return (
    <>
      <Navbar 
        home={t("home")} 
        services={t("services")} 
        skills={t("skills")} 
        about={t("about")} 
        contact={t("contact")}
        language={<Language/>}
      />
      <Home
        greeting={t("greeting")}
        outstanding={t("outstanding")}
        me={t("me")}
        download={t("download")}
      />
      <Services
        services_title={t("services_title")}
        service1={t("service1")}
        service2={t("service2")}
        service3={t("service3")}
        text1={t("development")}
        text2={t("data_bases")}
        text3={t("design")}
      />
      <Skills
        my={t("my")}
        skills={t("skills_title")}
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
