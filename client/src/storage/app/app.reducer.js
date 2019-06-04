import { SET_USER_ROLE } from "./app.const";

const INITIAL_STATE = {
    userRole: null,
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_USER_ROLE:
            return {...state, userRole: action.payload}
        default:
            return state
    }
}