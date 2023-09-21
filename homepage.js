import React from 'react';
import { View, Text, TextInput, TouchableOpacity,Image,StyleSheet,Dimensions} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ShareButton from './sharebutton';
import Sidebar from './sidebar';
import { useState } from 'react';
import { Navigation } from 'react-native-navigation';
import { useNavigation } from '@react-navigation/native';
import LoginScreen from './loginscreen';
import AboutUsScreen from './AboutUsScreen';
import TestScreen from './TestScreen';
import API from './API'
import { getCityFromLocation } from './location';
import { useEffect } from 'react';
const Homepage = () => {
  const [inputValue, setInputValue] = useState('');
  const navigation= useNavigation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
 
  const [cityName, setCityName] = useState(null);
  useEffect(() => {
    // Example of using the utility function to get the city name
    const fetchCityName = async () => {
      const city = await getCityFromLocation();
      setCityName(city);
      console.log('City:', city);
      console.log(inputValue);
      // You can use the city name for your desired functionality here.
    };

    fetchCityName();
  }, []);
  return (
    
    <View style={{backgroundColor:'#D3DDE1'}}>
      {/* Top stripe */}
      <View style={{ backgroundColor: '#1C144E',height:72,flexDirection:'row' }}>
    <Image source={require('./assets/applogo.png')} style={{width:215,height:72}} />

        <TouchableOpacity>
        <ShareButton/>
        </TouchableOpacity>
      </View>

      {/* Text box with menu button and two buttons */}
      <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
      <TouchableOpacity  onPress={toggleDrawer}>
      <Image source={require('./assets/menubutton.png')} style={{width:30,height:30,}} />
      </TouchableOpacity>
        <Text style={{backgroundColor:'#1C144E',color:'white',width:270,padding:5}}>{cityName}</Text>
        <TouchableOpacity>
        <Image source={require('./assets/bookmarkbutton.png')} style={{width:44,height:40}} />
        </TouchableOpacity>
      </View>

      {/* Search bar */}
        <View style={{ flexDirection: 'row', alignItems: 'center',paddingLeft:50,paddingRight:64}}>
          <TextInput value={inputValue} // Bind the TextInput value to the state
        onChangeText={(text) => setInputValue(text)}style={{ flex: 1, padding:5,backgroundColor:'#1C144E',color:'white',height:40}} placeholder='Search Schools' placeholderTextColor='white' />
        <TouchableOpacity onPress={()=>navigation.navigate('searchschools',{ name: inputValue })}>
        <Image source={require('./assets/searchicon.png')} style={{width:44,height:40}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('FilterPage')}>
          {/* Touchable opacity button */}
          <Image source={require('./assets/Filterbutton.png')} style={{width:35,height:41,position:'absolute',left:12,top:-21}} />
        </TouchableOpacity>
        </View>
      {/* Text box and "View All" button */}
      <View style={{ flexDirection: 'row', alignItems: 'center',paddingLeft:50,paddingRight:64,paddingTop:12,justifyContent:'space-between'}}>
        <Text style={{color:"#101C6C"}}>Choose to start new Search</Text>
        <TouchableOpacity style={{position:'relative',left:55}}>
          <Text style={{color:"#101C6C"}}>View All </Text>
        </TouchableOpacity>
      </View>

      {/* Four touchable opacity rectangles */}
      <View style={{ flexDirection: 'row', alignItems: 'center',paddingLeft:50,paddingRight:64,paddingTop:12,justifyContent:'space-between'}}>
        <TouchableOpacity style={{ flex: 1 }}  onPress={() => navigation.navigate('SearchByBoard',{ board:'CBSE' })}>
        <Image source={require('./assets/CBSEbutton.png')} style={{width:100,height:42}}/>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SearchByBoard',{ board:'IB' })}>
        <Image source={require('./assets/IBbutton.png')} style={{width:100,height:43,position:'relative',left:15}}/>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SearchByBoard',{ board:'NIOS' })}>
        <Image source={require('./assets/NIOSbutton.png')} style={{width:100,height:43,position:'relative',left:30}}/>
        </TouchableOpacity>
      </View>
      
      {/* Text box and "View All" button */}
      <View style={{ flexDirection: 'row', alignItems: 'center',paddingLeft:50,paddingRight:64,paddingTop:12,justifyContent:'space-between' }}>
        <Text style={{color:"#101C6C"}}>List of Schools in {cityName}</Text>
        <TouchableOpacity style={{position:'relative',left:55}}>
        <Text style={{color:"#101C6C"}}>View All </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center',paddingLeft:50,paddingRight:20,paddingTop:12,justifyContent:'space-between'}} >
      <API/>
      </View>
    <View style={{paddingLeft:45}} >
      <Text>Write to US</Text>
      <Text>Let us know how you feel</Text>
      </View>
      {/* Three text input fields */}
      <View style={{paddingLeft:45,paddingTop:15,paddingRight:200}} >
      <TextInput style={{backgroundColor:'white',paddingLeft:5,color:'black',borderWidth:2}} placeholder='Your Name' placeholderTextColor='black'/>
      <TextInput style={{backgroundColor:'white',paddingLeft:5,color:'black',borderWidth:2,marginTop:10}} placeholder='Email' placeholderTextColor='black'/>
      <TextInput style={{backgroundColor:'white',paddingLeft:5,color:'black',borderWidth:2,marginTop:10,padding:15}} placeholder='Message' placeholderTextColor='black'/>
      </View>
      {/* Touchable opacity button */}
      <TouchableOpacity>
      <Image source={require('./assets/SubmitButton.png')} style={{width:85,height:35,position:'relative',left:45,marginTop:15,marginBottom:10}}/>
      </TouchableOpacity>
      
   {/* Transparent Overlay */}
   {isDrawerOpen && <TouchableOpacity style={styles.overlay} onPress={toggleDrawer} activeOpacity={1} />}

{/* Drawer */}
{isDrawerOpen && (
  <View style={styles.drawer}>
    {/* Add your drawer content here */}
    <View style={{flexDirection:'row'}}>
    <TouchableOpacity style={{left:'-20%',top:'-9%'}} onPress={toggleDrawer}>
    <Image source={require('./assets/homebutton.png')} style={{width:50,height:50}} />
    </TouchableOpacity>
      <TouchableOpacity style={{left:'400%',top:'-6%'}} onPress={toggleDrawer}>
      <Image source={require('./assets/menubutton.png')} style={{width:30,height:30}} />
      </TouchableOpacity>
    </View>
    <Text style={{backgroundColor:"white",padding:15,borderRadius:10,fontSize:14,borderWidth:1}}>Welcome, Jashandeep Singh</Text>
    <Text style={{backgroundColor:"white",padding:15,borderRadius:10,fontSize:14,borderWidth:1,marginTop:'3%'}}>{cityName}</Text>
    <TouchableOpacity style={{backgroundColor:"white",padding:15,borderRadius:10,fontSize:14,borderWidth:1,marginTop:'3%'}}><Text>Saved Schools</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{backgroundColor:"white",padding:15,borderRadius:10,fontSize:14,borderWidth:1,marginTop:'3%'}} onPress={() => navigation.navigate('AboutUsScreen')}><Text>About Us</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{backgroundColor:"white",padding:15,borderRadius:10,fontSize:14,borderWidth:1,marginTop:'3%'}} onPress={() => navigation.navigate('Contactus')} ><Text>Contact Us</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{backgroundColor:"white",padding:15,borderRadius:10,fontSize:14,borderWidth:1,marginTop:'3%'}} onPress={() => navigation.navigate('TestScreen')}><Text>Career Counselling</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{backgroundColor:"white",padding:15,borderRadius:10,fontSize:14,borderWidth:1,marginTop:'3%',width:'80%',left:'11%'}} onPress={() => navigation.navigate('LoginScreen')}
><Text>LOGOUT</Text>
    </TouchableOpacity>
  </View>
)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuButton: {
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  menuButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  drawer: {
    position: 'absolute',
    top: 80,
    left: 0,
    width: Dimensions.get('window').width * 0.8, // Adjust the width as needed
    height: Dimensions.get('window').height,
    backgroundColor: '#D3DDE1',
    padding: 16,
    zIndex:2
  },
  drawerItem: {
    marginBottom: 16,
  },
  drawerItemText: {
    fontSize: 16,
    color: 'white',
  },
});
export default Homepage;
