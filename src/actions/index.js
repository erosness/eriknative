import { NEW_IP_PORT_PAIR } from "./actionTypes";

export const newIpPortPair = (serverList) =>
  {
    return {
      type: NEW_IP_PORT_PAIR,
      payload: serverList
    }
};
