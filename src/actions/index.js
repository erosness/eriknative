import {
  FETCH_INFO_REQUEST,
  FETCH_INFO_FAILURE,
  FETCH_INFO_SUCCESS,
} from "./actionTypes";

export const fetchInfoRequest = (ipPortPair) =>
  {
    return {
      type: FETCH_INFO_REQUEST,
      payload: {
        smServer: ipPortPair
    }
  }
};
