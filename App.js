import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import {TestFrame1} from './src/TestFrame1';
import {SmServers} from './src/SmServers';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TestFrame1 />
        <SmServers />
      </div>
    );
  }
}
