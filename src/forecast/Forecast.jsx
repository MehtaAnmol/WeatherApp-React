import ForecastDetails from "./forecastDetails/forecastDetails"
import ForecastToday from "./forecastToday/ForecastToday"
import style from '../forecast/forecast.module.css'

export default function Forecast(){
    return(
        <div className = {style.main__container}>
             <ForecastDetails/>
             <ForecastToday/> 
        </div>
    )
}
 



