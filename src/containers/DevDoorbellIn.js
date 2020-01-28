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

  processVoiceButton() {
    let inUnit = this.props.unitList[this.props.DevDoorbell.infoDoorbellIn.uid]
    let outUnit = this.props.unitList[this.props.DevDoorbell.infoDoorbellOut.uid]
    if(this.props.DevDoorbell.statusDoorbellIn != undefined) {
      if(this.props.DevDoorbell.statusDoorbellIn.state == 'idle' &&
        this.props.DevDoorbell.statusDoorbellIn.callButton == 1) {
        this.props.dispatch(putFunction(inUnit,
                                        "doorbell-in",
                                        "connect",
                                        {"connect":outUnit.ip}))
      }
      if (this.props.DevDoorbell.statusDoorbellIn.state == 'connected' &&
        this.props.DevDoorbell.statusDoorbellIn.callButton == 0) {
        this.props.dispatch(putFunction(inUnit,
                                        "doorbell-in",
                                        "connect",
                                        {"disconnect":outUnit.ip}))
      }
    }

  }

processDoorIndicator(inFunc, outFunc){
  let doorStateColor = 'gray'
  if(this.props.DevDoorbell.statusDoorbellOut != undefined) {
    if (this.props.DevDoorbell.statusDoorbellOut.unlock == 0 &&
        this.props.DevDoorbell.statusDoorbellOut.dooropen == 0)
      doorStateColor = 'white'
    else if (this.props.DevDoorbell.statusDoorbellOut.unlock == 1 &&
             this.props.DevDoorbell.statusDoorbellOut.dooropen != 0)
      doorStateColor = 'green'
    else if (this.props.DevDoorbell.statusDoorbellOut.unlock == 1 &&
             this.props.DevDoorbell.statusDoorbellOut.dooropen != 1)
      doorStateColor = 'amber'
    else
      doorStateColor = 'red'
  }
  let unit = this.props.unitList[this.props.DevDoorbell.infoDoorbellIn.uid]
  this.props.dispatch(putFunction(unit,"doorbell-in","door-indicator",{color: doorStateColor}))
}

processDoorButton() {
  let inUnit = this.props.unitList[this.props.DevDoorbell.infoDoorbellIn.uid]
  let outUnit = this.props.unitList[this.props.DevDoorbell.infoDoorbellOut.uid]
  if(this.props.DevDoorbell.statusDoorbellIn != undefined &&
     this.props.DevDoorbell.statusDoorbellOut != undefined ) {
    if(this.props.DevDoorbell.statusDoorbellIn.unlockButton == 1 &&
      this.props.DevDoorbell.statusDoorbellOut.unlock == 0) {
      this.props.dispatch(putFunction(outUnit,
                                      "doorbell-out",
                                      "lock",
                                      {"unlock":1}))
      this.props.dispatch(putFunction(outUnit,
                                      "doorbell-out",
                                      "doorbell-age",
                                      {"age":-1}))
    }
    if(this.props.DevDoorbell.statusDoorbellIn.unlockButton == 0 &&
      this.props.DevDoorbell.statusDoorbellOut.unlock == 1) {
      this.props.dispatch(putFunction(outUnit,
                                      "doorbell-out",
                                      "lock",
                                      {"unlock":0}))
    }
  }

}

  processState() {
    this.processVoiceIndicator()
    this.processVoiceButton()
    this.processDoorButton()
    this.processDoorIndicator()
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
