import React from 'react';
import { StyleSheet, Text, View, Image, Button, Navigator, TouchableHighlight} from 'react-native';
import logo from './assets/images/logo.jpg';
import styles from './assets/css/styles';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerMode: 'none',
    headerVisible: false,
    header: null,
  };
  render() {
    return (
      <View style={styles.background}>
          <View style={styles.topContainer}>
          </View>
          <View style={styles.middleContainer}>
            <Text style={styles.headerTitleStyle}>{"Swing"}</Text>
          </View>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Login')} style={styles.buttonContainerTop}>
            <Text style={styles.h3}> LOG IN </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('SignUp')} style={styles.buttonContainerBottom}>
            <Text style={styles.h3}> SIGN UP </Text>
          </TouchableHighlight>
      </View>
     
    );
  }
}

