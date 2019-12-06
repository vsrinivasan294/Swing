import React, { useState, Component } from "react";

import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  Animated,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Navigator,
} from "react-native";
import { TabNavigator } from "react-navigation";
import { Container} from "native-base";
import MapView from "react-native-maps";
import { SearchBar } from 'react-native-elements';


const Images = [
  { uri: "https://i.imgur.com/iwyuxOR.jpg" },
  { uri: "https://i.imgur.com/aUeBiR8.jpg" },
  { uri: "https://i.imgur.com/4qm8LWE.jpg" },
  { uri: "https://i.imgur.com/TJzHJcZ.jpg" }
]
const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = height / 5;
const CARD_WIDTH = CARD_HEIGHT + 100;


export default class screens extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinate: {
        latitude: null,
        longitude: null,
        error:null,
      },
      touch: false,
      touchLocation: {
        latitude: null,
        longitude: null,
      }
    };
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
   information = {
    markers: [
      {
        coordinate: {
          latitude: 45.524548,
          longitude: -122.6749817,
        },
        title: "Hammock Beach",
        description: "This is the best Hammock on the beach",
        image: Images[0],
      },
      {
        coordinate: {
          latitude: 45.524698,
          longitude: -122.6655507,
        },
        title: "Hammock Mountain",
        description: "This is the best Hammock on the mountain",
        image: Images[1],
      },
      {
        coordinate: {
          latitude: 45.5230786,
          longitude: -122.6701034,
        },
        title: "Hammock Forest",
        description: "This is the best Hammock on the forest",
        image: Images[2],
      },
      {
        coordinate: {
          latitude: 45.521016,
          longitude: -122.6561917,
        },
        title: "Hammock Nature",
        description: "This is the best Hammock in nature",
        image: Images[3],
      },
    ],
    region: {
      latitude: 45.52220671242907,
      longitude: -122.6653281029795,
      latitudeDelta: 0.04864195044303443,
      longitudeDelta: 0.040142817690068,
    },
  };



  componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);
  }
  componentDidMount() {
    // We should detect when scrolling has stopped then animate
    // We should just debounce the event listener here
    this.animation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= this.information.markers.length) {
        index = this.information.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      navigator.geolocation.getCurrentPosition(
       (position) => {
         this.setState({coordinate:{
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           error: null,
         }});
       },
       (error) => this.setState({coordinate:{ error: error.message }}),
       { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
     );

      clearTimeout(this.regionTimeout);
      this.regionTimeout = setTimeout(() => {
        if (this.index !== index) {
          this.index = index;
          const { coordinate } = this.information.markers[index];
          this.map.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: this.information.region.latitudeDelta,
              longitudeDelta: this.information.region.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  }






  render() {
    const interpolations = this.information.markers.map((marker, index) => {
      const inputRange = [
        (index - 1) * CARD_WIDTH,
        index * CARD_WIDTH,
        ((index + 1) * CARD_WIDTH),
      ];
      const scale = this.animation.interpolate({
        inputRange,
        outputRange: [1, 2.5, 1],
        extrapolate: "clamp",
      });
      const opacity = this.animation.interpolate({
        inputRange,
        outputRange: [0.35, 1, 0.35],
        extrapolate: "clamp",
      });
      return { scale, opacity };
    });

    return (
      <>
      <SearchBar
          ref='searchBar'
          placeholder='Find me'
          barStyle="black"
          inputStyle={{paddingBottom: 10}}
          showsCancelButtonWhileEditing={false}
        />
      <View style={styles.container}>
        <MapView
          ref={map => this.map = map}
          initialRegion={this.information.region}
          style={styles.container}
          showsUserLocation={true}
          onPress={e => {
            this.setState({touch:true});
            this.setState({touchLocation: {
              latitude:e.nativeEvent.coordinate.latitude,
              longitude:e.nativeEvent.coordinate.longitude,
            }});
          }}
        >
        {
          this.state.touch &&
          <MapView.Marker
            key={1}
            coordinate={this.state.touchLocation}
            draggable
          ></MapView.Marker>
        }

        </MapView>


      </View>

      {
          this.state.touch &&
        <TouchableOpacity style={styles.SubmitButtonStyle} key={1}  onPress={e => {this.props.navigation.navigate('Add', {point: this.state.touchLocation})} }>
          <View style={styles.textContent}>
            <Text numberOfLines={1} style={styles.buttonText}> Add Hammock Spot! </Text>
          </View>
        </TouchableOpacity>
      }

<TouchableOpacity style={styles.location} onPress={_ => {
  this.state.touch = false
    try {
      if (this.state.coordinate.latitude) {
        this.map.animateToRegion(
          {
            latitude: this.state.coordinate.latitude,
            longitude: this.state.coordinate.longitude
          },
          1000
        );
      }
    }
    catch (error) {
      console.log(error);
    }
}}>
          <View style={styles.addButton}>
            <Image source={require('./assets/images/orange_pin.png') }style={styles.locationButton}/>
          </View>
        </TouchableOpacity>
    </>

    );
  }
}

const styles = StyleSheet.create({
  addButton: {
    width:60,
    height:60,
    borderRadius: 15,

  },
  locationButton: {
    width:52,
    height:52,
    borderRadius: 15,
  },
  container: {
    flex: 1,
  },
  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: 50,
  },
  card: {
    padding: 10,
    elevation: 1,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: 50,
    width: 50,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
    color: "#feac00",
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(229,43, 6, 0.9)",
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(229,43, 6, 0.3)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(229,43, 6, 0.5)",
  },
  markers: {
    resizeMode: 'cover',
    position: 'absolute',
    bottom: "30%",
    left: 0,
    paddingTop: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    paddingRight: 30,
    paddingBottom: 15
  },
  location: {
    position: 'absolute',
    bottom: '25%',
    left: 0,
    paddingTop: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    paddingRight: 40,
    paddingBottom: 15
  },
  lock: {
    position: 'absolute',
    top: '50%',
    left:10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    paddingRight: 20,
    paddingBottom: 15
  },
  SubmitButtonStyle: {
    position: 'absolute',
    bottom: "5%",
    left: "25%",
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#e60000',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  buttonText: {
    color: "#ffffff"
  }

});

AppRegistry.registerComponent("mapfocus", () => screens);
