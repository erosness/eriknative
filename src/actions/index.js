import { NEW_IP_PORT_PAIR } from "./actionTypes";

export const newIpPortPair = (serverList) =>
  {
    console.log("At action!");
    return {
      type: NEW_IP_PORT_PAIR,
      serverList
    }
};
