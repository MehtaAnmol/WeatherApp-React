import { useContext } from "react"
import { WeatherContext } from "../../context/Context"
import style from '../forecastDetails/forecastDetails.module.css'
import humidity from '../../images/humidity.png'
import pressure from '../../images/resilience.png'
import uv from '../../images/uv-index.png'
import wind from '../../images/wind.png'
import dew from  '../../images/point.png'



export default function ForecastDetails(){
    const {data} = useContext(WeatherContext)
    if(!data) return <p>Loading.....</p>
    const {current} = data;

    return(
        <div className = {style.main__container}>
            <div className = {style.forecast__heading}>
                <button className = {style.forecast__button}>Today's Forecast</button>
                <button className = {style.forecast__button}>Hourly Forecast</button>
                <button className = {style.forecast__button}>Daily Forecast</button>
            </div>
            <div className = {style.forecast__details__container}>
                <ul className = {style.details}>
                    <li className = {style.li}><img width = '70px' src = '' alt="feelslike"/> <span>Feels Like</span>{current.feelslike_c}</li>
                    <li className = {style.li}><img width = '70px' src = {humidity} alt="humidity"/> <span>Humidity</span>{current.humidity}%</li>
                    <li className = {style.li}><img width = '70px' src = {uv} alt="UV index"/> <span>UV Index</span>{current.uv} of 10</li>
                    <li className = {style.li}><img width = '70px' src = {pressure} alt="pressure"/> <span>Pressure</span>{current.pressure_mb}</li>
                    <li className = {style.li}><img width = '70px' src = {wind} alt="wind"/> <span>Wind</span>{current.wind_kph}km/h</li>
                    <li className = {style.li}><img width = '70px' src = {dew} alt="dew"/> <span>Dew Point</span>{current.dewpoint_c}c</li>
                </ul>
            </div>
        </div>
    )
}