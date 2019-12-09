import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
import { smStyles } from '../styles/SmFrameStyle';

export default class ShowDbgDoorbellOut extends Component {

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
                    Doorbell: {func.status.doorbell} {"\n"}
                    Unlock: {func.status.unlock} {"\n"}
                    Dooropen: {func.status.dooropen}
      </Text>
      </>
    )
  };
}
