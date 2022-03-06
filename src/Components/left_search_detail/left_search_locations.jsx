import './left_search_locations.css'

export const SearchLocation = ({location='london', onclick})=>{
    return (<div className="search-location" onClick={onclick}>
                <p className="city-name">{location}</p>
                <p className="right-row"><i className="fa-solid fa-angle-right"></i></p>
    </div>);
}