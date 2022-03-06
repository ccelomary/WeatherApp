import { GET_WEATHER_BY_LOCATION } from "../../../reducers/LocationReducers";


export default function GetWeatherByCity(woid){
    return async (dispatch)=>{
        const data = await (await fetch(`https://www.metaweather.com/api/location/${woid}/`,{
            headers: {
                'Access-Control-Allow-Origin':'*'
            },
            mode: 'no-cors'
        })).json();
        return dispatch({type: GET_WEATHER_BY_LOCATION, data: data})
    }
}
