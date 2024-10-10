import { useContext } from "react"
import { WeatherContext } from "../context/Context"

import style from '../locationCard/locationCard.module.css'

export default function LocationCard(){
    const {data} = useContext(WeatherContext)
    
    if(!data) return <p>Loading.....</p>
    
    const {location, current } = data;
    const {condition} = current;
    const {icon} = condition;
    
    return(
        <div className = {style.main__container}>
            <div className = {style.top}>
                <h1 style = {{fontSize : '3rem', paddingBlockStart: '0.3em'}}>{current.temp_c}&deg;
                    <button className = {style.c__btn}>c</button>
                        
                </h1>
                <div className = {style.img__container}>
                    <img src={icon} alt="img" width = '70px'/>
                    <p style={{textAlign : 'center'}}>{current.condition.text}</p>
                </div>
            </div>
            <div className = {style.bottom}>
                <p className = {style.bottom__p}>{location.name}</p>
                <p className = {style.bottom__p}>{location.region}, {location.country}</p>
            </div>
        </div>
    )
}