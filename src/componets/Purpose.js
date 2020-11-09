import {Link} from 'react-router-dom';
import Options from './Options';

const Purpose = ({name}) =>{
    return (
        <div name={name} className='purpose'>
            <div>
                <h2>Wystarczą 4 proste kroki</h2>
                <div className='options'>
                    <Options  title='Wybierz rzeczy' text='ubrania, zabawki, sprzęt i inne'/>
                    <Options  title='Spakuj je' text='skorzystaj z worków na śmieci'/>
                    <Options  title='Zdecyduj komu chcesz pomóc' text='wybierz zaufane miejsce'/>
                    <Options  title='Zamów kuriera' text='kurier przyjedzie w dogodnym terminie'/>
                </div>
                <Link to='/logowanie'>Oddaj<br/> rzeczy</Link>
            </div>
        </div>
    )
}

export default Purpose;
