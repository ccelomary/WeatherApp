import { DEACTIVE_TOGGLE } from "../../../reducers/toggleReducer";


export default function deactiveToggle(){
    return  (dispatch) => {
        dispatch({type: DEACTIVE_TOGGLE});
    }
}