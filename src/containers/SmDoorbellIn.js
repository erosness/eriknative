import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet  } from 'react-native';
import { smStyles } from '../styles/SmFrameStyle';
import ShowDoorbellIn from '../components/ShowDoorbellIn';
import { connect } from 'react-redux';

import { getStatus } from '../actions';

class SmDoorbellIn extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  render() {

    return (
      // Try setting `flexDirection` to `column`.
      <View style={[smStyles.topFrame, {flexDirection: 'column'}]}>
        <ShowDoorbellIn elem={this.props.elem} functionStatus={this.props.functionStatus}/>
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
)(SmDoorbellIn);
