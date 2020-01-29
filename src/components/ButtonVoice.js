import React, { Component } from 'react';
import { Text } from 'react-native'
import { Button } from 'native-base';
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux'

import { putFunction } from '../actions/actionPutFunction'

class ButtonVoice extends Component {

  connectVoice(e) {
    if(this.props.func.statusDoorbellIn != undefined) {
      if(this.props.func.statusDoorbellIn.state == 'idle') {
        this.props.dispatch(putFunction(this.props.unit,
                                        "doorbell-in",
                                        "connect",
                                        {"connect":this.props.outUnitIP}))
      } else {
        this.props.dispatch(putFunction(this.props.unit,
                                        "doorbell-in",
                                        "connect",
                                        {"disconnect":this.props.outUnitIP}))
        this.props.dispatch(putFunction(this.props.outUnitIP,
                                        "doorbell-in",
                                        "connect",
                                        {"disconnect":this.props.unit}))
      }
    }
  }

  render() {

    let voiceStateColor = 'gray'

    if(this.props.func.statusDoorbellIn != undefined &&
       this.props.func.statusDoorbellOut != undefined) {
      if (this.props.func.statusDoorbellIn.state == 'connected' &&
          this.props.func.statusDoorbellOut.state == 'connected')
        voiceStateColor = 'green'
      else if (this.props.func.statusDoorbellIn.state == 'idle' &&
               this.props.func.statusDoorbellOut.state != 'idle')
        voiceStateColor = 'lightsalmon'
      else
        voiceStateColor = 'white'
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
