import DataShow from '../left_data_show/left_data_show';
import SearchDetail from '../left_search_detail/left_search_detail';
import './leftSide.css';
export const LeftSide = ()=>{
    return (<div className="left-side">
        <DataShow />
        <SearchDetail />
    </div>);
}