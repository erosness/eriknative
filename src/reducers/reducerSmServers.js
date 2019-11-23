import {
  FETCH_INFO_REQUEST,
  FETCH_INFO_FAILURE,
  FETCH_INFO_SUCCESS,
} from "../actions/actionTypes";

let initialState = { serverList: []};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_INFO_REQUEST: {
      const serverList = action.payload;
      return serverList
    }
    default: {
      return state;
    }
  }
};

// ... other actions
