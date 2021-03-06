import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet  } from 'react-native';
import { smStyles } from '../styles/SmFrameStyle';

class SmDoor extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isLocking: true}
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
      <View style={{width: 50, height: 50, alignSelf: 'stretch', backgroundColor: 'skyblue'}}>
        <Text> Door= </Text>
      </View>
    );
  };
}

export {SmDoor};
