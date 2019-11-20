import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
import { smStyles } from './SmFrameStyle';

import { connect } from 'react-redux';
import { newIpPortPair } from '../actions';

class SmServers extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true, serverList: []}
  }

  componentDidMount() {
{/*    this.fetchIpAndPort() */}
    this.timer = setInterval(() => this.fetchIpAndPort(), 10000)
  }

  handleNewIpPortPair = (serverList) => {
    this.props.newIpPortPair(serverList)
    this.setState({serverList})
  }

  fetchIpAndPort() {
    return fetch('http://10.0.1.107:5055/v1/sm/zeroconf', {
      method: 'GET',
      headers: {
        Accept: '*',
      }
    })
    .then((response) => {return response.json();})
    .then((responseJson) => {

      console.log("Before")
      this.handleNewIpPortPair(responseJson.published_units);
      console.log("After")
{/*      this.setState({
        isLoading: false,
        dataSource: responseJson.published_units,
      }, function(){

      }); */}
    })
    .catch((error) =>{
      console.error(error);
    });
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={[smStyles.topFrame,{flex: 1, height: 80}]}>
          <ActivityIndicator/>
        </View>
      )
    }
    return(
      <View style={[smStyles.topFrame,{flex: 1, height: 80}]}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.ip}, {item.port}</Text>}
          keyExtractor={item => item.ip}
        />
      </View>
    );
  };
}

console.log("Call connect:" + connect(null,{newIpPortPair})(SmServers))

export default connect(
  null,
  { newIpPortPair },
)(SmServers);
