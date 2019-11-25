import {
  GET_INFO,
  FETCH_INFO_REQUEST,
  FETCH_INFO_FAILURE,
  FETCH_INFO_SUCCESS,
} from "./actionTypes";

export const getInfo = (ipPortPair) =>
{
  return fetchInfo(ipPortPair)
};

export const fetchInfoRequest = (ipPortPair) =>
  {
    return {
      type: FETCH_INFO_REQUEST,
      payload: {
        smServer: ipPortPair
    }
  }
};

export const fetchInfoFailure = (ipPortPair) =>
  {
    return {
      type: FETCH_INFO_FAILURE,
      payload: {
        smServer: ipPortPair
    }
  }
};

export const fetchInfoSuccess = (server,data) =>
  {
    return {
      type: FETCH_INFO_SUCCESS,
      payload: {
        smServer: server,
        info: data
    }
  }
};

function fetchInfo(ipPortPair) {
  return function(dispatch) {
    dispatch(fetchInfoRequest(ipPortPair))
    return fetch("http://" + ipPortPair.ip + ":" + ipPortPair.port + "/v1/sm/info")
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => {
        dispatch(fetchInfoSuccess(ipPortPair, json))
      })
  }
}
