import { useEffect, useState } from "react";

const Support = ({name}) =>{
    const [supportIndex, setSupportIndex] = useState(0);
    const support = [
    <div className='whoWeSupport'>
        <span><p>Fundacja "Dbam o zdrowe"</p><p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p></span>
        <span><p>Fundacja "Dla dzieci"</p><p>ubrania, meble, zabawki</p></span>
        <span><p>Fundacja "Bez domu"</p><p>ubrania, jedzenie, ciepłe koce</p></span>
    </div>,
    <div className='whoWeSupport'>
    <span><p>Organizacja "Dbam o zdrowe"</p><p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p></span>
    <span><p>Organizacja "Dla dzieci"</p><p>ubrania, meble, zabawki</p></span>
    <span><p>Organizacja "Bez domu"</p><p>ubrania, jedzenie, ciepłe koce</p></span>
    </div>, 
    <div className='whoWeSupport'>
    <span><p>Zbiórka "Dbam o zdrowe"</p><p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p></span>
    <span><p>Zbiórka "Dla dzieci"</p><p>ubrania, meble, zabawki</p></span>
    <span><p>Zbiórka "Bez domu"</p><p>ubrania, jedzenie, ciepłe koce</p></span>
    </div>]

    const handleClick = (e) =>{
        setSupportIndex(e)
    }
    return (
        <div className='support' name={name}>
            <h1>Komu pomagamy?</h1>
            <div className='buttonContainer'>
                <button onClick={(e) => handleClick (0)}>Fundacjom</button>
                <button onClick={(e) => handleClick (1)}>Organizajcą pozarządowym</button>
                <button onClick={(e) => handleClick (2)}>Lokalnym zbiórkom</button>
            </div>
            <p>W naszej bazie znajdziesz listę zweryfikowanych fundacji, z którymi współpracujemy. Możemy sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            {support[supportIndex]}
        </div>
    )
}

export default Support