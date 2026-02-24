import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ContextProvider } from '../globalContext/globalContext';
import { IoLogoElectron } from "react-icons/io5";
import { SiSqlite } from "react-icons/si";
import { BiLogoReact } from 'react-icons/bi'
import { SiMysql, SiTypescript} from "react-icons/si";
import { initReactI18next } from 'react-i18next';
import asoovinos1 from './experience/png/asoovinos.png'
import asoovinos2 from './experience/png/asoovinos2.png'
import asoovinos3 from './experience/png/asoovinos3.png'
import asoovinos4 from './experience/png/asoovinos4.png'
import asoovinos5 from './experience/png/asoovinos5.png'
import asoovinos6 from './experience/png/asoovinos6.png'
import asoovinos7 from './experience/png/asoovinos7.png'
import asoovinos8 from './experience/png/asoovinos8.png'
import sistema_de_ventas1 from './experience/png/sistema_de_ventas1.png'
import sistema_de_ventas2 from './experience/png/sistema_de_ventas2.png'
import sistema_de_ventas3 from './experience/png/sistema_de_ventas3.png'
import sistema_de_ventas4 from './experience/png/sistema_de_ventas4.png'
import sistema_de_ventas5 from './experience/png/sistema_de_ventas5.png'
import sistema_de_ventas6 from './experience/png/sistema_de_ventas6.png'
import sistema_de_ventas8 from './experience/png/sistema_de_ventas8.png'
import sistema_de_ventas9 from './experience/png/sistema_de_ventas9.png'
import sistema_de_ventas10 from './experience/png/sistema_de_ventas10.png'
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

function LogosSistemaVentas (){
  return (
    <div className="asoovinos-tec-icons">
        <Icons logo={<SiTypescript/>} iconName={'TypeScript'}/>
        <Icons logo={<IoLogoElectron/>} iconName={'Electron'} />
        <Icons logo={<BiLogoReact/>} iconName={'React'}/>
        <Icons logo={<SiMysql/>} iconName={'MySQL'}/>
    </div>
  )
}

const img_src_asoovinos = [asoovinos1, asoovinos2, asoovinos3, asoovinos4, asoovinos5, asoovinos6, asoovinos7, asoovinos8]
const img_src_sv = [sistema_de_ventas1, sistema_de_ventas2, sistema_de_ventas3, sistema_de_ventas4, sistema_de_ventas5, sistema_de_ventas6, sistema_de_ventas8, sistema_de_ventas9, sistema_de_ventas10]

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/experience/asoovinos',
    element: <Trabajos img_src={img_src_asoovinos} description_text='asoovinos' link='https://github.com/Willi1309/ASOOVINOS' logos={LogosAsoovinos()}/>
  },
  {
    path: '/experience/sistema_de_ventas',
    element: <Trabajos img_src={img_src_sv} description_text='sistema_de_ventas' link='https://github.com/Willi1309/Sistema-de-Ventas' logos={LogosSistemaVentas()}/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>
);

