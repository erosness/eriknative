import React, { Component } from 'react'
import { FlatList, ActivityIndicator, Text, View, StyleSheet  } from 'react-native';
import { smStyles } from '../styles/SmFrameStyle';


export default class ShowUnits extends Component {

render() {
  const objvals = Object.values(this.props.unitList)
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
            {item.name}
            </Text>
            <Text style={{backgroundColor: 'lightblue',fontSize: 14}}>
              {item.cap.map( c => c.cap + "\n" )}
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
