import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'

import {RootFrame} from './components/RootFrame';
import SmServers from './containers/SmServers';
import SmInfo from './containers/SmInfo';
import SmFunctions from './containers/SmFunctions';

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
        <View style={{flex: 0, flexGrow: 1, flexDirection: 'column'}}>
          <Text>{instructions}</Text>
          <RootFrame />
          <SmServers />
          <SmInfo />
          <SmFunctions />
        </View>
      </Provider >
    );
  }
}

export {SmApp}
