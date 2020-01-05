import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet  } from 'react-native';
import { connect } from "react-redux";

import DbgDoorbellOut from './DbgDoorbellOut'
import DbgDoorbellIn from './DbgDoorbellIn'
import UIDoorbellIn from './UIDoorbellIn'
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
              <DbgDoorbellOut elem = {elem} />
              </>
           )
        }
        case "doorbell-in": {
            return (
              <>
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

    const ui =
    (
      <>
      <UIDoorbellIn doorbellOutFid = {814169} />
      </>
    )

    return (
      <View style={{flex:1}}>
      {ui}
      {f}
      </View>
    );
  };
}

const mapStateToProps = state => {
  return {functionList: state.functionList};
};

export default connect(mapStateToProps)(SmFunctions);
