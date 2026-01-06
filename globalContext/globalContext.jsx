import { createContext, useContext, useState } from "react";
import {useTranslation} from 'react-i18next'

export const GlobalContext = createContext(null)

export function ContextProvider({ children }){
    const [lang, setLang] = useState("es")
    const {i18n} = useTranslation()
    const changeLanguage = () =>{
        const newLang = lang === "en" ? "es" : "en";
        setLang(newLang);
        i18n.changeLanguage(newLang);
  	}
    const values = {changeLanguage, lang}
    return <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
}

export function useGlobalContext(){
    return useContext(GlobalContext)
}