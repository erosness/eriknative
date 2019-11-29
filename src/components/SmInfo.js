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
    const objvals = Object.values(this.props.unitList.unitList)
    return(
      <View style={[smStyles.topFrame,{height:220}]}>
        <Text style={{textAlign: 'center',
                      fontSize: 18,
                      backgroundColor: 'lightsteelblue'}} >
                      Units available
        </Text>
        <FlatList
          data={objvals}
          renderItem={({ item }) =>
          <View>
            <Text style={{backgroundColor: 'lightcoral',
                           fontSize: 18}}>
              {item.name} {'\n'}
             </Text>
             <Text style={{backgroundColor: 'linen'}}>
               ip:{item.ip} port: {item.port} mac:{item.uid}
              </Text>
            </View>}
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
