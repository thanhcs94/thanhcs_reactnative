/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,} from 'react-native';

export default class LearnReactnative extends Component {
  render() {
    return (
      <View style={styles.container}>

      <View style = {styles.row}>

         <View  style = {styles.column}>
         </View>
         <View  style = {styles.column}>
           <Text style = {styles.number}>2 </Text>
           <Text style = {styles.text}>ABC</Text>
         </View>
         <View  style = {styles.column}>
         </View>

      </View>
      <View style = {styles.row}>

      <View  style = {styles.column}>
      </View>
      <View  style = {styles.column}>
      </View>
      <View  style = {styles.column}>
      </View>

      </View>
      <View style = {styles.row}>

      <View  style = {styles.column}>
      </View>
      <View  style = {styles.column}>
      </View>
      <View  style = {styles.column}>
      </View>

      </View>
      <View style = {styles.row}>

      <View  style = {styles.column}>
      </View>
      <View  style = {styles.column}>
      </View>
      <View  style = {styles.column}>
      </View>

      </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#cccccc',
    //flexDirection :'row',
    marginTop:20
  },
  row:{
    flex:1,
    backgroundColor:'#ffffff',
    borderBottomColor: '#cccccc',
    borderBottomWidth : 1,
    flexDirection:'row'
  },
  column:{
    flex:1,
    flexDirection :'column',
    backgroundColor:'#ffffff',
    borderRightColor: '#cccccc',
    borderRightWidth : 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  number:{
    fontSize : 30,
  },
  text :{
    fontSize: 15,
  }

});

//  flexDirection :'row'
AppRegistry.registerComponent('LearnReactnative', () => LearnReactnative);
