import Card from './cards/cards.jsx';
import { BsPencilSquare } from "react-icons/bs";
import { FaDatabase } from "react-icons/fa6";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { TbReportSearch } from "react-icons/tb";
import './services.css';

export default function Services ({services_title, service1, service2, service3, service4, text1, text2, text3, text4}){

    return(<>
        <div id='services'>
            <h1 className='services-tittle'>{services_title}</h1>
            <div className='cards'>
                <Card card={'card1'} serviceIcon={<TbReportSearch/>} service={service1} serviceText={text1}/>
                <Card card={'card2'} serviceIcon={<TbDeviceDesktopCode/>} service={service2} serviceText={text2}/>
                <Card card={'card3'} serviceIcon={<FaDatabase/>} service={service3} serviceText={text3}/>
                <Card card={'card4'} serviceIcon={<BsPencilSquare/>} service={service4} serviceText={text4}/>
            </div>
        </div>
    </>)
}