// redux/actions.js
import { combineReducers } from 'redux'
import unitList from './reducerSmInfo'
import functionList from './reducerSmFunctions'

export default combineReducers({
  unitList,
  functionList,
})
