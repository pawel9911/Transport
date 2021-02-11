import { useEffect, useState } from "react";

const Support = () =>{
    const [support, setSupport] = useState(0);
    const handleClick = (e) =>{
        setSupport(e)
    }
    return (
        <div className='support'>
            <h1>Komu pomagamy?</h1>
            <div className='buttonContainer'>
                <button onClick={(e) => handleClick (0)}>Fundacjom</button>
                <button onClick={(e) => handleClick (1)}>Organizajcą pozarządowym</button>
                <button onClick={(e) => handleClick (2)}>Lokalnym zbiórkom</button>
            </div>
            <p>W naszej bazie znajdziesz listę zweryfikowanych fundacji, z którymi współpracujemy. Możemy sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            <div>
                {support}
            </div>
        </div>
    )
}

export default Support