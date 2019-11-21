import { NEW_IP_PORT_PAIR } from '../actions/actionTypes';

let initialState = { serverList: []};

export default function(state = initialState, action) {
  console.log("Reducer-->", state)
  switch (action.type) {
    case NEW_IP_PORT_PAIR: {
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
