import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
import { smStyles } from '../styles/SmFrameStyle';
import ShowServers from '../components/ShowServers';

import { connect } from 'react-redux';
import { getInfo } from '../actions/actionFetchInfo';

class SmServers extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true, serverList: {}}
  }

  componentDidMount() {
    this.fetchIpAndPort()
    this.timer = setInterval(() => this.fetchIpAndPort(), 5000)
  }

  fetchIpAndPort() {
    return fetch('http://10.0.1.109:5055/v1/sm/zeroconf', {
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
      serverList.map(elem => this.props.getInfo(elem))
    })
    .catch((error) =>{
      console.error(error);
    });
  }

  render() {
    return (
        <ShowServers
          serverList={this.state.serverList}
          isLoading={this.state.isLoading} />
    )
  };
}

export default connect(
  null,
  { getInfo },
)(SmServers);
