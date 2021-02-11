
const Stats = ({num, objective, text})=>{
    return(
        <div className='stats'>
            <h1>{num}</h1>
            <p>{objective}</p>
            <p>{text}</p>
        </div>
    )
}

export default Stats;
