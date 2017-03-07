import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,} from 'react-native';

  export default class Square extends Component{
    render(){
      return(
        <View style = {stSquare.container}>
         <View style = {stSquare.square}>
         </View>

        </View>
      );
    }
}

  const stSquare = StyleSheet.create({
    container: {
      marginTop: 100,
      width : 200,
      height: 200,
      backgroundColor: 'blue',
    },
    square:{
      width: 100,
      height : 100,
      backgroundColor:'red',
      borderWidth : 1
    }
  });
