// redux/actions.js
import { combineReducers } from 'redux'
import unitList from './reducerSmInfo'
import functionList from './reducerSmFunctions'
import functionStatus from './reducerSmStatus'

export default combineReducers({
  unitList,
  functionList,
  functionStatus,
})
