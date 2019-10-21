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
      <>
        <TestFrameX/>
        <h1>Text from frame1</h1>
        <Rate rate={5} totalStars={7}/>
      </>
    )
  };
}

export {TestFrame1};
