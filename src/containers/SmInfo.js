import React, { Component } from 'react';
import ShowUnits from '../components/ShowUnits'
import { FlatList, ActivityIndicator, Text, View, StyleSheet  } from 'react-native';
import { connect } from "react-redux";

import { smStyles } from '../styles/SmFrameStyle';


class SmInfo extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  render() {
    return (
      <View>
      <ShowUnits unitList={this.props.unitList} />
      </View>
    );
  };
}

const mapStateToProps = state => {
  return { unitList: state.smServersReducer };
};

export default connect(mapStateToProps)(SmInfo);
