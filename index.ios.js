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
  Image,
  TextInput,
  ListView,} from 'react-native';

import Square from "./component/Square.js";


var DATA = [
  {title:"Bát trạch minh kính", img:"http://vanlang.vn/upload/images/modules/product/product/thumb/115x168/c1913897b8c3159b81acf8a5feadda86.jpg"},
  {title:"Tư duy như triệu phú", img:"http://vanlang.vn/upload/images/modules/product/product/thumb/115x168/dcb8659d25b955770e836676f9a1faf3.jpg"},
  {title:"Đối phó với các cá nhân độc hại ở nơi làm việc", img:"http://vanlang.vn/upload/images/modules/product/product/thumb/115x168/cf009e5fe91a2418d6942919f2425d8d.jpg"},
  {title:"10 quy tắc vàng của thuật lãnh đạo", img:"http://vanlang.vn/upload/images/modules/product/product/thumb/115x168/5e3420d4bbfbc4a36c0fe220c86e7ebe.jpg"},
  {title:"Lập kế hoạch kinh doanh trong 1 giờ", img:"http://vanlang.vn/upload/images/modules/product/product/thumb/115x168/f2a8c931dde9da1a0613be6a3986ad00.jpg"}

];

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
    )
  }
}



class RedScreen extends Component {

  constructor(props){
    super(props);
    this.state={
    text: "thanhcs94"
    }
  }
  render() {
    return (
      <View style={{backgroundColor:'red', flex:1 }}>
      <TouchableOpacity onPress= {this.props.clickRed} textback = "textback to red">
      <Text style={{color:'yellow', marginTop:100, textAlign:'center'}} >Move to yellow</Text>
      </TouchableOpacity >
      <Image source = {require('./img/thanhcs94.jpg')}
        style = {{width: 100 , height:  100 , margin:16}}
      />
      <Image source = {{uri:'https://lh6.googleusercontent.com/-XMHGujsJnB4/AAAAAAAAAAI/AAAAAAAAAAA/Tx-FSYGi4mg/s128-c-k/photo.jpg'}}
        style = {{width: 100 , height:  100 , margin:16}}
      />

      <TextInput
        style = {{height: 48, borderColor:'#ffffff', borderWidth:1, color:'#ffffff', padding: 10}}
        onChangeText = {(text)=>this.setState({text})}
        value =  {this.state.text}
        />
        <Text style ={{color:'#ffffff', fontSize : 30}}>{this.state.text}</Text>
      </View>
    );
  }
}

class YellowScreen extends Component {

  constructor(props){
    super(props);
    var ds = new ListView.DataSource({rowHasChanged:(r1, r2)=> r1 != r2});
    this.state = {
      dataSource:ds.cloneWithRows(DATA)
    };
  }

  createItems(property){
    return(
      <View style={{marginTop: 10, padding:5}}>
      <Text style = {{color:'red', fontSize: 25}}>{property.title}</Text>
      <Text style = {{color:'blue', fontSize: 15}}>{property.img}</Text>
      </View>
    )
  }
  render() {
    return (
      <View style={{backgroundColor:'yellow', flex:1 }}>
      <TouchableOpacity onPress = {this.props.clickYellow}>
        <Text style = {{color:'red', textAlign:'left', fontSize:15, marginTop: 20, marginLeft:4}}>Back to Red</Text>
      </TouchableOpacity>
      <Text style = {{color:'red', textAlign:'center', marginTop: 50}}>{this.props.firstname}, {this.props.lastname}</Text>
      <View style ={{marginTop:20, padding: 20}} >
        <ListView
          dataSource =  {this.state.dataSource}
          renderRow = {this.createItems}
        />
      </View>
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
