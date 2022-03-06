import { combineReducers } from 'redux';
import ToggleReducer from './reducers/toggleReducer';
import GetWeather from './reducers/LocationReducers';
import TemperatureReducer from './reducers/temperatureReducer';
export default combineReducers({
     ToggleReducer,
     GetWeather,
     TemperatureReducer
});