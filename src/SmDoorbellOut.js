import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet  } from 'react-native';
import { smStyles } from './SmFrameStyle';

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
        <View style={{width: 50, height: 50, alignSelf: 'stretch', backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );

  };
}

export {SmDoorbellOut};
