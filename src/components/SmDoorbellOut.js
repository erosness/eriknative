import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet  } from 'react-native';
import { smStyles } from './SmFrameStyle';
import { SmLock } from './SmLock';
import { SmDoor } from './SmDoor';
import { SmBell } from './SmBell';

class SmDoorbellOut extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount() {
    this.timer = setInterval(() => this.fetchInfo(), 5000)
  }

  fetchInfo() {
    this.setState({
      isLoading: true,
    })
  }

  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={[smStyles.topFrame, {flex: 4, flexDirection: 'column'}]}>
        <SmLock/>
        <SmDoor/>
        <SmBell/>
      </View>
    );

  };
}

export {SmDoorbellOut};
