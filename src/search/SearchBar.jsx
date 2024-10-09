import { useContext, useState } from "react"
import { WeatherContext } from "../context/Context"

export default function SearchBar(){
    const {data , setLocation} = useContext(WeatherContext)
    const [searchLocation, setSearchLocation] = useState('')

    function handleChange(e){

        setSearchLocation(e.target.value);
    }
    function handleSearchButton(){
        if(searchLocation)
            setLocation(searchLocation)
    }
    return(
        <>
            <ul type = 'none'>
                <li>
                    <input type="text" value = {searchLocation} onChange={handleChange} />
                    <button onClick = {handleSearchButton} >Search</button>
                </li>
            </ul>
            {
                data && <p>{data.location.country}</p>
            }
        </>
    )
}