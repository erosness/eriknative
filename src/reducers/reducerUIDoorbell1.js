import {
  FETCH_INFO_SUCCESS,
  FETCH_STATUS_SUCCESS,
} from "../actions/actionTypes";

let initialState = {};

const fidDoorbellOut = 814169;
const fidDoorbellIn = 4040403;

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_INFO_SUCCESS: {
      var o = state;
      action.payload.info.cap.forEach( e => {
        if(e.fid == fidDoorbellOut) {
          const func = action.payload.info
          o = Object.assign({}, state, {infoDoorbellOut: func})
        }
      })
      action.payload.info.cap.forEach( e => {
        if(e.fid == fidDoorbellIn) {
          const func = action.payload.info
          o = Object.assign({}, state, {infoDoorbellIn: func})
        }
      })
      return o
    }
    case FETCH_STATUS_SUCCESS: {
      var o = state;
      if(action.payload.status.fid == fidDoorbellOut) {
        o = Object.assign({}, state, {statusDoorbellOut: action.payload.status})
      }
      if(action.payload.status.fid == fidDoorbellIn) {
        o = Object.assign({}, state, {statusDoorbellIn: action.payload.status})
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
