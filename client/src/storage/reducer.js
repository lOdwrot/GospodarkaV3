import { combineReducers } from 'redux'
import app from './app/app.reducer'
import meal from './meal/meal.reducer'
import personalData from './personalData/personalData.reducer'

const rootReducer = (state ={}, action) => combineReducers({
    app,
    personalData,
    meal
})(state, action)

export default rootReducer