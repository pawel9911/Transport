import {Link} from 'react-router-dom';
import Options from './Options';

const Purpose = ({name}) =>{
    return (
        <div name={name} className='purpose'>
            <div>
                <h2>Wystarczą 4 proste kroki</h2>
                <div className='options'>
                    <Options  title='Wybierz ofertę transportu' text='Przeprowadzki, Transport rzeczy i ludzi, Wywóź i utylizacja'/>
                    <Options  title='Skontaktuj się z działem obsługi' text='Dopytaj o szczegoły ofert'/>
                    <Options  title='Zdecyduj który wariant' text='Basic, premium, professional'/>
                    <Options  title='Zamów ofertę' text='Ciesz się fachową obsługą '/>
                </div>
                <Link to='/logowanie'>Zamów<br/>usługę</Link>
            </div>
        </div>
    )
}

export default Purpose;
