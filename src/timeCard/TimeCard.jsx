import { useContext } from "react"
import { WeatherContext } from "../context/Context"
import style from '../timeCard/timeCard.module.css'

export default function TimeCard(){
    return(
        <div className = {style.main__container}>
            <p>06:15AM</p>
            <p>Thursday, 10 Aug 2024</p>
        </div>
    )
}