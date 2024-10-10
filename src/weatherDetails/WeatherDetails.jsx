import LocationCard from "../locationCard/LocationCard"
import Forecast from "../forecast/Forecast"
import TimeCard from "../timeCard/TimeCard"

import style from '../weatherDetails/weatherDetails.module.css'

export default function WeatherDetails(){
    return(
        <>
            <div className = {style.main__container}>
                <LocationCard/>
                <TimeCard/>
            </div>
            <Forecast/>
        </>
    )
}



