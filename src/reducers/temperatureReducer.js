export const CHANGE_TEMP = 'CHANGE_TEMP';




export default function TemperatureReducer(celsius=true, action)
{
    if (action.type === 'CHANGE_TEMP')
        celsius = action.temp;
    return celsius;
}