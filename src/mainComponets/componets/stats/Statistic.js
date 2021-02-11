import Stats from './Stats';

const Statistic = ({name}) =>{
    return(
        <div name={name} className='statistic'>
           <div>
                <Stats num={10} objective='Oddanych worków' text='Lorem, ipsum dolor sit amet consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquarn erat volutpat.'/>
                <Stats num={5} objective='Wspartych organizacji' text='Lorem, ipsum dolor sit amet consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquarn erat volutpat.'/>
                <Stats num={7} objective='Zorganizowanych zbiórek' text='Lorem, ipsum dolor sit amet consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquarn erat volutpat.'/>
           </div>
        </div>
    )
}

export default Statistic;
