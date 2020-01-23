import {
  FETCH_STATUS_REQUEST,
  FETCH_STATUS_FAILURE,
  FETCH_STATUS_SUCCESS,
  PUT_FUNCTION_SUCCESS,
} from "../actions/actionTypes";

let initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_STATUS_SUCCESS: {
      let localFuncs = Object.assign({}, action.payload);
      return Object.assign({}, state,  {[action.payload.status.fid]:localFuncs})
    }
    default: {
      return state;
    }
  }
  return state;
};

// ... other actions
