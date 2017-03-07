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
  TouchableOpacity,
  ListView,} from 'react-native';

import Square from "./component/Square.js";

//Step 2 :  write code CLASS : (Component) : RENDER
// ex. 10 screen -> 10 class like this //
// View == Component//too // small Component
class LearnReactnative extends Component {
  clickme(){
     console.log('You click on my ass');
  }
  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity onPress = {()=>{this.clickme()}}>
         <View style = {styles.button}>
          <Text style = {{color:"#ffffff", textAlign: 'center'}}>This is a fucking button</Text>
         </View>
        </TouchableOpacity>

        <Custome name="Thanh DT"/>
        <Custome name="Thanh Nguyen"/>
        <Square title = "this is a fucking title" content = "this is a fucking content" />

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
    padding: 10,
    marginTop: 10,
  },
  button:{
    width : 200,
    height: 40,
    backgroundColor:'blue',
    borderWidth : 1,
    borderColor :'#cccccc',
    padding: 10,
    marginTop: 100,
  }

});


//Step 3 :  registerComponent //chinh
AppRegistry.registerComponent('LearnReactnative', () => LearnReactnative);
