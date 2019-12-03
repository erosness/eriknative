import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet  } from 'react-native';
import { smStyles } from '../styles/SmFrameStyle';
import ShowDbgDoorbellOut from '../components/ShowDbgDoorbellOut';
import { connect } from 'react-redux';

import { getDoorbellOut } from '../actions';

class DbgDoorbellOut extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const unit = this.props.unitList[this.props.elem.uid]
      console.log("Mount:",unit)
      this.props.getDoorbellOut(unit)
    }, 10000)
  }

  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={[smStyles.topFrame, {flexDirection: 'column'}]}>
        <ShowDbgDoorbellOut elem={this.props.elem}/>
      </View>
    );
  };
}

const mapStateToProps = state => {
  return {unitList: state.unitList};
};


export default connect(
  mapStateToProps,
  { getDoorbellOut },
)(DbgDoorbellOut);
