import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
import { smStyles } from '../styles/SmFrameStyle';

export default class ShowFunctionHreader extends Component {

  render() {
    return(
      <Text style={{textAlign: 'center',
                    fontSize: 18,
                    backgroundColor: 'lightsteelblue'}} >
                    Function Header
      </Text>
    );
  }
}
