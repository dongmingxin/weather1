import React from 'react';
import WeatherForecast from './WeatherForecast'

function ForecastRow(props) {
    return (
        <div className="weather-forecast__row">
            <span className="weather-forecast__day">{props.day}</span>
            <span className="weather-forecast__icon">
                <i className="fa fa-clock" />
                {props.time}
            </span>
        <span className="weather-forecast__high">{props.high} {props.unit.toUpperCase()}</span>
        <span className="weather-forecast__low">{props.low} {props.unit.toUpperCase()}</span>
        </div>
    );
}
 
export default ForecastRow;