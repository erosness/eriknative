import {
  FETCH_INFO_REQUEST,
  FETCH_INFO_FAILURE,
  FETCH_INFO_SUCCESS,
} from "../actions/actionTypes";

let initialState = {};

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
      const localUnits = Object.assign({}, state.unitList, {[unit.uid]: unit });
      return Object.assign({}, state, localUnits)
    }
    default: {
      return state;
    }
  }
  return state;
};

// ... other actions
