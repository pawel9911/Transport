import HomeHeader from './componets/home/HomeHeader'
import Statistic from './componets/stats/Statistic'
import Purpose from './componets/purpose/Purpose'
import AboutUs from './componets/AboutUs';

const Home = () =>{
    return (
        <>
            <HomeHeader/>
            <Statistic name='start'/>
            <Purpose name='purpose'/>
            <AboutUs name='aboutUs'/>
        </>
    )
}

export default Home;
