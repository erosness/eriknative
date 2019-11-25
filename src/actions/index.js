import {
  GET_INFO,
  FETCH_INFO_REQUEST,
  FETCH_INFO_FAILURE,
  FETCH_INFO_SUCCESS,
} from "./actionTypes";

export const getInfo = (ipPortPair) =>
  {
    console.log("At action getInfo:", ipPortPair)
    return {
      type: GET_INFO,
      payload: {
      smServer: ipPortPair
    }
  }
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

export const fetchInfoSuccess = (ipPortPair) =>
  {
    return {
      type: FETCH_INFO_SUCCESS,
      payload: {
        smServer: ipPortPair
    }
  }
};

function fetchInfo(server) {
  return function(dispatch) {
    dispatch(requestPosts(subreddit))
    console.log("Req=", server)
    let request = ("http://", server.ip, ":", server.port, "/v1/sm/info")
    return fetch("http://", server.ip, ":", server.port, "/v1/sm/info")
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => {
        console.log("Response:", json)
        dispatch(receivePosts(server, json))
      })
  }
}
