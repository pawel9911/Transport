import {Link} from 'react-scroll';

const Menu = () =>{
    return(
        <ul className='menu'>
            <li><Link to='Start'>Start</Link></li>
            <li><Link to='purpose'>O co chodzi?</Link></li>
            <li><Link to='aboutUs'>O nas</Link></li>
            <li><Link to='fundation'>Fundacja i organizacje</Link></li>
            <li><Link to='contact'>Kontakt</Link></li>
        </ul>
    )
}

export default Menu;
