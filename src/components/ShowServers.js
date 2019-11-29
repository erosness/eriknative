import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
import { smStyles } from '../styles/SmFrameStyle';

export default class ShowServers extends Component {

  render() {
      if(this.props.isLoading){
        return(
          <View style={[smStyles.topFrame,{flex: 1, height: 80}]}>
            <ActivityIndicator/>
          </View>
        )
      }
      return(
        <View style={[smStyles.topFrame,{flex: 1, height: 80}]}>
        <Text style={{textAlign: 'center',
                      fontSize: 18,
                      backgroundColor: 'lightsteelblue'}} >
                      Announced servers
        </Text>

          <FlatList
            data={this.props.serverList}
            renderItem={({item}) => <Text>IP: {item.ip}, Port: {item.port}</Text>}
            keyExtractor={item => item.ip}
          />
        </View>
      );
  }
}
