import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, Alert  } from 'react-native';
import { Button } from 'native-base';
import { smStyles } from '../styles/SmFrameStyle';
import { ButtonIndicator } from './ButtonIndicator'

export default class ShowDoorbellOut extends Component {

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
    const onStyle = {backgroundColor: '#008000'}
    const offStyle = {backgroundColor: '#ff0000'}
    return(
      <View style={{height: 50}}>
        <Text style={{textAlign: 'center',
                      fontSize: 18,
                      backgroundColor: 'lightsteelblue'}} >
                      Function {this.props.elem.cap} at {this.props.elem.name}
        </Text>
        <View style={{flex: 1, flexDirection: 'row', flexBasis: 'auto', height: 100}}>
          <ButtonIndicator
            indicatorStatus={func.status.doorbell}
            title={"Doorbell"}
            onPress={() => console.log('Simple Button pressed')}/>
          <ButtonIndicator
            indicatorStatus={func.status.unlock}
            title={"Unlock"}
            onPress={() => console.log('Simple Button pressed')}/>
          <ButtonIndicator
            indicatorStatus={func.status.dooropen}
            title={"Dooropen"}
            onPress={() => console.log('Simple Button pressed')}/>
        </View>
      </View>
    );
  }
}
