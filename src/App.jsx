import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import WatherContainer from "./components/WatherContainer";

function App() {
  const [weather, setWeather] = useState(null);
  const [darkBtn, setValueDark] = useState(true)


  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const API_KEY = "dd2690e381028180d7d7f1b5619254d8";

    console.log(lat, lon)
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      )
      .then(({ data }) => setWeather(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  const darkClickBtn = () => {
    setValueDark(!darkBtn)
}


  return (
    <main className={`${darkBtn ? 'dark:bg-black' : 'bg-amber-300'} font-Lato flex justify-center items-center min-h-screen text-white px-2`}>

      {weather === null ? (
        <h3 className="text-2xl font-['Lato']">Cargando...</h3>
      ) : (
        <WatherContainer weather={weather} dark={darkClickBtn} />
      )}
    </main>
  );
}

export default App;
