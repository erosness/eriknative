import {
  FETCH_INFO_REQUEST,
  FETCH_INFO_FAILURE,
  FETCH_INFO_SUCCESS,
} from "../actions/actionTypes";

let initialState = { unitList: {}, functionList: {}};

const shallowCustomCompareUnits = (a, b) => {
  return (a.uid == b.uid && a.name == b.name && a.ip == b.ip && a.port == b.port)
}

const addUnitToList = (unitList, unit) => {
  console.log("At addUnitToList:", unitList, unit)
  console.log ("MAP:" , unitList.map( u => {shallowCustomCompareUnits(u, unit.uid)}).some(u => {u}))
  if(!unitList.map( u => {shallowCustomCompareUnits(u, unit.uid)}).some(u => {u})) {
    unitList[unit.uid] = unit
  }
  return unitList
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_INFO_SUCCESS: {
      const unit = {
        uid : action.payload.info.uid,
        ip  : action.payload.smServer.ip,
        port: action.payload.smServer.port,
        name: action.payload.info.name,
        cap:  action.payload.info.cap,
        time: Date.now(),
      }
      const localUnits = Object.assign( state.unitList, {[unit.uid]: unit });
      return Object.assign({}, state, { unitList : localUnits })
    }
    default: {
      return state;
    }
  }
};

// ... other actions
