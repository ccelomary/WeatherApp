import { CHANGE_TEMP } from "../../../reducers/temperatureReducer"

const changeTemp = (celsius)=> {
    return dispatch => {
        return dispatch({type: CHANGE_TEMP, temp: celsius});
    }
}

export default changeTemp;