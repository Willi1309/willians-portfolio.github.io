import React, {useRef} from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import emailjs from '@emailjs/browser'
import swal from 'sweetalert'
import './contact.css'

export default function Contact({contact_me, interested_text, interested_span, fullname, insert_message, submit_button}){
    const refForm = useRef()
    const submit = (event) =>{
        event.preventDefault()
        const service_ID = "service_ckw0qbi"
        const template_ID = "template_aj5qxls"
        const public_key = "fXnkpUesk7MBMsTEa"
        emailjs.sendForm(service_ID, template_ID, refForm.current, public_key)
            .then(res => swal('¡Enviado!', 'Mensaje enviado exitosamente', 'success'))
    }
    return(<>
        <div id="contact-box">
            <h1 className='contact-me'>{contact_me}</h1>
            <p className='interested-text'>{interested_text}<span>{interested_span}</span></p>
            <div className='contacts'>
                <div className='whatsapp'>
                    <a className="anchor-whatsapp" href='https://api.whatsapp.com/send?phone=584145707986&text=¡Hola!,%20estoy%20interesado%0en%20tus%20servicios'>
                        <FaWhatsapp className='whatsappIcon'/>
                        <p>Whatsapp</p>
                    </a>
                </div>
                <div className='mail'>
                    <BiLogoGmail className='gmailIcon'/>
                    <p>lartiguezwilians@gmail.com</p>
                </div>
            </div>
            <form action="" onSubmit={submit} ref={refForm} className='send-message'>
                <div className='info'>
                    <div className='name'>
                        <input name='fullname' required type='text' placeholder={fullname} className='input-name'/>
                    </div>
                    <div className='email'>
                        <input name='mail' required type='text' placeholder='E-mail'className='input-email'/>
                    </div>
                </div>
                <div className='message'>
                    <textarea name='msg' placeholder={insert_message} className='your-textarea'/>
                </div>
                <button type='submit' id='button-submit'>{submit_button}</button>
            </form>
        </div>
    </>)
}