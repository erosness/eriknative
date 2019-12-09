import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet  } from 'react-native';
import { connect } from "react-redux";

import SmDoorbellOut from './SmDoorbellOut'
import DbgDoorbellOut from './DbgDoorbellOut'
import SmDoorbellIn from './SmDoorbellIn'
import DbgDoorbellIn from './DbgDoorbellIn'
import { smStyles } from '../styles/SmFrameStyle';


class SmFunctions extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  render() {
    const entry = Object.keys(this.props.functionList)
    if(entry.length == 0) {
      console.log("No keys")
      return (
      <View style={[smStyles.topFrame]}>
        <Text> No functions </Text>
      </View>
      )
    }
    const f = entry.map( key => {
      const elem = this.props.functionList[key]
      switch (elem.cap) {
        case "doorbell-out": {
            return (
              <>
              <SmDoorbellOut elem = {elem} />
              <DbgDoorbellOut elem = {elem} />
              </>
           )
        }
        case "doorbell-in": {
            return (
              <>
              <SmDoorbellIn elem = {elem} />
              <DbgDoorbellIn elem = {elem} />
              </>
           )
        }
        default: {
          return (
            <></>
          )
        }
      }
    });

    return (
      <View style={{flex:1}}>
      {f}
      </View>
    );
  };
}

const mapStateToProps = state => {
  return {functionList: state.functionList};
};

export default connect(mapStateToProps)(SmFunctions);
