import {Link} from 'react-scroll';

const Menu = () =>{
    return(
        <ul className='menu'>
            <li><Link to='start'>Start</Link></li>
            <li><Link to='purpose'>Jak zamówić?</Link></li>
            <li><Link to='aboutUs'>O nas</Link></li>
            <li><Link to='fundation'>Oferta</Link></li>
            <li><Link to='contact'>Kontakt</Link></li>
        </ul>
    )
}

export default Menu;
