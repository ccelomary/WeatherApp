import { GET_WEATHER_BY_LOCATION } from "../../../reducers/LocationReducers";



export default function GetWeatherByUserLocation()
{
    return  async (dispatch)=>{
        const getUserLocation =async ()=>{
            function putLocation(position) {
                const lat = position.coords.latitude;
                const long = position.coords.longitude;
                return [lat, long];
            }
            if (navigator.geolocation)
            {
                return await new Promise((resolve, reject)=>{
                    navigator.geolocation.getCurrentPosition(position=> {  
                        resolve(putLocation(position));
                    });
                });
            }
            return (null);
        }
        const position = await getUserLocation();
        let positionInfo;
        if (position)
        {
            positionInfo = await (await fetch(`https://weatherbackapp.herokuapp.com/api/location/search/?lattlong=${position[0]},${position[1]}`)).json();
            positionInfo = positionInfo[0];
        }
        else {
            positionInfo = await (await fetch(`https://weatherbackapp.herokuapp.com/api/location/search/?query=london`)).json();
            positionInfo = positionInfo[0];
        }
        const data = await (await fetch(`https://weatherbackapp.herokuapp.com/api/location/${positionInfo.woeid}/`)).json();
        return dispatch({type: GET_WEATHER_BY_LOCATION, data:data});
    }; 
}