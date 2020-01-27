import React, { Component } from 'react';
import { Text } from 'react-native'
import { Button } from 'native-base';
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux'

import { putFunction } from '../actions/actionPutFunction'

class ButtonLock extends Component {

  unlockDoor(e) {
    if(this.props.func.statusDoorbellOut != undefined) {
      if(this.props.func.statusDoorbellOut.unlock == 0) {
        this.props.dispatch(putFunction(this.props.unit,
                                        "doorbell-out",
                                        "lock",
                                        {"unlock":1}))
      } else {
        this.props.dispatch(putFunction(this.props.unit,
                                        "doorbell-out",
                                        "lock",
                                        {"unlock":0}))
      }
    }
  }

  render() {
    let doorStatusColor = 'gray'
    if(this.props.func.statusDoorbellOut != undefined) {
      if (this.props.func.statusDoorbellOut.unlock == 0 &&
          this.props.func.statusDoorbellOut.dooropen == 0)
        doorStatusColor = 'white'
      else if (this.props.func.statusDoorbellOut.unlock == 1 &&
               this.props.func.statusDoorbellOut.dooropen == 0)
        doorStatusColor = 'green'
      else if (this.props.func.statusDoorbellOut.unlock == 1 &&
               this.props.func.statusDoorbellOut.dooropen == 1)
        doorStatusColor = 'lightsalmon'
      else
        doorStatusColor = 'red'
    }

    return (
      <Button
        id='77'
        style={Object.assign(
          {},
          {backgroundColor: doorStatusColor },
          {height:30,
           flex:1,
           borderWidth:2,
           borderColor: 'black',
           margin: 2})}
           onPress={(e)=>this.unlockDoor(e)}>
        <Text style={{textAlign: 'center'}}>{this.props.title}</Text>
      </Button>
  )};

}

export default connect()(ButtonLock)
