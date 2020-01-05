import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet  } from 'react-native';
import { smStyles } from '../styles/SmFrameStyle';
import ShowDbgDoorbellIn from '../components/ShowDbgDoorbellIn';
import { connect } from 'react-redux';

import { getStatus } from '../actions/actionFetchStatus';

class DbgDoorbellIn extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const unit = this.props.unitList[this.props.elem.uid]
      const func = this.props.elem.cap
      this.props.getStatus(unit,func)
    }, 2000)
  }

  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={[smStyles.topFrame, {flexDirection: 'column'}]}>
        <ShowDbgDoorbellIn elem={this.props.elem} functionStatus={this.props.functionStatus}/>
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
)(DbgDoorbellIn);
