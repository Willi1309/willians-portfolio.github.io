import React, { useState} from 'react'
import Card from './cards/cards.jsx';
import { BsPencilSquare } from "react-icons/bs";
import { FaDatabase } from "react-icons/fa6";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import './services.css';

export default function Services ({services_title, service1, service2, service3, text1, text2, text3}){

    return(<>
        <div id='services'>
            <h1 className='services-tittle'>{services_title}</h1>
            <div className='cards'>
                <Card card={'card1'} serviceIcon={<TbDeviceDesktopCode/>} service={service1} serviceText={text1}/>
                <Card card={'card2'} serviceIcon={<FaDatabase/>} service={service2} serviceText={text2}/>
                <Card card={'card3'} serviceIcon={<BsPencilSquare/>} service={service3} serviceText={text3}/>
            </div>
        </div>
    </>)
}