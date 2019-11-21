import React from 'react';
import { StyleSheet, YellowBox, Platform, Text, View, Image, Button, Navigator, TextInput, Alert } from 'react-native';
import logo from './assets/images/logo.jpg';
import styles from './assets/css/styles';
import { Component } from "react";
import { createStackNavigator } from "react-navigation";
import { SafeAreaView } from 'react-native';


export default class StartingScreen extends React.Component {
  static navigationOptions = {
    title: "Swing",
    headerLeft: null,
    headerStyle: {
      backgroundColor: "#feac00"
    },
    headerTitleStyle: {
      fontFamily: 'Hoefler Text',
      fontWeight: 'bold',
      fontStyle: 'italic',
      fontSize: 26,
      color: '#e52b06'
    },
  };
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.topContainer}>
          <Text style={styles.h1}>WELCOME</Text>
        </View>
          <View style={styles.bottomContainer}>
          <View style={styles.buttonContainer}>

          <Text style={styles.h2} onPress={() => this.props.navigation.navigate('Browse')}> BROWSE HAMMOCK SPOTS</Text>

          <Text style={styles.h2} onPress={() => this.props.navigation.navigate('Upload')}> UPLOAD HAMMOCK SPOTS</Text>

          </View>
        </View>
      </SafeAreaView>  
    );
  }
}


