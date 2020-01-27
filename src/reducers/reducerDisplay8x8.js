import {
  FETCH_INFO_SUCCESS,
  FETCH_STATUS_SUCCESS,
} from "../actions/actionTypes";

let initialState = {};

const fidDisplay8x8 = 1890403;
const fidDoorbellOut = 814169;

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_INFO_SUCCESS: {
      var o = state;
      action.payload.info.cap.forEach( e => {
        if(e.fid == fidDisplay8x8 ) {
          const func = action.payload.info
          o = Object.assign({}, state, {infoDisplay8x8: func})
        }
      })
      action.payload.info.cap.forEach( e => {
        if(e.fid == fidDoorbellOut ) {
          const func = action.payload.info
          o = Object.assign({}, state, {infoDoorbellOut: func})
        }
      })
      return o
    }
    case FETCH_STATUS_SUCCESS: {
      var o = state;
      if(action.payload.status.fid == fidDisplay8x8 ) {
        o = Object.assign({}, state, {statusDisplay8x8: action.payload.status})
      }
      if(action.payload.status.fid == fidDoorbellOut) {
        o = Object.assign({}, state, {statusDoorbellOut: action.payload.status})
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
