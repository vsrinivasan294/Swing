import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({

container: {
    flex: 1,
    backgroundColor: '#9FA8DA',
    alignItems: 'center',
    justifyContent: 'center',
  },
h1: {
    color: 'white',
    backgroundColor: '#FFFFFF',
    fontSize: 60,
  },
h2: {
    color: 'white',
    backgroundColor: '#FFFFFF',
    fontSize: 18,
    marginTop: 8,
  },
pic: {
  width: 300,
  height: 260,
  justifyContent: 'center',
},
topContainer: {
  flex: 2,
  justifyContent: 'center',
  alignItems: 'center',
},
middleContainer: {
  flex: 3,
  justifyContent: 'flex-start',
  alignItems: 'center',
},
bottomContainer: {
  justifyContent: 'flex-end',
  width: '90%',
  margin: 20,
  padding: 10,
}, 
button: {
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#FFFFFF',
  borderWidth: 4, 
  borderColor: 'white',
  color: 'white',

}
});

export default styles
