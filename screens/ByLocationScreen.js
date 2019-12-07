console.disableYellowBox = true;

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
  { uri: "https://i.imgur.com/ONXUBdS.jpg" },
  { uri: "https://i.imgur.com/7Xq0tJs.jpg" },
]

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 5;
const CARD_WIDTH = CARD_HEIGHT + 100;
console.disableYellowBox = true;

var test = [
  {
    coordinate: {
      latitude: 45.524548,
      longitude: -122.6749817,
    },
    title: "Hammock Beach",
    description: "This is the best Hammock on the beach",
    capacity: 4,
    image: Images[0],
  },
  {
    coordinate: {
      latitude: 45.524698,
      longitude: -122.6655507,
    },
    title: "Hammock Mountain",
    description: "This is the best Hammock on the mountain",
    capacity: 2,
    image: Images[1],
  },
  {
    coordinate: {
      latitude: 45.524548,
      longitude: -122.6749817,
    },
    title: "Relax and Hammock",
    description: "This is the best Hammock ever",
    capacity: 2,
    image: Images[2],
  },
  {
    coordinate: {
      latitude: 45.521016,
      longitude: -122.6561917,
    },
    title: "Hammock Nature",
    description: "This is the best Hammock in nature",
    capacity: 1,
    image: Images[3],
  },
];

var map_idx = {}

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
      },
      selected: {
        name: null,
        capacity: null,
        description: null,
        image: null,
      },
      search: '',
      loading: false,
      data: [],
      error: null
    };
  }


  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Swing',
      headerRight: (
          <Button
              title='Log Out'
              onPress={ () => navigation.navigate('Home') }
              backgroundColor= "rgba(0,0,0,0)"
              color="#fff"
          />
      ),
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
    }
  };
   information = {
    region: {
      latitude: 45.52220671242907,
      longitude: -122.6653281029795,
      latitudeDelta: 0.04864195044303443,
      longitudeDelta: 0.040142817690068,
    },
  };

  componentWillUpdate() {
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
  }

  animate(){
    console.log("alsdjkf");
      let r = {
        latitude: 45.52220671242907,
        longitude: -122.6653281029795,
      };
      this.map.animateToRegion(r, 365);
  }

  componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);
  }

  componentDidMount() {
    // We should detect when scrolling has stopped then animate
    // We should just debounce the event listener here
    this.animation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= test.length) {
        index = test.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }



      clearTimeout(this.regionTimeout);
      this.regionTimeout = setTimeout(() => {
        if (this.index !== index) {
          this.index = index;
          const { coordinate } = test[index];
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

  updateSearch = s => {
    this.setState({
      search: s
    });
  }


  render() {
    try {
      const name = this.props.navigation.state.params.name;
      const capacity = this.props.navigation.state.params.capacity;
      const description = this.props.navigation.state.params.description;
      const location = this.props.navigation.state.params.location;
      const image = this.props.navigation.state.params.image;
      if (name in map_idx) {

      }
      else {
        test = [...test, {title:name, description:description, coordinate:location, capacity:capacity, image:Images[4]}];
        map_idx[name] = "here"
      }
    }
    catch (error) {
      console.log(error);
    }

    const interpolations = test.map((marker, index) => {
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

    const {search} = this.state.search;
    let titles = [];
    for (const t in test) {
      titles.push(test[t].title);
    }
    // for (const tit in titles) {
      // console.log;
      // if (test[t].title.includes(search)) {
      //   console.log(test[t].title);
      //   console.log(search);
      // }
    // }

    return (
      <>
      <SearchBar
          ref='searchBar'
          placeholder='Find Spots'
          barStyle="black"
          inputStyle={{paddingBottom: 10}}
          showsCancelButtonWhileEditing={false}
          onChangeText={this.updateSearch}
          value={search}
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

          {test.map((marker, index) => {
            const scaleStyle = {
              transform: [
                {
                  scale: interpolations[index].scale,
                },
              ],
            };
            const opacityStyle = {
              opacity: interpolations[index].opacity,
            };
            return (
              <MapView.Marker key={index} coordinate={marker.coordinate} >
                <Animated.View style={[styles.markerWrap, opacityStyle]} >
                  <Animated.View style={[styles.ring, scaleStyle]} />
                  <View style={styles.marker} />
                </Animated.View>
              </MapView.Marker>
            );
          })}


        </MapView>



        <Animated.ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.animation,
                  },
                },
              },
            ],
            { useNativeDriver: true }
          )}
          style={styles.scrollView}
          contentContainerStyle={styles.endPadding}
        >

          {test.map((marker, index) => (
            <TouchableOpacity style={styles.card} key={index}  onPress={() => {
                const lat1 = this.state.coordinate.latitude;
                const lon1 = this.state.coordinate.longitude;
                const lon2 = marker.coordinate.longitude;
                const lat2 = marker.coordinate.latitude;
                const mlat1 = ((lat1*3.14)/180)*55.051;
                const mlon1 = ((lon1*3.14)/180)*55.051;
                const mlat2 = ((lat2*3.14)/180)*55.051;
                const mlon2 = ((lon2*3.14)/180)*55.051;
                const dist = parseInt(Math.sqrt(Math.pow(mlat1 - mlat2, 2) + Math.pow(mlon1 - mlon2, 2))) + 1

              this.props.navigation.navigate('Description', {
                  name:marker.title,
                  capacity:marker.capacity,
                  distance:dist,
                  description:marker.description,
                  image: marker.image})
              }}>
              <Image
                source={marker.image}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <View style={styles.textContent}>
                <Text numberOfLines={1} style={styles.cardtitle}>{marker.title} </Text>
                <Text numberOfLines={1} style={styles.cardDescription}>
                  {marker.description}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
              </Animated.ScrollView>


      </View>
      <TouchableOpacity style= {styles.markers} onPress ={_ => {
          this.props.navigation.navigate('AddMap');
      }}>
      <View>
      <Image style={styles.addButton2} source={require("./assets/images/add_red.png")}/>
      </View>
      </TouchableOpacity>

      <TouchableOpacity style= {styles.search} onPress ={_ => {
        this.animate();
      }}>
      <View>
      <Image style={styles.addButton} source={require("./assets/images/search.png")}/>
      </View>
      </TouchableOpacity>

<TouchableOpacity style={styles.location} onPress={_ => {
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
  addButton2: {
    width:50,
    height:50,
    width:45,
    height:45,
    borderRadius: 15,
    paddingTop: 5,

  },
  addButton: {
    width:45,
    height:45,
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
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
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
    top: '45%',
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
  search: {
    position: 'absolute',
    top: "1%",
    right: 0,
  }
});

AppRegistry.registerComponent("mapfocus", () => screens);
