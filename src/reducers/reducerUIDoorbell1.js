import {
  FETCH_INFO_SUCCESS,
  FETCH_STATUS_SUCCESS,
} from "../actions/actionTypes";

let initialState = {};

const pidDoorbellOut = 814169;

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_INFO_SUCCESS: {
      var o = state;
      action.payload.info.cap.forEach( e => {
        if(e.fid == pidDoorbellOut) {
          const func = action.payload.info
          o = Object.assign({}, state, {info: func})
        } else {
          return state;
        }
      })
      return o
    }
    case FETCH_STATUS_SUCCESS: {
      var o = state;
      if(action.payload.status.fid == pidDoorbellOut) {
        o = Object.assign({}, state, {status: action.payload.status})
      }
      return o
    }
    default: {
      return state;
    }
  }
  return state;
};

// ... other actions
