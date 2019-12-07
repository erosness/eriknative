import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, Button, Alert  } from 'react-native';
import { smStyles } from '../styles/SmFrameStyle';

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
      <View style={{height: 120}}>
      <Text style={{textAlign: 'center',
                    fontSize: 18,
                    backgroundColor: 'lightsteelblue'}} >
                    Function {this.props.elem.cap} at {this.props.elem.name}
      </Text>
      <View style={{flex: 1, flexDirection: 'row', flexBasis: 'auto', height: 100}}>
      <Button style={Object.assign(
          {},
          func.status.doorbell == 0 ? onStyle : offStyle,
          {height:80, flex:1})}
        title="Erik"
        onPress={() => console.log('Simple Button pressed')}/>
      <Text style={Object.assign({},func.status.unlock == 0 ? onStyle : offStyle, {height:80, flex:1})}> Unlock</Text>
      <Text style={Object.assign({},func.status.dooropen == 0 ? onStyle : offStyle, {height:80, flex:1})}> Dooropen</Text>
      </View>
      </View>
    );
  }
}
