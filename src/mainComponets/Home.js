import HomeHeader from './componets/home/HomeHeader'
import Statistic from './componets/stats/Statistic'
import Purpose from './componets/purpose/Purpose'
import AboutUs from './componets/AboutUs';
import Support from './componets/Support';
import Contact from './componets/Contact';

const Home = () =>{
    return (
        <>
            <HomeHeader/>
            <Statistic name='start'/>
            <Purpose name='purpose'/>
            <AboutUs name='aboutUs'/>
            <Support name='fundation'/>
            <Contact name='contact'/>
        </>
    )
}

export default Home;
