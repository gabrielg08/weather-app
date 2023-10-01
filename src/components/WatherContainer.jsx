import { useState } from "react"
import WeatherStat from "./WeatherStat"

const WatherContainer = ({weather,dark, darkBtn}) => {
    const [isCelsius, setIsCelcius] = useState(true)
    const [valueBtn, setValueBtn] = useState(true)

    const changeUnitTemp = (temp) => {
        if(isCelsius){
            //Transformacion a C°
            const celsiusTemp = (temp - 273.15).toFixed(1)
            return `${celsiusTemp} °C` 
        }else{
            // transformacion a F°
            const fahrenheitTemp = (((temp - 273.15) * 9/5) + 32).toFixed(1)
            return `${fahrenheitTemp} °F`
        }
    }

    const handleChangeUnit = () =>{
        setIsCelcius(!isCelsius)  
    }
    const alHacerClick = () => {
        setValueBtn(!valueBtn)
    }
 
   
  return (
    <section className="text-center gap-10 grid">
        <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" onClick={dark} class="sr-only peer"/>
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span class="ml-3 text-sm font-medium text-black dark:text-white">Change Mode</span>
        </label>
    <input class="placeholder:italic placeholder:text-slate-400 block bg-slate-300 w-full border border-slate-300 rounded-xl py-2 pl-9 pr-3 shadow-inner focus:outline-none focus:border-black focus:ring-black focus:ring-1 sm:text-sm text-black" placeholder="Busca una ciudad..." type="text" name="search"/>

    <h3 className="text-3xl font-semibold">{weather.name}, {weather.sys.country}</h3>
        <div className="grid gap-5 sm:grid-cols-[1fr_auto] ">
            {/*Seccion superior*/}

            <article className="bg-slate-300 text-black rounded-lg shadow-xl bor grid grid-cols-2 items-center p-3">
                <h4 className="col-span-2 text-lg capitalize">{weather.weather[0].description}</h4>
                <span className="text-5xl">{changeUnitTemp(weather.main.temp)}</span>
                <picture>
                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" />
                </picture>
            </article>
             
             <article className="grid grid-cols-3 justify-items-center bg-slate-300 text-black shadow-xl rounded-[20px] p-2 py-3 sm:grid-cols-1">
               {/*Seccion inferior*/}
             <WeatherStat icon="/img/Vientos.png" unit="M/S" value={weather.wind.speed}/>
             <WeatherStat icon="/img/Lluvia.png" unit= "%" value={weather.main.humidity}/>
             <WeatherStat icon="/img/Temperatura.png" unit="hPa" value={weather.main.pressure}/>
              
            </article>
        </div>
        <article>
        <button className="bg-slate-300 text-black shadow-xl w-56 font-bold py-2 px-4 rounded" onClick={() => {handleChangeUnit(); alHacerClick();}}>{valueBtn ? 'Cambia a °F':'Cambia a °C'}</button>
        </article>
        
    </section>
  )
}

export default WatherContainer
