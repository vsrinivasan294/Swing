import React, { Component } from "react";
import { Button, View, Text, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import logo from './assets/images/logo.jpg';
import styles from './assets/css/styles';
import { Constants } from 'expo';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import CameraScreen from './screens/CameraScreen';
import BrowseScreen from './screens/BrowseScreen';
import UploadScreen from './screens/UploadScreen';
import StartingScreen from './screens/StartingScreen';
import ByLocationScreen from './screens/ByLocationScreen';
import BySpotScreen from './screens/BySpotScreen';
import ImageScreen from './screens/ImageScreen';
import DescriptionScreen from './screens/DescriptionScreen'
import HeaderScreen from './screens/HeaderScreen';
import AddNameScreen from './screens/AddNameScreen';
import AddScreenMap from './screens/AddScreenMap';
//import TestScreen from './screens/TestScreen';


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    SignUp: SignUpScreen,
    Camera: CameraScreen,
    Starting: StartingScreen,
    Browse: BrowseScreen,
    Upload: UploadScreen,
    ByLocation: ByLocationScreen,
    BySpot: BySpotScreen,
    Image: ImageScreen,
    Description: DescriptionScreen,
    HeaderScreen: HeaderScreen,
    Add: AddNameScreen,
    AddMap: AddScreenMap,
    //Test: TestScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {

    return <AppContainer />;
  }
}
