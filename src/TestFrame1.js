import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { smStyles } from './SmFrameStyle';

import {Rate} from './Rate';

class TestFrameX extends React.Component {
  render() {
    return (
      <Text>Text from frameX</Text>
    )
  };
}


class TestFrame1 extends React.Component {
  render() {
    return (
      <View style={[smStyles.topFrame,{flex:1}]}>
        <View style={{backgroundColor: 'powderblue', flex:5}}>
          <Text>Text from frame1</Text>
        </View>
        <View style={{backgroundColor: 'skyblue'}}>
          <TestFrameX style={{flex: 4, backgroundColor: 'powderblue'}} />
        </View>
        <View style={{backgroundColor: 'steelblue'}}>
          <Rate totalStars={11} initialRate={6} style={{flex: 4, backgroundColor: 'powderblue'}}  />
        </View>
      </View>
    )
  };
}

export {TestFrame1};
