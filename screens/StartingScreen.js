import React from 'react';
import { StyleSheet, Text, View, Image, Button, Navigator, TextInput, Alert } from 'react-native';
import logo from './assets/images/logo.jpg';
import styles from './assets/css/styles';


export default class SartingScreen extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.h1}>WELCOME</Text>
        </View>
          <View style={styles.bottomContainer}>
          <View style={styles.buttonContainer}>

          <Text style={styles.h2} onPress={() => this.props.navigation.navigate('Browse')}> BROWSE HAMMOCK SPOTS</Text>

          <Text style={styles.h2} onPress={() => this.props.navigation.navigate('Upload')}> UPLOAD HAMMOCK SPOTS</Text>

          </View>
        </View>
      </View>
     
    );
  }
}


