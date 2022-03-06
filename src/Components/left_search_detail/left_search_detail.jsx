import './left_search_detail.css'
import { SearchLocation } from './left_search_locations';
import {useState} from 'react';
import { connect } from 'react-redux';
import deactiveToggle from './Services/DeactiveToggle';
import GetWeatherByCity from './Services/GetWeatherByCity';

const SearchDetail = ({toggle, deactiveToggle, GetWeatherByCity})=>{
    const [searchInput, inputSet] = useState('');
    const [searchLocation, setSearchLocation] = useState([]);
    const clickHandler = ()=>{
        inputSet('');
        setSearchLocation([]);
        deactiveToggle();
    }
    const searchClickHandler = async ()=>{
        const data = await (await fetch(`https://weatherbackapp.herokuapp.com/api/location/search/?query=${searchInput}`)).json();
        setSearchLocation(data);
    }
    const searchLocationClick = (woid)=>{
        GetWeatherByCity(woid);
        inputSet('');
        setSearchLocation([]);
        deactiveToggle();
    }
    return (<div className={`search-detail${toggle ? '': ' hide'}`}>
            <i className="cross fa-solid fa-xmark" onClick={clickHandler}></i>
            <div className="search-top">
            <div className="search-input">
                <div className="search-icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <input type="text" value={searchInput} placeholder="Search Location" onChange={(e)=>{
                    inputSet(e.target.value);
                }} />
                </div>
                <div className="search-btn" onClick={searchClickHandler}>
                    <p>Search</p>
                </div>
            </div>
            <div className="search-body">
            {
                searchLocation.map(element =>{
                    return <SearchLocation location={element.title} key={element.woeid} onclick={(e)=>{searchLocationClick(element.woeid)}}/>
                })
            }
            </div>
    </div>);
}

const mapState2Props = (state)=>{
    return {
        toggle: state.ToggleReducer,
    };
}
export default connect(mapState2Props, {deactiveToggle, GetWeatherByCity})(SearchDetail);