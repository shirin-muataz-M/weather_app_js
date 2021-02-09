import React from 'react'
import './weatherBody.css'
import Days from '../Days/Days'
import Icon from '../Icon/Icon'
import Temp from '../temp/Temp'

const WeatherBody = (props) => {
    return (
        <div className="weatherBody card">
            <Days day={props.day}/>
            <Icon icon={props.icon}/>
            <Temp minTemp={props.minTemp} maxTemp={props.maxTemp} description={props.description}/>
            
        </div>
    )
}

export default WeatherBody