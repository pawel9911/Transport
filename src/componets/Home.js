import HomeHeader from './HomeHeader';
import Statistic from './Statistic';
import Purpose from './Purpose';
import AboutUs from './AboutUs';

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
