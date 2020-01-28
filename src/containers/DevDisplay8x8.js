import React, { Component } from 'react';
import { FlatList, Text, ActivityIndicator, View, StyleSheet  } from 'react-native';
import { smStyles } from '../styles/SmFrameStyle';
import ShowUIDoorbellIn from '../components/ShowUIDoorbellIn';
import { connect } from 'react-redux';

import { putFunction } from '../actions/actionPutFunction';

class DevDisplay8x8 extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
    this.count = 0;
  }

  setDisplay8x8Image(image) {
    let unit = this.props.unitList[this.props.Display8x8.infoDisplay8x8.uid]
    this.props.dispatch(putFunction(unit,"display8x8","image",image))
  }

  getImageObject(time){
    if (time.unlock != 0)  { return  {"image":"key"}}
    if (time.doorbellAge < 0) { return  {"image":"black"}}
    if (time.doorbellAge < 1) { return  {"image":"ring","repeat":"yes"}}
    if (time.doorbellAge < 60) { return  {"image":"didring1"}}
    if (time.doorbellAge < 300) { return  {"image":"didring2"}}
    if (time.doorbellAge < 36000) { return  {"image":"didring3"}}
     return  {"image":"didring4"}
  }

  processDisplayState() {
    let image = this.getImageObject(this.props.Display8x8.statusDoorbellOut)
    let oldImage = this.props.Display8x8.statusDisplay8x8
    if (image["image"] != oldImage["image"]) {
      this.setDisplay8x8Image(image)
    }
  }

  render() {
    if(this.props.Display8x8.statusDoorbellOut != undefined &&
       this.props.Display8x8.statusDisplay8x8 != undefined) {
      this.processDisplayState()
    }
    return(
      <View style={[smStyles.topFrame, {flexDirection: 'column'}]}>
        <ActivityIndicator/>
      </View>
    )
  };
}


const mapStateToProps = state => {
  return {unitList: state.unitList, Display8x8: state.functionDisplay8x8};
};

export default connect(mapStateToProps)(DevDisplay8x8);
