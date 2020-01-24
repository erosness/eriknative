// redux/actions.js
import { combineReducers } from 'redux'
import unitList from './reducerSmInfo'
import functionStatus from './reducerSmStatus'
import functionUIDoorbell1 from './reducerUIDoorbell1'
import functionDisplay8x8 from './reducerDisplay8x8'
import functionList from './reducerSmFunctions'

export default combineReducers({
  unitList,
  functionList,
  functionUIDoorbell1,
  functionDisplay8x8,
  functionStatus,
})
