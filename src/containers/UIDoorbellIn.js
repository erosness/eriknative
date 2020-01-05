import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet  } from 'react-native';
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

    return (
      // Try setting `flexDirection` to `column`.
      <View style={[smStyles.topFrame, {flexDirection: 'column'}]}>
        <ShowUIDoorbellIn
          func={this.props.functionStatus[this.props.doorbellOutFid]}/>
      </View>
    );
  };
}


const mapStateToProps = state => {
  return {unitList: state.unitList, functionStatus: state.functionStatus};
};

export default connect(
  mapStateToProps,
  { getStatus },
)(UIDoorbellIn);
