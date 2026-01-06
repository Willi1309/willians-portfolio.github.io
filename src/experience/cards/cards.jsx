import { useNavigate } from 'react-router-dom'
import './cards.css'

export default function Cards_Experience({img_src, icon_text, titulo, subtitulo, navigate_text}){
    const navigate = useNavigate()
    return <>
        <div className="card-container">
            {/* 1. La capa de la imagen de fondo */}
            <div className="card-background-image" style={{ backgroundImage: `url(${img_src})` }}></div>
            {/* 2. La capa de contenido superpuesto (overlay) */}
            <div className="card-overlay">
                {/* Parte superior: El botón/insignia */}
                <div className="top-icon" onClick={()=>navigate(`${navigate_text}`)}>
                    {icon_text}
                </div>
                {/* Parte inferior: Título y subtítulo */}
                <div className="bottom-text-container">
                    <h3 className="card-titulo">{titulo}</h3>
                    <p className="card-subtitulo">{subtitulo}</p>
                </div>
            </div>
            </div>
    </>
}