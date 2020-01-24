import React, { Component } from 'react';
import { FlatList, Text, ActivityIndicator, View, StyleSheet  } from 'react-native';
import { smStyles } from '../styles/SmFrameStyle';
import ShowUIDoorbellIn from '../components/ShowUIDoorbellIn';
import { connect } from 'react-redux';

import { getStatus } from '../actions/actionFetchStatus';

class DevDisplay8x8 extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
    this.count = 0;
  }

  render() {
    this.count++;
    if((this.count % 10)==0){console.log("Count=", this.count)}
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

export default connect(
  mapStateToProps,
  { getStatus },
)(DevDisplay8x8);
