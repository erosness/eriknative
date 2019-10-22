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
      <div>
        <h1>Text from frame1</h1>
        <TestFrameX />
        <Rate totalStars={11} initialRate={6} />
      </div>
    )
  };
}

export {TestFrame1};
