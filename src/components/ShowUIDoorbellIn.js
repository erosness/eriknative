import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
import { smStyles } from '../styles/SmFrameStyle';
import ButtonDoorbell from './ButtonDoorbell'
import ButtonVoice from './ButtonVoice'
import ButtonLock from './ButtonLock'

export default class ShowUIDoorbellIn extends Component {

  render() {
    if( this.props.isLoading ){
      return(
          <ActivityIndicator/>
      )
    }
    const func = this.props.func;
    if(func.statusDoorbellOut === undefined){
      return(
          <ActivityIndicator/>
      )
    }
    return(
      <View style={{height: 50}}>
        <Text style={{textAlign: 'center',
                      fontSize: 18,
                      backgroundColor: 'steelblue'}} >
                      Doorbell In {func.statusDoorbellOut.doorbellAge} {func.statusDoorbellOut.doorbell}
        </Text>
        <View style={{flex: 1, flexDirection: 'row', flexBasis: 'auto', height: 100}}>
          <ButtonDoorbell
            func={func}
            unit={this.props.unit}
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
