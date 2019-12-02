import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet  } from 'react-native';
import { connect } from "react-redux";

import { SmDoorbellOut } from './SmDoorbellOut'
import DbgDoorbellOut from './DbgDoorbellOut'
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
              <SmDoorbellOut
              name={elem.name}
              cap = {elem.cap} />
              <DbgDoorbellOut
              name={elem.name}
              cap = {elem.cap} />
              </>
           )
        }
        default: {
          return (
            <View style={[smStyles.topFrame]}>
              <Text style={{fontSize: 9}}>No element</Text>
            </View>
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
  console.log("At map for SmFunctions:", state)
  return { functionList: state.smFunctionsReducer.functionList };
};

export default connect(mapStateToProps)(SmFunctions);
