import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
import { smStyles } from '../styles/SmFrameStyle';

export default class ShowDbgDoorbellIn extends Component {

  render() {
    if( this.props.isLoading ||
        Object.keys(this.props.functionStatus).length == 0){
      return(
          <ActivityIndicator/>
      )
    }
    const func = this.props.functionStatus[this.props.elem.fid];
    if(typeof func === 'undefined'){
      return(
          <ActivityIndicator/>
      )
    }

    return(
      <>
      <Text style={{textAlign: 'center',
                    fontSize: 18,
                    backgroundColor: 'steelblue'}} >
                    Debug {this.props.elem.cap} at {this.props.elem.name}
      </Text>
      <Text style={{textAlign: 'left',
                    fontSize: 12,
                    backgroundColor: 'lightgray'}} >
                    Connection type: {func.status.connection} {"\n"}
                    Connection state: {func.status.state} {"\n"}
                    Door indicator: {func.status.doorIndicator} {"\n"}
                    Voice indicator: {func.status.voiceIndicator} {"\n"}
                    Connect button: {func.status.callButton} {"\n"}
                    Unlock button: {func.status.unlockButton}
      </Text>
      </>
    )
  };
}
