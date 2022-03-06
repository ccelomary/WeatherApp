import './rightSide.css'
import { WeatherCard } from './weather_card';
import { connect } from 'react-redux';
import GetDateFormat from '../../Helpers/DateTimeFormat';
import changeTemp from './Service/ChangeDegree';
import Celsius2Fahrenheit from '../../Helpers/convertCelsius2Fahrenheit';


const temperatureAdapter = (isCel, temp) =>{
    if (isCel)
        return temp;
    return Celsius2Fahrenheit(temp);
}

const RightSide = ({data, temp, changeTemp}) => {
    const currentState = data.consolidated_weather;

    return (<div className='right-side'>
            <div className="top-right">
            <div className="degree-sign fahrenheit" onClick={()=>{console.log(temp);changeTemp(false)}}>
                <p>&#8457;</p>
            </div>
            <div className="degree-sign celsius" onClick={()=>{console.log(temp);changeTemp(true)}}>
                <p>&#8451;</p>
            </div>
        </div>
        <div className="weather-info">
            {
                (currentState) && currentState.slice(1).map((element, index)=> {
                        if (index === 0)
                            return <WeatherCard image={`https://www.metaweather.com/static/img/weather/${element.weather_state_abbr}.svg`} key={element.id.toString()} date="Tommorow" degree_min={temperatureAdapter(temp, Math.round(element.min_temp))} degree_max={temperatureAdapter(temp, Math.round(element.max_temp))} temp={temp}/>
                        else
                            return <WeatherCard image={`https://www.metaweather.com/static/img/weather/${element.weather_state_abbr}.svg`} key={element.id.toString()} date={`${GetDateFormat(new Date(element.applicable_date))}`} degree_min={temperatureAdapter(temp, Math.round(element.min_temp))} degree_max={temperatureAdapter(temp, Math.round(element.max_temp))} temp={temp}/>
                    })
            }
        </div>
        <div className="highlights">
                <h1 className="highlight-paragraph">Today's highlights</h1>
                <div className="highlights-info">
                    <div className="highlights-card">
                        <h2 className="hightlights-card-title">Wind Status</h2>
                        <p className="hightlights-card-paragraph"><span>{currentState ? Math.round(currentState[0].wind_speed): 0}</span>mph</p>
                        <div className="wind-direction">
                            <div className="compas" style={{transform: `rotate(${(currentState)? Math.round(-40 + currentState[0].wind_direction): -40}deg)`}}>
                                <i className="fa-solid fa-location-arrow"></i>
                            </div>
                            <p>{currentState ? currentState[0].wind_direction_compass: 'NaN'}</p>
                        </div>
                    </div>
                    <div className="highlights-card">
                        <h2 className="hightlights-card-title">Humidity</h2>
                        <p className="hightlights-card-paragraph"><span>{currentState ? Math.round(currentState[0].humidity): 0}</span>%</p>
                        <div className="progress-percent">
                            <p>0</p>
                            <p>50</p>
                            <p>100</p>
                        </div>
                        <div className="progress">
                            <div className="progress-wrapper" style={{width:`${currentState ? Math.round(currentState[0].humidity): 0}%`}}></div>
                        </div>
                    </div>
                    <div className="highlights-card">
                        <h2 className="hightlights-card-title">Visibility</h2>
                        <p className="hightlights-card-paragraph"><span>{currentState ? Math.round(currentState[0].visibility): 0}</span>miles</p>
                    </div>
                    <div className="highlights-card">
                        <h2 className="hightlights-card-title">Air Pressure</h2>
                        <p className="hightlights-card-paragraph"><span>{currentState ? Math.round(currentState[0].air_pressure): 0}</span>mb</p>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <p className='footer-text'>created by <span className='footer-username'>Celomary</span> & devChanllange.io</p>
            </div>
    </div>);
}
const mapState2Props = (state)=>{
    return {
        data: state.GetWeather,
        temp: state.TemperatureReducer
    }
}
export default connect(mapState2Props, {changeTemp})(RightSide);