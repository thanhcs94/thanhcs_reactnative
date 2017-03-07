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
  Image
} from 'react-native';

export default class LearnReactnative extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Who is the most handsome man in the world?
        </Text>
        <Image
        style={styles.img}
        //source={{uri: 'https://pbs.twimg.com/profile_images/806966317093785601/WLB8r27j.jpg'}}
        source={require('./img/thanhcs94.jpg')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  img:{
    width: 70,
    height: 70,
  },
});


AppRegistry.registerComponent('LearnReactnative', () => LearnReactnative);
