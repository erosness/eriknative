import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import {TestFrame1} from './TestFrame1';
import {SmServers} from './SmServers';
import {SmDoorbellOut} from './SmDoorbellOut';
import {SmInfo} from './SmInfo';
import rootReducer from '../reducers'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
  web: 'Web platform'
});

const store = createStore(rootReducer)

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column',height: 80}}>
        <Text>{instructions}</Text>
        <TestFrame1 style={{height: 80, borderWidth: 5}}/>
        <SmServers style={{height: 80}}/>
        <SmInfo style={{height: 80}}/>
        <SmDoorbellOut />
      </View>
    );
  }
}
