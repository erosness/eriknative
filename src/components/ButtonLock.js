import React, { Component } from 'react';
import { Text } from 'react-native'
import { Button } from 'native-base';
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux'

import { putFunction } from '../actions/actionPutFunction'

class ButtonLock extends Component {

  setDoorbellAge(e) {
    this.props.dispatch(putFunction(this.props.func.info,"doorbell-out","doorbell-age",{doorbellAge:-1}))
  }

  render() {

    let doorStatusColor = 'white'
    if (this.props.func.status.unlock == 0)
      doorStatusColor = 'white'
    else if (this.props.func.status.dooropen == 0)
      doorStatusColor = 'red'
    else
      doorStatusColor = 'steelblue'

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
           onPress={(e)=>this.setDoorbellAge(e)}>
        <Text style={{textAlign: 'center'}}>{this.props.title}</Text>
      </Button>
  )};

}

export default connect()(ButtonLock)
