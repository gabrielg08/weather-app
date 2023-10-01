import React from 'react'

function WeatherStat({icon, value, unit}) {
  return (
    <div className="flex gap-2 items-center">
       <img src={icon} alt="" />
       <span>{value}{unit}</span>
     </div>
  )
}

export default WeatherStat
