import { ACTIVE_TOGGLE } from "../../../reducers/toggleReducer";

const activateToggle = () => {
    return dispatch => dispatch({type: ACTIVE_TOGGLE})
}

export default activateToggle;