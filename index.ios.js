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
  Navigator,
  ListView,} from 'react-native';

import Square from "./component/Square.js";

//Step 2 :  write code CLASS : (Component) : RENDER
// ex. 10 screen -> 10 class like this //
// View == Component//too // small Component
class LearnReactnative extends Component {

  renderScene(route,navigator){
    switch (route.name) {

      case "red":  return (<RedScreen clickRed={()=>{
        navigator.push({name:"yellow",
        passProps:{
          first : "Thanh",
          last : "Nguyen",
        }},
      );
      }}

          />);

      case "yellow": return (<YellowScreen clickYellow={()=>{
        navigator.pop({name:'red'})
        ;}}

        firstname = {route.passProps.first}
        lastname = {route.passProps.last}
        />);

        break;
      default:
    }
  }
  render() {
    return (
      <Navigator
        initialRoute = {{name:"red"}}
        renderScene  = {this.renderScene}
      />
    );
  }
}



class RedScreen extends Component {

  render() {
    return (
      <View style={{backgroundColor:'red', flex:1 }}>
      <TouchableOpacity onPress= {this.props.clickRed} textback = "textback to red">
      <Text style={{color:'yellow', marginTop:100, textAlign:'center'}} >Move to yellow</Text>
      </TouchableOpacity >
      </View>
    );
  }
}

class YellowScreen extends Component {

  render() {
    return (
      <View style={{backgroundColor:'yellow', flex:1 }}>

        <Text style = {{color:'red', textAlign:'center', marginTop: 100}}>{this.props.firstname}, {this.props.lastname}</Text>

      <TouchableOpacity onPress = {this.props.clickYellow}>
        <Text style = {{color:'red', textAlign:'center', marginTop: 100}}>Back to Red</Text>
      </TouchableOpacity>
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
    width : 250,
    height: 40,
    backgroundColor:'blue',
    borderWidth : 1,
    borderColor :'#cccccc',
    padding: 10,
    marginTop: 40,
  }

});


//Step 3 :  registerComponent //chinh
AppRegistry.registerComponent('LearnReactnative', () => LearnReactnative);
