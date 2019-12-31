import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
import { smStyles } from '../styles/SmFrameStyle';

export default class ShowUIDoorbellIn extends Component {

  render() {
    if( this.props.isLoading ||
        Object.keys(this.props.functionStatus).length == 0){
      return(
          <ActivityIndicator/>
      )
    }
    const func = this.props.functionStatus[this.props.fid];
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
                    UI {this.props.fid} {func.status.doorbellAge} {func.status.doorbell}
      </Text>
      </>
    )
  };
}
