import { useContext, useState } from "react"
import { WeatherContext } from "../context/Context"
import styles from '../search/searchBar.module.css'


export default function SearchBar(){
    const {setLocation} = useContext(WeatherContext)
    const [searchLocation, setSearchLocation] = useState('')

    function handleChange(e){
        setSearchLocation(e.target.value);
    }
    function handleSearchButton(){
        if(searchLocation)
            setLocation(searchLocation)
    }
    return(
        <div className = {styles.searchbar__container}>
            <ul type = 'none'>
                <li style={{direction: 'none'}}>
                    <input className = {styles.input} type="text" value = {searchLocation} onChange={handleChange} placeholder = "Enter Location" />
                    <button className = {styles.search__btn} onClick = {handleSearchButton} >Search</button>
                </li>
            </ul>
        </div>
    )
}