import { useContext } from "react"
import { WeatherContext } from "../../context/Context"
import style from '../forecastToday/forecastToday.module.css'
import morning from '../../images/sunrise.png'
import afternoon from '../../images/weather.png'
import night from '../../images/moon.png'
export default function ForecastToday(){
    const {data} = useContext(WeatherContext)
    if(!data) return <p>Loading.....</p>
    console.log(data)
    const {forecast} = data;
    const {forecastday} = forecast;
    const [today] = forecastday
    // const [hour] = today
    console.log()
    return(
        <div className = {style.main__container}>
            <h3 className = {style.heading}>Today's</h3>
            <div className = {style.details}>
                <div>
                    <img src = {morning} alt="morning" width = '70px' />
                    <p>Morning</p>
                    <p className = {style.p__bold}>{today.hour[0].temp_c}&deg;c</p>
                </div>
                <div>
                    <img src = {afternoon} alt="afternoon" width = '70px' />
                    <p>Afternoon</p>
                    <p className = {style.p__bold}>{today.hour[13].temp_c}&deg;c</p>
                </div>
                <div>
                    <img src = {night} alt="evening" width = '70px' />
                    <p>Evening</p>
                    <p className = {style.p__bold}>{today.hour[17].temp_c}&deg;c</p>
                </div>
            </div>
        </div>
    )
}