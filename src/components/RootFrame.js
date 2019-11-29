import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { smStyles } from './SmFrameStyle';

class RootFrame extends React.Component {
  render() {
    return (
      <View style={[smStyles.topFrame]}>
        <Text style={{textAlign: 'center',
                      padding: 5,
                      fontSize: 24,
                      backgroundColor: 'lightsteelblue'}} >
                      SmartMonitor
        </Text>
        <Text style={{backgroundColor: 'powderblue',
                      padding: 5,}}>
                      The SmartMonitor is a smart monitoring and
                      contol setup for seamless integration and
                      operation.
        </Text >
      </View>
    )
  };
}

export {RootFrame};
