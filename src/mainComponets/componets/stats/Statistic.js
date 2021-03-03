import Stats from './Stats';

const Statistic = ({name}) =>{
    return(
        <div name={name} className='statistic'>
           <div>
                <Stats num={10} objective='Autobusów' text='Lorem, ipsum dolor sit amet consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquarn erat volutpat.'/>
                <Stats num={5} objective='Tirów' text='Lorem, ipsum dolor sit amet consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquarn erat volutpat.'/>
                <Stats num={7} objective='Busów' text='Lorem, ipsum dolor sit amet consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquarn erat volutpat.'/>
           </div>
        </div>
    )
}

export default Statistic;
