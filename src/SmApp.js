import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import {RootFrame} from './components/RootFrame';
import SmServers from './components/SmServers';
import {SmDoorbellOut} from './components/SmDoorbellOut';
import SmInfo from './containers/SmInfo';

import { Provider } from 'react-redux'
import store from './store'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
  web: 'Web platform'
});


export default class SmApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1, flexDirection: 'column',height: 80}}>
          <Text>{instructions}</Text>
          <RootFrame style={{height: 50, borderWidth: 5}}/>
          <SmServers style={{height: 80}}/>
          <SmInfo style={{height: 80}}/>
          <SmDoorbellOut />
        </View>
      </Provider >
    );
  }
}

export {SmApp}
