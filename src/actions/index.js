import {
  GET_INFO,
  FETCH_INFO_REQUEST,
  FETCH_INFO_FAILURE,
  FETCH_INFO_SUCCESS,
  FETCH_STATUS_REQUEST,
  FETCH_STATUS_FAILURE,
  FETCH_STATUS_SUCCESS,
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
        response => {
          if(response.ok ){
            return response.json()
          }else{
            return Promise.reject("Feil i fetchInfo")
          }
        },
        error => console.log('An error occurred.', error)
      )
      .then(json => {
        if(typeof json !== 'undefined') {
          return dispatch(fetchInfoSuccess(ipPortPair, json))
        }
      })
      .catch()
  }
}

export const getStatus = (unit, func) =>
{
  return fetchStatus(unit, func)
};

export const fetchStatusRequest = (unit) =>
  {
    return {
      type: FETCH_STATUS_REQUEST,
      payload: {
        smServer: unit
    }
  }
};

export const fetchStatusFailure = (unit) =>
  {
    return {
      type: FETCH_STATUS_FAILURE,
      payload: {
        smServer: unit
    }
  }
};

export const fetchStatusSuccess = (unit,data) =>
  {
    return {
      type: FETCH_STATUS_SUCCESS,
      payload: {
        smServer: unit,
        info: data
    }
  }
};

function fetchStatus(unit, func) {
  return function(dispatch) {
    dispatch(fetchStatusRequest(unit))
    console.log("At fetchStatus:",unit,func)
    return fetch("http://" + unit.ip + ":" + unit.port + "/v1/sm/" + func + "/status")
      .then(
        response => {
          if(response.ok ){
            return response.json()
          }else{
            return Promise.reject("Erikfeil!");
          }
        },
        error => console.log('An error occurred.', error)
      )
      .then(
        json => {dispatch(fetchStatusSuccess(unit, json))}
      )
      .catch(
        error => console.log("Inside fetchStatus: got error:", error )
      )
  }
}
