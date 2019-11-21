import { NEW_IP_PORT_PAIR } from '../actions/actionTypes';

let initialState = { published_units: []};

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_IP_PORT_PAIR: {
      return state;
    }
    default: {
      return state;
    }
  }
};

// ... other actions
