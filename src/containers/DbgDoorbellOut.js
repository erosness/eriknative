import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet  } from 'react-native';
import { smStyles } from '../styles/SmFrameStyle';
import ShowDbgDoorbellOut from '../components/ShowDbgDoorbellOut';
import { connect } from 'react-redux';

import { getDoorbellOut } from '../actions';

const unit = {ip: "10.0.1.107", port: 5055}

class DbgDoorbellOut extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.getDoorbellOut(unit)
    this.timer = setInterval(() => this.props.getDoorbellOut(unit), 10000)
  }

  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={[smStyles.topFrame, {flexDirection: 'column'}]}>
        <ShowDbgDoorbellOut
          cap={this.props.cap}
          name={this.props.name}/>
      </View>
    );
  };
}

export default connect(
  null,
  { getDoorbellOut },
)(DbgDoorbellOut);
