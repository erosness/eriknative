import React, { Component } from 'react';
import { FlatList, Text, ActivityIndicator, View, StyleSheet  } from 'react-native';
import { smStyles } from '../styles/SmFrameStyle';
import ShowUIDoorbellIn from '../components/ShowUIDoorbellIn';
import { connect } from 'react-redux';

import { getStatus } from '../actions/actionFetchStatus';

class UIDoorbellIn extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
    console.log("New UIDoorbellIn")
    this.count = 0;
  }

  render() {
    this.count++;
    if((this.count % 10)==0){console.log("Count=", this.count)}
    console.log("render in UIDoorbellIn:", this)
    if(this.props.UIDooxrbell === undefined){
      return(
        <View style={[smStyles.topFrame, {flexDirection: 'column'}]}>
          <ActivityIndicator/>
        </View>
      )
    } else {
      return (
        // Try setting `flexDirection` to `column`.
        <View style={[smStyles.topFrame, {flexDirection: 'column'}]}>
          <ShowUIDoorbellIn
            func={this.props.UIDoorbell[this.props.doorbellOutFid]}/>
        </View>
      );
    }
  };
}


const mapStateToProps = state => {
  return {unitList: state.unitList, UIDoorbell: state.functionUIDoorbell1};
};

export default connect(
  mapStateToProps,
  { getStatus },
)(UIDoorbellIn);
