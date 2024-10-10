import { useContext } from "react"
import { WeatherContext } from "../context/Context"

import style from '../locationCard/locationCard.module.css'

export default function LocationCard(){
    const {data} = useContext(WeatherContext)
    
    if(!data) return <p>Loading.....</p>
    
    const {location, current } = data;
    
    return(
        <div className = {style.main__container}>
            <div className = {style.top}>
                <h1>{current.temp_c}&deg;
                        <button className = {style.c__btn}>c</button>
                        
                </h1>
                <div className = {style.img__container}>
                    <img src="" alt="img" />
                    <p>{current.condition.text}</p>
                </div>
            </div>
            <div className = {style.bottom}>
                <p>{location.name}</p>
                <p>{location.region}, {location.country}</p>
            </div>
        </div>
    )
}