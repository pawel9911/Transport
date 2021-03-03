import { useEffect, useState } from "react";

const Support = ({name}) =>{
    const [supportIndex, setSupportIndex] = useState(0);
    const support = [
    <div className='whoWeSupport'>
        <span><p>Transport Ludzi</p><p>Imprezy, wesela, wycieczki, praca</p></span>
        <span><p>Transport "ostrożny"</p><p>Pianina, fortepiany, sejfy, kasy pancerne i wszystko co wymaga ostrożności</p></span>
        <span><p>Transport rzeczy</p><p>Samochody, Maszyny, Wielkogabartytowe rzeczy, towar na paltech i wiele innych</p></span>
    </div>,
    <div className='whoWeSupport'>
    <span><p>Przeprowadzki Kraków</p><p>Realizujemy przeprowadzki osób prywatnych, firm i instytucji na terenie Krakowa i okolic. Gwarantujemy zabezpieczenie przeprowadzki i krótkie terminy realizacji.</p></span>
    <span><p>Przeprowadzki firm</p><p>Profesjonalne przeprowadzki dla firm na terenie całego kraju. Pomagamy naszym klientom pakować dobytek, przewozimy go, a następnie rozpakowujemy.</p></span>
    <span><p>Przeprowadzki międzynarodowe</p><p>Oferujemy przeprowadzki międzynarodowe solidnie, tanio i bezpiecznie. Przeprowadzka międzynarodowa to ciekawa przygoda, w której chętnie Ci pomożemy.</p></span>
    </div>, 
    <div className='whoWeSupport'>
    <span><p>Wywóź</p><p>Wywóz bezużytecznych rzeczy typu meble, sprzęty AGD, RTV, komputery itp.</p></span>
    <span><p>Utylizacja</p><p>Utylizacja paneli fotowoltaicznych, bateri, akumlatorów i innych odpadów</p></span>
    <span><p>Montaż i demnotaż mebli</p><p>Zajmujemy się montażem i demontażem mebli zarówno podczas przeprowadzki jak i na zlecenie Klienta</p></span>
    </div>]

    const handleClick = (e) =>{
        setSupportIndex(e)
    }
    return (
        <div className='support' name={name}>
            <h1>Oferta</h1>
            <div className='buttonContainer'>
                <button onClick={(e) => handleClick (0)}>Transport</button>
                <button onClick={(e) => handleClick (1)}>Przeprowadzki</button>
                <button onClick={(e) => handleClick (2)}>Demontaż/montaż i utylizacja</button>
            </div>
            <p>W naszej bazie znajdziesz listę zweryfikowanych fundacji, z którymi współpracujemy. Możemy sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            {support[supportIndex]}
        </div>
    )
}

export default Support