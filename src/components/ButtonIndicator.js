import React, { Component } from 'react';
import { Text } from 'react-native'
import { Button } from 'native-base';
import { Icon } from 'react-native-elements'


const onStyle = {backgroundColor: '#008000'}
const offStyle = {backgroundColor: '#ff0000'}

export class ButtonIndicator extends Component {

  render() {
    return (
      <Button
        style={Object.assign(
          {},
          this.props.indicatorStatus == 0 ? offStyle : onStyle,
          {height:30,
           flex:1,
           borderWidth:2,
           borderColor: 'black',
           margin: 2})}
         onPress={() => console.log('Simple Button pressed')}>
        <Text style={{textAlign: 'center'}}>{this.props.title}</Text>
      </Button>
  )};

}
