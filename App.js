import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ReadScreen from './Screens/ReadScreen';
import WriteScreen from './Screens/WriteScreen';

export default class App extends React.Component{
  render(){
    return <AppContainer/>
  }
}

const tabNavigator = createBottomTabNavigator({
  ReadScreen: {screen: ReadScreen},
  WriteScreen: {screen: WriteScreen}
});

const AppContainer = createAppContainer(tabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: 'lightblue'
  }
})
