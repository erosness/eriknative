import React, {Component} from 'react';
import {View} from 'react-native';

import {Rate} from './Rate';

class TestFrameX extends React.Component {
  render() {
    return (
      <h1>Text from frameX</h1>
    )
  };
}


class TestFrame1 extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <View style={{backgroundColor: 'powderblue', flex:5}}>
          <h1>Text from frame1</h1>
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
