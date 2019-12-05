import {
  FETCH_INFO_REQUEST,
  FETCH_INFO_FAILURE,
  FETCH_INFO_SUCCESS,
} from "../actions/actionTypes";

let initialState = {};

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
      let localFuncs = Object.assign({}, state.functionList);
      action.payload.info.cap.forEach( e => {
        const func = {
          fid    : e.fid,
          cap    : e.cap,
          uid    : action.payload.info.uid,
          name   : action.payload.info.name,
        }
        localFuncs[e.fid]= func
      })
      return Object.assign({}, state, localFuncs)
    }
    default: {
      return state;
    }
  }
  return state;
};

// ... other actions
