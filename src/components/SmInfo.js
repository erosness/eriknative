import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet  } from 'react-native';
import { connect } from "react-redux";

import { smStyles } from './SmFrameStyle';


class SmInfo extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount() {
{/*    this.fetchInfo()
    this.timer = setInterval(() => this.fetchInfo(), 10000) */}
  }


  fetchInfo() {
    return fetch('http://10.0.1.107:5055/v1/sm/info', {
      method: 'GET',
      headers: {
        Accept: '*',
      }
    })
    .then((response) => {return response.json();})
    .then((responseJson) => {
      console.log("SmInfo, JSON=", responseJson)
      this.setState({
        isLoading: false,
        dataInfo: {...responseJson},
      });
    })
    .catch((error) =>{
      console.error(error);
    });
  }


  render() {
    console.log("Render SmInfo")
    if(this.state.isLoading){
      return(
        <View style={[smStyles.topFrame,{flex: 1}]}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={[smStyles.topFrame,{flex: 1, height:20}]}>
        <Text>
          uid={this.state.dataInfo.uid}, {this.state.dataInfo.cap}.
        </Text>
      </View>
    );
  };
}

const mapStateToProps = state => {
  console.log("SmInfo mapStateToProps:",  state.smServersReducer.smServer)
  const server = state.smServersReducer.smServer || {};
  return  server;
};

export default connect(mapStateToProps)(SmInfo);
