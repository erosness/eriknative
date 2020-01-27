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
       this.props.UIDoorbell.infoDoorbellOut == undefined ||
       this.props.UIDoorbell.infoDoorbellIn == undefined) {
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
            unitDoorbellIn={this.props.unitList[this.props.UIDoorbell.infoDoorbellIn.uid]}
            unitDoorbellOut={this.props.unitList[this.props.UIDoorbell.infoDoorbellOut.uid]}/>
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
  null,
)(UIDoorbellIn);
