import './left_data_show.css'
import { connect } from 'react-redux';
import activateToggle from './Services/ActiveToggle';
import GetDateFormat from '../../Helpers/DateTimeFormat';
import GetWeatherByUserLocation from './Services/GetWeatherByUserLocation';
import Celsius2Fahrenheit from '../../Helpers/convertCelsius2Fahrenheit';

const temperatureAdapter = (isCel, temp) =>{
    if (isCel)
        return temp;
    return Celsius2Fahrenheit(temp);
}

const DataShow = ({toggle, data, temp, activateToggle, GetWeatherByUserLocation})=> {
    let  currentState = data.consolidated_weather;
    if (currentState !== undefined)
        currentState = currentState[0];
    const Hide = (e)=>{
        e.preventDefault();
        activateToggle();
    }
    const getWeatherByUserLocation = (e)=>{
        e.preventDefault();
        GetWeatherByUserLocation();
    }
    return (<div className={`data-show${!toggle ? '': " hide"}`}>
        <div className='wrapper'>
            <div className="top-first">
                <button className="btn" onClick={Hide}>Search for places</button>
                <div className="location-icon" onClick={getWeatherByUserLocation}>
                    <i className="fa-solid fa-location-crosshairs"></i>
                </div>
            </div>
            <div className="weather-icon">
                <img src={`https://www.metaweather.com/static/img/weather/${currentState ? currentState.weather_state_abbr: 'lc'}.svg`} alt='weatherIcon' />
            </div>
            <div className="weather-counter">
                <h2><span className="degree">{currentState ? temperatureAdapter(temp, Math.round(currentState.the_temp)): '0'}</span><span className="cel">{temp ? <>&#8451;</>: <>&#8457;</>}</span></h2>
            </div>
            <div className="weather-name">
                <p>{currentState ? currentState.weather_state_name: 'Wait'}</p>
            </div>
            <div className="weather-date">
                <p>Today<span className="point">.</span><span className="">{currentState ? GetDateFormat(new Date(currentState.applicable_date)):'Day. 0Mon'}</span></p>
            </div>
            <div className="weather-city">
                <p><i className="fa-solid fa-location-dot"></i> <span className="city-name">{data.title ? data.title: 'place'}</span></p>
            </div>
        </div>
    </div>);
}

const mapState2Props = (state)=>{
    return {
        toggle: state.ToggleReducer,
        data: state.GetWeather,
        temp: state.TemperatureReducer
    };
}

export default connect (mapState2Props, {
    activateToggle,
    GetWeatherByUserLocation
})(DataShow);
