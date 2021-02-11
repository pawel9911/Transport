import {Link} from 'react-router-dom';

const LogPanel = () =>{
    return (
        <div className='logPanel'>
                <div><Link to='/logowanie'>Zaloguj</Link></div>
                <div><Link to='/rejestracja'>Załóż konto</Link></div>
        </div>
    )
}

export default LogPanel;
