import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
import { smStyles } from '../styles/SmFrameStyle';
import ButtonDoorbell from './ButtonDoorbell'
import ButtonVoice from './ButtonVoice'
import ButtonLock from './ButtonLock'

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
      <View style={{height: 50}}>
        <Text style={{textAlign: 'center',
                      fontSize: 18,
                      backgroundColor: 'steelblue'}} >
                      UI {this.props.fid} {func.status.doorbellAge} {func.status.doorbell}
        </Text>
        <View style={{flex: 1, flexDirection: 'row', flexBasis: 'auto', height: 100}}>
          <ButtonDoorbell
            func={func}
            title={"Doorbell"}/>
          <ButtonVoice
            func={func}
            title={"Voice"}/>
          <ButtonLock
            func={func}
            title={"Lock"}/>
        </View>
      </View>
    )
  };
}
