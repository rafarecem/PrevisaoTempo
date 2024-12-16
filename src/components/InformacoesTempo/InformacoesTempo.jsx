import './InformacoesTempo.css'

function informacoesTempo({tempo}) {
    
   
    return (
        <div className='tempo-container'>
        <h2>{tempo.name}</h2>
        <div className='infos'>
        <img src={`http://openweathermap.org/img/wn/${tempo.weather[0].icon}.png`} />
        <p className='temperatura'>Temperatura: {Math.round(tempo.main.temp)}°C</p>
      </div>
         <p className='description'>{tempo.weather[0].description}</p>
         <div className='detalhes'>
            <p>sensação termica: {Math.round(tempo.main.feels_like)}°C</p>
            <p>Umidade: {tempo.main.humidity}%</p>
            <p>pressão: {tempo.main.pressure}</p>
         </div>
      </div>
    
    )

}
export default informacoesTempo