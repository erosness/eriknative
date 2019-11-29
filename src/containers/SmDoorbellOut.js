import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet  } from 'react-native';
import { smStyles } from '../styles/SmFrameStyle';
import ShowDoorbellOut from '../components/ShowDoorbellOut';

class SmDoorbellOut extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={[smStyles.topFrame, {flex: 4, flexDirection: 'column'}]}>
        <ShowDoorbellOut/>
      </View>
    );

  };
}

export {SmDoorbellOut};
