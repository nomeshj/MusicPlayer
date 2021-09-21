import React from 'react';
import {Text} from 'react-native';

//import { render } from 'react-dom';
import {Image,ImageBackground,TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import abc from "./abc"
import GetSongs from "./GetSongs";
import LottieView from 'lottie-react-native';


const Stack = createStackNavigator();
function splash({navigation}){

  setTimeout(()=>{
    navigation.replace('abc');
  },3000)
  return(
  // <ImageBackground style={{flex:1}} source = {{uri:'https://media.istockphoto.com/vectors/music-note-icon-vector-illustration-vector-id1175435360?k=20&m=1175435360&s=612x612&w=0&h=1yoTgUwobvdFlNxUQtB7_NnWOUD83XOMZHvxUzkOJJs='}}>

  //   <Text>splashscren</Text>
  // </ImageBackground>
   <LottieView source={require('./4876-speakers-music.json')} autoPlay loop />
  );
}
const App = (props) =>{
  
  return (

   
      <NavigationContainer>
          <Stack.Navigator initialRouteName="splash">
            <Stack.Screen options={{headerShown: false}} name="splash" component={splash} />
            <Stack.Screen
              name="abc"
              component={abc}
            />
           <Stack.Screen
              name="GetSongs"
              component={GetSongs}
            />
        
          </Stack.Navigator>
        </NavigationContainer>
      
  
  );
  
};

export default App;