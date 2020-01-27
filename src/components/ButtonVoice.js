import React, { Component } from 'react';
import { Text } from 'react-native'
import { Button } from 'native-base';
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux'

import { putFunction } from '../actions/actionPutFunction'

class ButtonVoice extends Component {

  connectVoice(e) {
    this.props.dispatch(putFunction(this.props.func.infoDoorbellIn,"doorbell-in","connect",{"connect":"pi@10.0.1.108"}))
  }

  render() {

    let voiceStateColor = 'white'

    if(this.props.func.statusDoorbellIn != undefined) {
      if (this.props.func.statusDoorbellIn.state == 'connected')
        voiceStateColor = 'red'
      else if (this.props.func.statusDoorbellIn.state == 'connecting')
        voiceStateColor = 'lightsteelblue'
      else if (this.props.func.statusDoorbellIn.state == 'idle')
        voiceStateColor = 'white'
      else
        voiceStateColor = 'gray'
    }

    return (
      <Button
        id='77'
        style={Object.assign(
          {},
          {backgroundColor: voiceStateColor },
          {height:30,
           flex:1,
           borderWidth:2,
           borderColor: 'black',
           margin: 2})}
           onPress={(e)=>this.connectVoice(e)}>
        <Text style={{textAlign: 'center'}}>{this.props.title}</Text>
      </Button>
  )};

}

export default connect()(ButtonVoice)
