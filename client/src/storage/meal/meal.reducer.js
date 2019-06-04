import { SET_MEAL_LIST, SET_USER_CHOICE } from "./meal.const";

const INITIAL_STATE = {
    mealList: [{name: 'ziemniaki'}],
    userChoice: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_MEAL_LIST:
            return {...state, mealList: action.payload}
        case SET_USER_CHOICE:
            return {...state, userChoice: action.payload}
        default:
            return state
    }
}