import { createContext, useEffect } from "react";
import { useState } from "react";

export const WeatherContext = createContext(null)

export default function ContextProvider({children}){
    const [location, setLocation] = useState('london')
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(()=>{
        if (!location) return;
        async function fetchData(){
            const url = `http://api.weatherapi.com/v1/forecast.json?key=7fe00839801248baa93112333240105&q=${location}&days=1&aqi=no&alerts=no`
            try{
                const response = await fetch(url);
                if(!response.ok) throw new Error(`Could not fetch Data`)
                const result = await response.json();
                setData(result);
            }catch(error){
                setError(error.message)
            }finally{
                setLoading(false)
            }
        }
        fetchData()
    },[location])

    return(
        <WeatherContext.Provider value = {{data, loading, error, setLocation}}>
            {children}
        </WeatherContext.Provider>
    )

}