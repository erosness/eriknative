import {
  GET_INFO,
  FETCH_INFO_REQUEST,
  FETCH_INFO_FAILURE,
  FETCH_INFO_SUCCESS,
  FETCH_DOORBELL_OUT_REQUEST,
  FETCH_DOORBELL_OUT_FAILURE,
  FETCH_DOORBELL_OUT_SUCCESS,
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

export const getDoorbellOut = (unit) =>
{
  console.log("Action getDoorbellOut:", unit)
  return fetchDoorbellOut(unit)
};

export const fetchDoorbellOutRequest = (unit) =>
  {
    return {
      type: FETCH_DOORBELL_OUT_REQUEST,
      payload: {
        smServer: unit
    }
  }
};

export const fetchDoorbellOutFailure = (unit) =>
  {
    return {
      type: FETCH_DOORBELL_OUT_FAILURE,
      payload: {
        smServer: unit
    }
  }
};

export const fetchDoorbellOutSuccess = (unit,data) =>
  {
    console.log("Fetch doorbell status success:",data)
    return {
      type: FETCH_DOORBELL_OUT_SUCCESS,
      payload: {
        smServer: unit,
        info: data
    }
  }
};

function fetchDoorbellOut(unit) {
  return function(dispatch) {
    dispatch(fetchDoorbellOutRequest(unit))
    return fetch("http://" + unit.ip + ":" + unit.port + "/v1/sm/doorbell-out/status")
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => {
        dispatch(fetchDoorbellOutSuccess(unit, json))
      })
  }
}
