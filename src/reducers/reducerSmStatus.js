import {
  FETCH_STATUS_REQUEST,
  FETCH_STATUS_FAILURE,
  FETCH_STATUS_SUCCESS,
} from "../actions/actionTypes";

let initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_STATUS_SUCCESS: {
      let localFuncs = Object.assign({}, state.functionList);
      console.log("reducerSmStatus:", state, action)
      action.payload.info.cap.forEach( e => {
        const func = {
          fid    : e.fid,
          cap    : e.cap,
          uid    : action.payload.info.uid,
          name   : action.payload.info.name,
          status : {},
          local  : {},
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
