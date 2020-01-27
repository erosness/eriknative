import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet, ActivityIndicator  } from 'react-native';
import { connect } from 'react-redux';
import { smStyles } from '../styles/SmFrameStyle';

import { putFunction } from '../actions/actionPutFunction'

class DevDoorbellIn extends React.Component {

  processVoiceIndicator(inFunc, outFunc){
    let voiceStateColor = 'gray'
    if(this.props.DevDoorbell.statusDoorbellIn != undefined &&
       this.props.DevDoorbell.statusDoorbellOut != undefined) {
      if (this.props.DevDoorbell.statusDoorbellIn.state == 'connected' &&
          this.props.DevDoorbell.statusDoorbellOut.state == 'connected')
        voiceStateColor = 'green'
      else if (this.props.DevDoorbell.statusDoorbellIn.state == 'idle' &&
               this.props.DevDoorbell.statusDoorbellOut.state != 'idle')
        voiceStateColor = 'amber'
      else
        voiceStateColor = 'white'
    }
    let unit = this.props.unitList[this.props.DevDoorbell.infoDoorbellIn.uid]
    this.props.dispatch(putFunction(unit,"doorbell-in","voice-indicator",{color: voiceStateColor}))
  }

  processState(inFunc, outFunc) {
    this.processVoiceIndicator()
  }

  render() {
    if(this.props.DevDoorbell !== undefined &&
       this.props.DevDoorbell != {} &&
       this.props.DevDoorbell.infoDoorbellOut != undefined &&
        this.props.DevDoorbell.infoDoorbellIn != undefined) {
     this.processState()

      return(
        <View style={[smStyles.topFrame, {flexDirection: 'column'}]}>
          <Text>Processing...</Text>
          <ActivityIndicator/>
        </View>
      )
    } else {
      return(
        <View style={[smStyles.topFrame, {flexDirection: 'column'}]}>
        <Text>Not processing...</Text>
          <ActivityIndicator/>
        </View>
      )
    }
  };
}

const mapStateToProps = state => {
  return {unitList: state.unitList, DevDoorbell: state.functionDevDoorbell1};
};

export default connect(
  mapStateToProps,
  null,
)(DevDoorbellIn);
