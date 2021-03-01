import { Link } from 'react-router-dom';
import LogPanel from './LogPanel';
import Menu from './Menu';

const HomeHeader = () =>{
    return (
        <header>
            <nav>
                <LogPanel/>
                <Menu/>
            </nav>
            <div className='containerHead'>
                <div className='headPanel'>
                    <h1>Potrzebujesz Transportu?<br/>Skontaktuj się z nami dopasujemy ofertę</h1>
                    <div className='mainOptionsPage'>
                        <Link to='/logowanie'>Zamów<br/> usługę</Link>
                        <Link to='/logowanie'>Poznaj naszą ofertę</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HomeHeader;
