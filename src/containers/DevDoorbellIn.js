import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet, ActivityIndicator  } from 'react-native';
import { connect } from 'react-redux';
import { smStyles } from '../styles/SmFrameStyle';

import { putFunction } from '../actions/actionPutFunction'

class DevDoorbellIn extends React.Component {

  processState(inFunc, outFunc) {
    console.log("process-state", inFunc, outFunc)
    if(outFunc.status.doorbellAge < 0 ) {
      this.props.dispatch(
        putFunction(
          inFunc.info,
          "doorbell-in",
          "display",
          {"image":"black"}))
    }else if(outFunc.status.doorbellAge < 1 ){
      this.props.dispatch(
        putFunction(
          inFunc.info,
          "doorbell-in",
          "display",
          {"image":"ring","repeat":"yes"}))
    }else if(outFunc.status.doorbellAge < 60 ){
      this.props.dispatch(
        putFunction(
          inFunc.info,
          "doorbell-in",
          "display",
          {"image":"didring1"}))
    }else if(outFunc.status.doorbellAge < 300 ){
      this.props.dispatch(
        putFunction(
          inFunc.info,
          "doorbell-in",
          "display",
          {"image":"didring2"}))
    }else if(outFunc.status.doorbellAge < 36000 ){
      this.props.dispatch(
        putFunction(
          inFunc.info,
          "doorbell-in",
          "display",
          {"image":"didring3"}))
    }else{
      this.props.dispatch(
        putFunction(
          inFunc.info,
          "doorbell-in",
          "display",
          {"image":"didring4"}))
    }
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
