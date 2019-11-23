import {
  FETCH_INFO_REQUEST,
  FETCH_INFO_FAILURE,
  FETCH_INFO_SUCCESS,
} from "./actionTypes";

export const fetchInfoRequest = (ipPortPair) =>
  {
    console.log("At action/index.js:9", ipPortPair)
    return {
      type: FETCH_INFO_REQUEST,
      payload: ipPortPair
    }
};
