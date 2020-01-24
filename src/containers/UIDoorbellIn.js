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
  }

  render() {
    if(this.props.UIDoorbell === undefined ||
       this.props.UIDoorbell == {} ||
       this.props.UIDoorbell.info == undefined) {
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
            func={this.props.UIDoorbell}
            unit={this.props.unitList[this.props.UIDoorbell.info.uid]}/>
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
