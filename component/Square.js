import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,} from 'react-native';

  export default class Square extends Component{
    render(){
      return(
        <View style = {stSquare.container}>
         <View style = {stSquare.square}>
            <Text style = {{color:'#ffffff', textAlign:'center',}}>{this.props.title} {this.props.content}</Text>
         </View>

        </View>
      );
    }
}

Square.propType = {
  title:React.PropTypes.string,
  content:React.PropTypes.string,
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
      backgroundColor:'green',
      borderWidth : 1
    }
  });
