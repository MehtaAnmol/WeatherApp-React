import ContextProvider, { WeatherContext } from "./context/Context"
import SearchBar from "./search/SearchBar";
import WeatherDetails from "./weatherDetails/WeatherDetails";
import style from './app.module.css'
export default function App(){
 
  return(
    <>
      <ContextProvider>
        <div className = {style.main__container}>
          <SearchBar/>
          <WeatherDetails/>
        </div>
      </ContextProvider>
    </>
  )
}
