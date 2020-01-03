import {
PUT_FUNCTION_REQUEST,
PUT_FUNCTION_FAILURE,
PUT_FUNCTION_SUCCESS,
} from "./actionTypes";

export const putFunction = (unit, func, name, payload) =>
{
  return putF(unit, func, name, payload)
};

export const putRequest = (unit) =>
  {
    return {
      type: PUT_FUNCTION_REQUEST,
      payload: {
        smServer: unit
    }
  }
};

export const putFailure = (unit) =>
  {
    return {
      type: PUT_FUNCTION_FAILURE,
      payload: {
        smServer: unit
    }
  }
};

export const putSuccess = (info, status) =>
  {
    return {
      type: PUT_FUNCTION_SUCCESS,
      payload: {
        info: info,
        status: status
    }
  }
};

function putF(unit, func, name, payload) {
  return function(dispatch) {
    dispatch(putRequest(unit))
    const url = "http://" + unit.ip + ":" + unit.port + "/v1/sm/" + func + "/" + name
    console.log("URL=",url)
    return fetch(url,{
        method:'post',
        body: JSON.stringify(payload)})
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
/*        json => {dispatch(putSuccess(unit, json))} */
            json => console.log("putSuccess", unit, json)
      )
      .catch(
        error => console.log("Inside fetchStatus: got error:", error )
      )
  }
}
