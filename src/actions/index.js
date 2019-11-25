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

function fetchInfo(server) {
  return function(dispatch) {
{/*    dispatch(requestPosts(subreddit)) */}
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
