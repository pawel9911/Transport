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
                    <h1>Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <div className='mainOptionsPage'>
                        <Link to='/logowanie'>Oddaj<br/> rzeczy</Link>
                        <Link to='/logowanie'>Zorganizuj zbiórkę</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HomeHeader;
