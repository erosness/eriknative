import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
import { smStyles } from '../styles/SmFrameStyle';

export default class ShowDoorbellOut extends Component {

  render() {
    if(this.props.isLoading){
      return(
        <View style={[smStyles.topFrame,{flex: 1, height: 80}]}>
          <ActivityIndicator/>
        </View>
      )
    }
    return(
      <Text style={{textAlign: 'center',
                    fontSize: 18,
                    backgroundColor: 'lightsteelblue'}} >
                    Function {this.props.cap} at {this.props.name} 
      </Text>
    );
  }
}
