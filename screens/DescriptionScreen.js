import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button, Navigator } from 'react-native';
import logo from './assets/images/logo.jpg';


export default class DescriptionScreen extends React.Component {
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
  }
  render() {
    const Images = [
        { uri: "https://i.imgur.com/iwyuxOR.jpg" },
        { uri: "https://i.imgur.com/aUeBiR8.jpg" },
        { uri: "https://i.imgur.com/4qm8LWE.jpg" },
        { uri: "https://i.imgur.com/TJzHJcZ.jpg" }
      ]

    const name = this.props.navigation.state.params.name;
    const capacity = this.props.navigation.state.params.capacity;
    const description = this.props.navigation.state.params.description;
    const location = this.props.navigation.state.params.location;
    const distance = this.props.navigation.state.params.distance;
    const image = this.props.navigation.state.params.image;

    return (
    <View style={styles.textContent}>
        <Text numberOfLines={1} style={styles.Destitle}>{name}</Text>
        <View style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
        <Image
          source={image} style={styles.Image}>
        </Image>
        </View>
        <Text style={styles.Des}>
          <Text style={styles.Desbold}>{"Distance:"}</Text>
          <Text style={styles.Des}> {distance + " miles"} </Text>
        </Text>
        <Text style={styles.Des}>
          <Text style={styles.Desbold}>{"Capacity:"}</Text>
          <Text style={styles.Des}> {capacity + " hammocks"} </Text>
        </Text>
         <Text style={styles.Des}>
          <Text style={styles.Desbold}>{"Description:"}</Text>
          <Text style={styles.Des}> {description} </Text>
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({

Destitle: {
  fontSize: 30,
  marginTop: 20,
  marginLeft: 10,
  marginRight: 10,
  textAlign: "center",
  fontFamily: "Arial",
},
Image: {
  marginTop: 20,
  height: 300,
  width: 300,
  alignItems: 'center',
  justifyContent: 'center',
},
Desbold: {
  fontSize: 24,
  marginTop: 30,
  marginLeft: 40,
  marginRight: 40,
  fontFamily: "Arial",
  fontWeight: 'bold',
},
Des: {
  fontSize: 24,
  marginTop: 30,
  marginLeft: 40,
  marginRight: 40,
  fontFamily: "Arial",
}
});
