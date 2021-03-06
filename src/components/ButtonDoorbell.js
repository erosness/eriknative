import React, { Component } from 'react';
import { Text } from 'react-native'
import { Button } from 'native-base';
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux'

import { putFunction } from '../actions/actionPutFunction'

const onStyle = {backgroundColor: '#008000'}
const offStyle = {backgroundColor: '#ff0000'}

class ButtonDoorbell extends Component {

  setDoorbellAge(e) {
    this.props.dispatch(putFunction(this.props.unit,"doorbell-out","doorbell-age",{doorbellAge:-1}))
  }

  render() {

    let doorbellAgeColor = 'white'
    if (this.props.func.statusDoorbellOut.doorbellAge < 0)
      doorbellAgeColor = 'white'
    else if (this.props.func.statusDoorbellOut.doorbellAge < 1)
      doorbellAgeColor = 'red'
    else if (this.props.func.statusDoorbellOut.doorbellAge < 5)
      doorbellAgeColor = 'mediumvioletred'
    else if (this.props.func.statusDoorbellOut.doorbellAge < 60)
      doorbellAgeColor = 'mediumpurple'
    else if (this.props.func.statusDoorbellOut.doorbellAge < 300)
      doorbellAgeColor = 'mediumaquamarine'
    else if (this.props.func.statusDoorbellOut.doorbellAge < 36000)
      doorbellAgeColor = 'lightsteelblue'
    else
      doorbellAgeColor = 'lavender'

    return (
      <Button
        id='77'
        style={Object.assign(
          {},
          {backgroundColor: doorbellAgeColor },
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

export default connect()(ButtonDoorbell)
