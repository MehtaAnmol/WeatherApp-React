import ContextProvider, { WeatherContext } from "./context/Context"
import SearchBar from "./search/SearchBar";

export default function App(){
 
  return(
    <>
      <ContextProvider>
        <SearchBar/>
      </ContextProvider>
    </>
  )
}
