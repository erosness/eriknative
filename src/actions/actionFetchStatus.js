import {
  FETCH_STATUS_REQUEST,
  FETCH_STATUS_FAILURE,
  FETCH_STATUS_SUCCESS,
} from "./actionTypes";

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

export const fetchStatusSuccess = (info,status) =>
  {
    return {
      type: FETCH_STATUS_SUCCESS,
      payload: {
        info: info,
        status: status
    }
  }
};

function fetchStatus(unit, func) {
  return function(dispatch) {
    dispatch(fetchStatusRequest(unit))
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
