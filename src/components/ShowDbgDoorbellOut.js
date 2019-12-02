import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
import { smStyles } from '../styles/SmFrameStyle';

export default class ShowDbgDoorbellOut extends Component {

  render() {
    if(this.props.isLoading){
      return(
        <View style={[smStyles.topFrame,{height: 80}]}>
          <ActivityIndicator/>
        </View>
      )
    }
    return(
      <Text style={{textAlign: 'center',
                    fontSize: 18,
                    backgroundColor: 'lightsteelblue'}} >
                    Debug {this.props.elem.cap} at {this.props.elem.name}
      </Text>
    );
  }
}
