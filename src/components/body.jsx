import React, { Component } from 'react';
import WeatherCondition from './WeatherCondition'
import ForecastRow from './ForecastRow'
import WeatherForecast from './WeatherForecast';


function Body(props) {
        return ( 
            <main>
                    <WeatherCondition />
                    <WeatherForecast />
            </main>
            
         );
}
 
export default Body;