export const GET_WEATHER_BY_LOCATION = 'GET_WEATHER_BY_LOCATION';

const  GetWeather = (state=[], action) =>
{
    if  (action.type === GET_WEATHER_BY_LOCATION)
    {
        return action.data;
    }
    return state;
}

export default GetWeather;