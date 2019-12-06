import React from 'react';
import { StyleSheet, Text, View, Image, Button, Navigator, TextInput, Alert, TouchableHighlight} from 'react-native';
import logo from './assets/images/logo.jpg';
import styles from './assets/css/styles';


export default class SignUpScreen extends React.Component {
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
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
      retypedPassword: '',
      emailID: '',
      age: '', 
      location: '',
    };
  }
  
  signUp() {
    Alert.alert('Signed Up');
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{"Sign Up"}
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
        <TextInput
          value={this.state.retypedPassword}
          onChangeText={(retypedPassword) => this.setState({ retypedPassword })}
          placeholder={'Retype Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          value={this.state.emailID}
          onChangeText={(emailID) => this.setState({ emailID })}
          placeholder={'EMAIL ID'}
          style={styles.input}
        />
        <TextInput
          value={this.state.age}
          onChangeText={(age) => this.setState({ age })}
          placeholder={'Age'}
          style={styles.input}
        />
        <TextInput
          value={this.state.location}
          onChangeText={(location) => this.setState({ location })}
          placeholder={'Location'}
          style={styles.input}
        />
        <TouchableHighlight onPress={this.signUp.bind(this)} style={styles.logInButton}>
          <Text style={styles.h2}>Sign Up</Text>
        </TouchableHighlight>
      </View>
    );
  }
}


