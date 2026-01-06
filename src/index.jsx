import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ContextProvider } from '../globalContext/globalContext';
import { IoLogoElectron } from "react-icons/io5";
import { SiSqlite } from "react-icons/si";
import { BiLogoReact } from 'react-icons/bi'
import { initReactI18next } from 'react-i18next';
import asoovinos1 from './experience/png/asoovinos.png'
import asoovinos2 from './experience/png/asoovinos2.png'
import asoovinos3 from './experience/png/asoovinos3.png'
import asoovinos4 from './experience/png/asoovinos4.png'
import asoovinos5 from './experience/png/asoovinos5.png'
import asoovinos6 from './experience/png/asoovinos6.png'
import asoovinos7 from './experience/png/asoovinos7.png'
import asoovinos8 from './experience/png/asoovinos8.png'
import ReactDOM from 'react-dom/client';
import App from './App';
import Trabajos from './experience/trabajos/trabajos';
import i18next from 'i18next';
import Icons from './skills/icons/icons';

import es from './i18n/es/es.json';
import en from './i18n/en/en.json';

i18next.use(initReactI18next).init({
  lng: "es",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    es:{
      translation: es
    },
    en:{
      translation: en
    }
  }
});

function LogosAsoovinos (){
  return (
    <div className="asoovinos-tec-icons">
        <Icons logo={<IoLogoElectron/>} iconName={'Electron'} />
        <Icons logo={<BiLogoReact/>} iconName={'React'}/>
        <Icons logo={<SiSqlite/>} iconName={'SQLite'}/>
    </div>
  )
}
const img_src = [asoovinos1, asoovinos2, asoovinos3, asoovinos4, asoovinos5, asoovinos6, asoovinos7, asoovinos8]
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/experience/asoovinos',
    element: <Trabajos img_src={img_src} description_text='asoovinos' link='https://github.com/Willi1309/ASOOVINOS' logos={LogosAsoovinos()}/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>
);

