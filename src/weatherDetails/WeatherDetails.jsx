import { useContext } from "react"
import { WeatherContext } from "../context/Context"
import Forecast from "../forecast/Forecast"

export default function WeatherDetails(){
    const {data} = useContext(WeatherContext)
    console.log(data)
    return(
        <>
            <h1>Current Weather</h1>
            <CurrentLocation/>
            <Forecast/>
        </>
    )
}

function CurrentLocation(){
    return(
        <div>
            <LocationCard/>
            <TimeCard/>
        </div>
    )
}
function LocationCard(){
    const {data} = useContext(WeatherContext)
    
    if(!data) return <p>Loading.....</p>
    
    const {location, current } = data;
    
    return(
        <div>
            <div>
                <h1>{current.temp_c}°<span><button>C</button><button>F</button></span></h1>
                <div>
                    <img src="" alt="img" />
                    <p>{current.condition.text}</p>
                </div>
            </div>
            <div>
                <p>{location.name}</p>
                <p>{location.region}, {location.country}</p>
            </div>
        </div>
    )
}
function TimeCard(){
    return(
        <div>
            <p>06:15AM</p>
            <p>Thursday, 10 Aug 2024</p>
        </div>
    )
}
