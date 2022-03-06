
export const ACTIVE_TOGGLE = 'ACTIVE_TOGGLE';
export const DEACTIVE_TOGGLE = 'DEACTIVE_TOGGLE';

const ToggleReducer = (state=false, action)=>{
    if (action.type === ACTIVE_TOGGLE)
        state = true;
    else if (action.type === DEACTIVE_TOGGLE)
        state = false;
    return (state);
}

export default ToggleReducer;