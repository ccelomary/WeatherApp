import { LeftSide } from './Components/left_side/leftSide';
import  RightSide  from './Components/right_side/rightSide';
import { connect } from 'react-redux';
import './Content.css';
import { useEffect } from 'react';
import { GET_WEATHER_BY_LOCATION } from './reducers/LocationReducers';

const Content = ({weather, getWeather})=>
{
    useEffect(()=>{
        getWeather();
    },[getWeather]);
    return (<div className="content">
        <LeftSide />
        <RightSide />
    </div>);
}

const getWeather = ()=>{
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

const mapState2Props = (state)=>{
    return {
        weather: state.GetWeather
    }
}

export default connect(mapState2Props, {getWeather})(Content)