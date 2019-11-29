import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet  } from 'react-native';
import { connect } from "react-redux";

import { smStyles } from './SmFrameStyle';


class SmInfo extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  render() {
    const objkeys = Object.keys(this.props.unitList.unitList)
    const objvals = Object.values(this.props.unitList.unitList)
    return(
      <View style={[smStyles.topFrame,{flex: 1, height:20}]}>
        <FlatList
          data={objvals}
          renderItem={({ item }) =>
          <Text>
            Unit {item.name} at {item.ip}:{item.port} has uid {item.uid}
           </Text>}
          keyExtractor={item => item.uid}
        />
      </View>
    );
  };
}

const mapStateToProps = state => {
  return { unitList: state.smServersReducer };
};

export default connect(mapStateToProps)(SmInfo);
