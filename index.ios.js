/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//Step 1 : import library
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,} from 'react-native';

//Step 2 :  write code CLASS : (Component) : RENDER
// ex. 10 screen -> 10 class like this //
// View == Component//too // small Component
class LearnReactnative extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SquareComponent></SquareComponent>
        <SquareComponent></SquareComponent>
      </View>
    );
  }
}

export default class SquareComponent extends Component{
  render(){
    return(
       <View style = {styles.square}>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cccccc',
    marginTop:20
  },
  square:{
    width: 100,
    height : 100,
    backgroundColor:'red',
    borderWidth : 1
  }
});


//Step 3 :  registerComponent //chinh
AppRegistry.registerComponent('LearnReactnative', () => LearnReactnative);
