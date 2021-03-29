import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import OrderScreen from './Screens/OrderScreen';
import ChooseScreen from './Screens/ChooseScreen';

export default class App extends React.Component{
  render(){
    return <AppContainer/>
  }
}

const tabNavigator = createBottomTabNavigator({
  OrderScreen: {screen: OrderScreen},
  ChooseScreen: {screen: ChooseScreen}
});

const AppContainer = createAppContainer(tabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: 'lightblue'
  }
})
