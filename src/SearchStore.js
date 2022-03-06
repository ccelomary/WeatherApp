import {createStore, applyMiddleware} from 'redux';
import WeatherReducers from './WeatherReducers';
import thunk from 'redux-thunk';

export default createStore(WeatherReducers, applyMiddleware(thunk));