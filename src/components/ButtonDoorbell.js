import React, { Component } from 'react';
import { Text } from 'react-native'
import { Button } from 'native-base';
import { ButtonIndicator } from './ButtonIndicator';
import { Icon } from 'react-native-elements'


const onStyle = {backgroundColor: '#008000'}
const offStyle = {backgroundColor: '#ff0000'}

export class ButtonDoorbell extends Button {

  setDoorbellAge() {
    console.log("setDoorbellAge")
  }

  render() {

    let doorbellAgeColor = 'white'
    if (this.props.doorbellAge < 0)
      doorbellAgeColor = 'white'
    else if (this.props.doorbellAge < 1)
      doorbellAgeColor = 'red'
    else if (this.props.doorbellAge < 5)
      doorbellAgeColor = 'mediumvioletred'
    else if (this.props.doorbellAge < 60)
      doorbellAgeColor = 'mediumpurple'
    else if (this.props.doorbellAge < 300)
      doorbellAgeColor = 'mediumaquamarine'
    else if (this.props.doorbellAge < 36000)
      doorbellAgeColor = 'lightsteelblue'
    else
      doorbellAgeColor = 'lavender'

    return (
      <Button
        style={Object.assign(
          {},
          {backgroundColor: doorbellAgeColor },
          {height:30,
           flex:1,
           borderWidth:2,
           borderColor: 'black',
           margin: 2})}
         onPress={() => this.setDoorbellAge()}>
        <Text style={{textAlign: 'center'}}>{this.props.title}</Text>
      </Button>
  )};

}
