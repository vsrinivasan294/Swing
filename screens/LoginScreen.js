import React from 'react';
import { StyleSheet, Text, View, Image, Button, Navigator, TextInput, Alert, TouchableHighlight } from 'react-native';
import * as Expo from 'expo';
import logo from './assets/images/logo.jpg';
import styles from './assets/css/styles';


export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    
    };
  }
  
  signUp() {
    Alert.alert('Test');
  }
  static navigationOptions = {
    title: "Swing",
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
        <Text style={styles.title}>{"Log In"}
        </Text>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        <TouchableHighlight onPress={() => this.props.navigation.navigate('ByLocation')} style={styles.logInButton}>
          <Text style={styles.h2}>Log In</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

