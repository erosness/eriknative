import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet  } from 'react-native';
import { smStyles } from '../styles/SmFrameStyle';
import ShowDbgDoorbellOut from '../components/ShowDbgDoorbellOut';

class DbgDoorbellOut extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  render() {

    return (
      // Try setting `flexDirection` to `column`.
      <View style={[smStyles.topFrame, {flexDirection: 'column'}]}>
        <ShowDbgDoorbellOut
          cap={this.props.cap}
          name={this.props.name}/>
      </View>
    );
  };
}

export {DbgDoorbellOut};
