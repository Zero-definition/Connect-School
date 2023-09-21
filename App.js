console.ignoredYellowBox = true;

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import SplashScreen from 'react-native-animated-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import React, { useEffect } from 'react';
const { width, height } = Dimensions.get('window');
import { Dimensions } from 'react-native';
import Homepage from './homepage';
import LoginScreen from './loginscreen'
import Register from './registration'
import Sidebar from './sidebar';
import AboutUsScreen from './AboutUsScreen';
import TestScreen from './TestScreen';
import API from './API';
import FilterPage from './filterpage';
import SchoolDetails from './SchoolDetails';
import Aftertestpage from './aftertestpage';
import Searchschools from './searchschools';
import Comparepage from './comparepage';
import ApplicationForm from './applicationform';
import Contactus from './contactus';
import SearchByBoard from './SearchByBoard';

function HomeScreen({ navigation }) {const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5000 milliseconds or 5 seconds
  }, []);
  if (isLoading){
  return (
    <SplashScreen
      logoImage={require('./assets/splashscreenconnectschools.png')}
      logoWidth={width}
      logoHeight={height}
      logoAnimation="zoomin"
      backgroundColor="#1C144E"
    />);}
  return(
  <View style={styles.container}>
    <LoginScreen/>
  </View>
);
  };
  const Stack = createNativeStackNavigator();
  export default function App() {
    return (<NavigationContainer>
      <Stack.Navigator initialRouteName="Homescreen">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Hpage" component={Homepage} options={{ headerShown: false }}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
        <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="TestScreen" component={TestScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="FilterPage" component={FilterPage} options={{ headerShown: false }}/>
        <Stack.Screen name="SchoolDetails" component={SchoolDetails} options={{ headerShown: false }}/>
        <Stack.Screen name="aftertestpage" component={Aftertestpage} options={{ headerShown: false }}/>
        <Stack.Screen name="searchschools" component={Searchschools} options={{ headerShown: false }}/>
        <Stack.Screen name="comparepage" component={Comparepage} options={{ headerShown: false }}/>
        <Stack.Screen name="applicationform" component={ApplicationForm} options={{ headerShown: false }}/>
        <Stack.Screen name="Contactus" component={Contactus} options={{ headerShown: false }}/>
        <Stack.Screen name="SearchByBoard" component={SearchByBoard} options={{ headerShown: false }}/>

        </Stack.Navigator>
    </NavigationContainer>
  );}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
