import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { smStyles } from '../styles/SmFrameStyle';

class RootFrame extends React.Component {
  render() {
    return (
      <View style={[smStyles.topFrame]}>
        <Text style={{textAlign: 'center',
                      fontSize: 24,
                      backgroundColor: 'lightsteelblue'}} >
                      SmartMonitor
        </Text>
        <Text style={{backgroundColor: 'powderblue'}}>
                      The SmartMonitor is a smart monitoring and
                      contol setup for seamless integration and
                      operation.
        </Text >
      </View>
    )
  };
}

export {RootFrame};
