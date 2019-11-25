import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
import { smStyles } from './SmFrameStyle';

import { connect } from 'react-redux';
import { fetchInfoRequest } from '../actions';

class SmServers extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true, serverList: []}
  }

  componentDidMount() {
    this.fetchIpAndPort()
    this.timer = setInterval(() => this.fetchIpAndPort(), 10000)
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
      let serverList = responseJson.published_units
      this.setState({
        isLoading: false,
        serverList: serverList,
      });
      serverList.map(elem => this.props.fetchInfoRequest(elem))
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
          data={this.state.serverList}
          renderItem={({item}) => <Text>IP: {item.ip}, Port: {item.port}</Text>}
          keyExtractor={item => item.ip}
        />
      </View>
    );
  };
}

export default connect(
  null,
  { fetchInfoRequest },
)(SmServers);
