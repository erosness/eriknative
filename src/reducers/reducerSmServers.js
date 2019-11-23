import {
  FETCH_INFO_REQUEST,
  FETCH_INFO_FAILURE,
  FETCH_INFO_SUCCESS,
} from "../actions/actionTypes";

let initialState = { serverList: []};

export default function(state = initialState, action) {
  console.log("Reducer-->", state)
  switch (action.type) {
    case FETCH_INFO_REQUEST: {
      const serverList = action.payload;
      return {...state , serverList}
{/*      console.log("Begin in reducer")
      console.log(serverList)
      console.log(result) */}
    }
    default: {
      return state;
    }
  }
};

// ... other actions
