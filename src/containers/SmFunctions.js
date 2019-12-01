import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet  } from 'react-native';
import { connect } from "react-redux";

import { SmDoorbellOut } from './SmDoorbellOut'
import { smStyles } from '../styles/SmFrameStyle';


class SmFunctions extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  render() {
    return (
      <SmDoorbellOut />
    );
  };
}

const mapStateToProps = state => {
  return { functionList: state.smInfoReducer };
};

export default connect(mapStateToProps)(SmFunctions);
