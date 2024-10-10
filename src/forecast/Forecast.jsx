import { useContext } from "react"
import { WeatherContext } from "../context/Context"

export default function Forecast(){
    return(
        <div>
            <h1>Weather forecast</h1>
             <ForecastDetails/>
             <ForecastToday/> 
        </div>
    )
}
 

function ForecastDetails(){
    const {data} = useContext(WeatherContext)
    if(!data) return <p>Loading.....</p>
    const {current} = data;

    return(
        <div>
            <div>
                <button>Today's Forecast</button>
                <button>Hourly Forecast</button>
                <button>Daily Forecast</button>
            </div>
            <div>
                <ul>
                <li><img src="" alt="feelslike"/> <span>Feels Like</span>{current.feelslike_c}</li>
                    <li><img src="" alt="humidity"/> <span>Humidity</span>{current.humidity}%</li>
                    <li><img src="" alt="UV index"/> <span>UV Index</span>{current.uv} of 10</li>
                    <li><img src="" alt="pressure"/> <span>Pressure</span>{current.pressure_mb}</li>
                    <li><img src="" alt="wind"/> <span>Wind</span>{current.wind_kph}km/h</li>
                    <li><img src="" alt="dew"/> <span>Dew Point</span>{current.dewpoint_c}c</li>
                </ul>
            </div>
        </div>
    )
}

function ForecastToday(){
    const {data} = useContext(WeatherContext)
    if(!data) return <p>Loading.....</p>
    const {forecast} = data;
    const {forecastday} = forecast;
    const [today] = forecastday
    // const [hour] = today
    console.log()
    return(
        <div>
            <h3>Today's</h3>
            <div>
                <img src="" alt="morning" />
                <p>morning</p>
                <p>{today.hour[0].temp_c}</p>
            </div>
            <div>
                <img src="" alt="morning" />
                <p>Afternoon</p>
                <p>{today.hour[13].temp_c}</p>
            </div>
            <div>
                <img src="" alt="morning" />
                <p>Evening</p>
                <p>{today.hour[17].temp_c}</p>
            </div>
        </div>
    )
}