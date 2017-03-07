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

import Square from "./component/Square.js";

//Step 2 :  write code CLASS : (Component) : RENDER
// ex. 10 screen -> 10 class like this //
// View == Component//too // small Component
class LearnReactnative extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Custome name = "Thanh Dep Trai"/>
          <Custome name = "Nguyen Van Thanh"/>
        <Square title = "From main class to Squre class " content = " this is a fucking content , second params"/>
      </View>
    );
  }
}

export default class Custome extends Component{
  render(){
    return(
       <View style = {styles.square}>
         <Text  style= {{color:'#ffffff'}}>{this.props.name}</Text>
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
    backgroundColor:'blue',
    borderWidth : 1,
    borderColor :'#cccccc',
    padding: 10
  }
});


//Step 3 :  registerComponent //chinh
AppRegistry.registerComponent('LearnReactnative', () => LearnReactnative);
