import React from 'react';
import { StyleSheet, Text, View, Image, Button, Navigator } from 'react-native';
import logo from './assets/images/logo.jpg';
import styles from './assets/css/styles';


export default class HomeScreen extends React.Component {
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

      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.h1}>Swing</Text>
        </View>
        <View style={styles.middleContainer}>
          <Image source={logo} style={styles.pic} />
        </View>
          <View style={styles.bottomContainer}>
          <View style={styles.buttonContainer}>

          <Text style={styles.h2} onPress={() => this.props.navigation.navigate('Login')}> Login </Text>

          <Text style={styles.h2} onPress={() => this.props.navigation.navigate('SignUp')}> Signup </Text>

          </View>
        </View>
      </View>
     
    );
  }
}


