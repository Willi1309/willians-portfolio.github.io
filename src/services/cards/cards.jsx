import './cards.css'

export default function Card ({card, serviceIcon, service, serviceText}){
    return (<>
        <article id={card} className='card'>
            <div className='tittle-cards'>
                <div className='icon'>{serviceIcon}</div>
                <h1 className='subtittle'>{service}</h1>
            </div>
            <p className='text'>{serviceText}</p>
        </article>
    </>)
} 