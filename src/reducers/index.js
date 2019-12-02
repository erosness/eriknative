// redux/actions.js
import { combineReducers } from 'redux'
import smInfoReducer from './reducerSmInfo'
import smFunctionsReducer from './reducerSmFunctions'

export default combineReducers({
  smInfoReducer,
  smFunctionsReducer,
})
