import React from 'react';
import { StyleSheet, Text, View, Image, Button, Navigator, TextInput, Alert } from 'react-native';
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
  render() {
    return (
      <View style={styles.container}>
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
        <Text style={styles.h2} onPress={() => this.props.navigation.navigate('Starting')}> Login </Text>
        

      </View>
    );
  }
}

