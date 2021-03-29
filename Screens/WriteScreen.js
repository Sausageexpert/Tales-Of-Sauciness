import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

export default class WriteScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}>Enter Your Details Here!</Text>
                
            <TextInput
            style = {styles.textInput}
            placeholder = "Enter Name Here"/>

            <TextInput
            style = {styles.textInput2}
            placeholder = "Title of the Story"/>

            <TextInput
            style = {styles.textInput3}
            placeholder = "Write Your Story Here"/>

            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        flex: 1
    },

    textInput: {
        fontColor: 'white',
        borderWidth: 4,
        width: 700,
        height: 50,
     //   backgroundColor: 'black',
     textAlign: 'center',
     fontSize: 40,
        alignSelf: 'center',
        marginTop: 40,
        fontFamily: 'Edwardian Script ITC',
        outline: 'none',
        fontWeight: 'bold'
        
    },

    textInput2: {
        fontColor: 'white',
        borderWidth: 4,
        width: 900,
        height: 50,
     //   backgroundColor: 'black',
     textAlign: 'center',
     fontSize: 40,
        alignSelf: 'center',
        marginTop: 40,
        fontFamily: 'Edwardian Script ITC',
        outline: 'none',
        fontWeight: 'bold'
        
    },

    textInput3: {
        fontColor: 'white',
        borderWidth: 4,
        width: 1500,
        height: 500,
     //   backgroundColor: 'black',
     textAlign: 'center',
     fontSize: 40,
        alignSelf: 'center',
        marginTop: 40,
        fontFamily: 'Edwardian Script ITC',
        outline: 'none',
        fontWeight: 'bold'
        
    },

    text: {
        fontSize: 40,
        backgroundColor: 'red',
        fontWeight: 'bold',
        textAlign: 'center'
    },

   text2: {
       background: 'black',
       fontFamily: 'Calibri',
       fontColor: 'yellow',
      // textAlign: 'center',
       marginTop: 50,
       marginLeft: 200
   }
})