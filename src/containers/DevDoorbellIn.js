import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet, ActivityIndicator  } from 'react-native';
import { connect } from 'react-redux';
import { smStyles } from '../styles/SmFrameStyle';

import { putFunction } from '../actions/actionPutFunction'

class DevDoorbellIn extends React.Component {

  getImageObject(time){
    if (time < 0) { return  {"image":"black"}}
    if (time < 1) { return  {"image":"ring","repeat":"yes"}}
    if (time < 60) { return  {"image":"didring1"}}
    if (time < 300) { return  {"image":"didring2"}}
    if (time < 36000) { return  {"image":"didring3"}}
     return  {"image":"didring4"}
  }

  processState(inFunc, outFunc) {
    console.log("process-state", inFunc, outFunc)
      this.props.dispatch(
        putFunction(
          inFunc.info,
          "doorbell-in",
          "display",
          this.getImageObject(outFunc.status.doorbellAge)
        )
      )
    }

  render() {
    if (typeof this.props.functionStatus !== 'undefined' &&
        typeof this.props.functionStatus[this.props.doorbellInFid] !== 'undefined' &&
        typeof this.props.functionStatus[this.props.doorbellOutFid] !== 'undefined'){
      const inFunc = this.props.functionStatus[this.props.doorbellInFid]
      const outFunc = this.props.functionStatus[this.props.doorbellOutFid]
      this.processState(inFunc, outFunc)
      return (
        // Try setting `flexDirection` to `column`.
        <View style={[smStyles.topFrame, {flexDirection: 'column'}]}>
          <Text>
            Debug doorbell in - {outFunc.status.doorbellAge}
          </Text>
        </View>
    )}else{
      return(
      <View style={[smStyles.topFrame, {flexDirection: 'column'}]}>
        <ActivityIndicator/>
      </View>
    )}
  };
}


const mapStateToProps = state => {
  return {unitList: state.unitList, functionStatus: state.functionStatus};
};

export default connect(
  mapStateToProps,
  null,
)(DevDoorbellIn);
