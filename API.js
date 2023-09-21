import React, { useEffect, useState } from "react";
import {View, Text, FlatList,TouchableOpacity,Image} from 'react-native';
import { getCityFromLocation } from './location';
const API = () => {
  const [school,setSchool] = useState([]);
  
  useEffect(()=>{
    fetchData()
  },[]);
  const [stateName, setStateName] = useState(null);
  useEffect(() => {
    // Example of using the utility function to get the city name
    const fetchStateName = async () => {
      const stateName = await getCityFromLocation();
      setStateName(stateName);
      setStateName(stateName.toUpperCase());
      console.log('State:', stateName);
      // You can use the city name for your desired functionality here.
    };

    fetchStateName();
  }, []);
  const fetchData = (stateName) => {
    
    fetch(`http://192.168.1.2:3000/getSchools?state=UTTAR PRADESH`)
      .then(response => response.json())
      .then(jsonResponse => setSchool(jsonResponse))
      .catch(error => console.log(error))
  };
  
  const renderUser = ({item}) => {
    return (
    <View style={{width:300,paddingRight:5}}>
      <TouchableOpacity style={{borderWidth:2}}  >
      <View style={{ paddingBottom:5,marginRight:4 }}>
        <Image
          style={{ width: '100%', height: 150 }}
          source={require('./assets/SchoolImage.png')}
        />
        <Text numberOfLines={1} style={{fontSize:20,fontWeight:'bold'}}>{item.name}</Text>
        <View style={{flexDirection:'row'}}>
        <Text>{item.location}</Text>
        <TouchableOpacity style={{left:'400%'}} >
        <Image source={require('./assets/viewmap.png')} style={{width:150,height:35}}/>
        </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
          <Text>Board : {item.Board}</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <Text style={{marginRight:6}}>Email: {item.email}</Text>
          
        </View>
        <View >
        <Text>Phone  {item.phone}</Text>
          <TouchableOpacity style={{backgroundColor:'#B70404',borderRadius:5,width:'18%',left:'80%'}} onPress={()=> navigation.navigate('applicationform')}>
            <Text style={{color:'white',marginLeft:'7%'}}>
              APPLY
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={{backgroundColor:"white",width:'100%'}}>
      <FlatList
        data={school}
        horizontal={true}
        renderItem={renderUser}
        keyExtractor={(item,index) => index.toString()}
        />
    </View>
  )
}
export default API;