import React from 'react';
import { StyleSheet, Text, View, Image, Button, Navigator, TextInput, Alert, AppRegistry, FlatList } from 'react-native';
import logo from './assets/images/logo.jpg';
import styles from './assets/css/styles';


export default class ByProductScreen extends React.Component {
  render() {
    return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.h3} onPress={() => this.props.navigation.navigate('BySpot')}>Illini Union</Text>
          <Text style={styles.h3} onPress={() => this.props.navigation.navigate('ByLocation')}>Altgeld Hall</Text>
           <Text style={styles.h3} onPress={() => this.props.navigation.navigate('BySpot')}>Illini Union</Text>
          <Text style={styles.h3} onPress={() => this.props.navigation.navigate('ByLocation')}>Siebel Center</Text>
           <Text style={styles.h3} onPress={() => this.props.navigation.navigate('BySpot')}>ECEB</Text>
          <Text style={styles.h3} onPress={() => this.props.navigation.navigate('ByLocation')}>South Quad</Text>
           <Text style={styles.h3} onPress={() => this.props.navigation.navigate('BySpot')}>Main Quad</Text>
          <Text style={styles.h3} onPress={() => this.props.navigation.navigate('ByLocation')}>Bardeen Quad</Text>
           <Text style={styles.h3} onPress={() => this.props.navigation.navigate('BySpot')}>Ikenberry Commons</Text>
          <Text style={styles.h3} onPress={() => this.props.navigation.navigate('ByLocation')}>BIF</Text>
         
        </View>
      </View>
     
    );
  }
}


