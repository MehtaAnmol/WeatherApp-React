import ContextProvider, { WeatherContext } from "./context/Context"
import SearchBar from "./search/SearchBar";
import WeatherDetails from "./weatherDetails/WeatherDetails";

export default function App(){
 
  return(
    <>
      <ContextProvider>
        <SearchBar/>
        <WeatherDetails/>
      </ContextProvider>
    </>
  )
}
