import { useState } from "react";
import './slider.css'

export default function Slider({slides}){
    const [currentIndex, setCurrentIndex] = useState(0)
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }
    const slideStyles = {
        backgroundImage: `url(${slides[currentIndex].url})`
    }
    return <>
        <div className="slider-container">
        {/* Flecha Izquierda */}
            <div className="left-arrow" onClick={goToPrevious}>
                ❮
            </div>

            {/* Flecha Derecha */}
            <div className="right-arrow" onClick={goToNext}>
                ❯
            </div>

            {/* Imagen Principal */}
            <div className="slide" style={slideStyles}></div>

            {/* Contenedor de Puntos (Dots) */}
            <div className="dots-container">
                {slides.map((slide, slideIndex) => (
                <div
                    key={slideIndex}
                    className={`dot ${slideIndex === currentIndex ? 'active-dot' : ''}`}
                    onClick={() => goToSlide(slideIndex)}
                >
                    ●
                </div>
                ))}
            </div>
        </div>
    </>
}