import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

class SmServers extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount() {
    this.timer = setInterval(() => this.fetchIpAndPort(), 5000)
  }


  fetchIpAndPort() {
    console.log("fetch IP & port")
    this.setState({
      isLoading: true,
    })

    return fetch('http://10.0.1.107:5055/v1/sm/zeroconf', {
//    return fetch('https://facebook.github.io/react-native/movies.json', {
      method: 'GET',
      headers: {
        Accept: '*',
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson.published_units,
      }, function(){

      });
    })
    .catch((error) =>{
      console.error(error);
    });
  }


  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }


    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.ip}, {item.port}</Text>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  };
}

export {SmServers};
