import {
  FETCH_INFO_REQUEST,
  FETCH_INFO_FAILURE,
  FETCH_INFO_SUCCESS,
} from "../actions/actionTypes";

let initialState = { serverList: []};

const shallowCustomCompareUnits = (a, b) => {
  return (a.uid == b.uid && a.name == b.name && a.ip == b.ip && a.port == b.port)
}

const addUnitToList = (unitList, unit) => {
  console.log("At addUnitToList:", unitList, unit)
  console.log ("MAP:" , unitList.map( u => {shallowCustomCompareUnits(u, unit.uid)}).some(u => {u}))
  if(!unitList.map( u => {shallowCustomCompareUnits(u, unit.uid)}).some(u => {u}))
  return [...unitList, unit]
}

export default function(state = initialState, action) {
  console.log("At reducer1:", state, action)
  switch (action.type) {
    case FETCH_INFO_SUCCESS: {
      const unit = { [action.payload.info.uid] : {
        uid : action.payload.info.uid,
        ip  : action.payload.smServer.ip,
        port: action.payload.smServer.port,
        name: action.payload.info.name,
        time: Date.now(),
      } }
      let unitList = state.unitList || []
      const newList = addUnitToList(unitList, unit)
      console.log("At reducer2:", unit, newList)
      state.unitList = newList
      return unit
    }
    default: {
      return state;
    }
  }
};

// ... other actions
