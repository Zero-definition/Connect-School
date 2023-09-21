import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import CheckBox from 'react-native-checkbox';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
const SchoolBlock = ({ school }) => {
   const navigation=useNavigation();
  const [liked, setLiked] = useState(false);
  const [checked, setChecked] = useState(false);
 
  const handleLike = () => {
    setLiked(!liked);
  };
  const handleCheck = () => {
    setChecked(!checked);
  };
  return (
        <View style={styles.schoolBlock}>
          <View>
          </View>
            <View style={styles.schoolInfo}>
              <Text style={styles.schoolName}>{school.name}</Text>
              <TouchableOpacity onPress={handleLike} style={styles.likeButton}>
              <Image
                source={liked ? require('./assets/heart_filled.jpg') : require('./assets/heart_outline.jpg')}
                style={styles.heartIcon}
              />
              </TouchableOpacity>
              <View style={styles.locationContainer}>
                <Image source={require('./assets/location.jpg')} style={styles.locationIcon} />
                <Text style={styles.locationText}>{school.location}</Text>
                <TouchableOpacity style={styles.viewMapContainer}>
                <Image source={require('./assets/map.jpg')} style={styles.mapIcon} />
                <Text style={styles.viewMapText}>View Map</Text>
              </TouchableOpacity>
              </View>
              <Text style={styles.detailsText}>
               Board: {school.board}
              </Text>
              <Text style={styles.detailsText}>
               Fee Structure: {school.fee_structure_minimum} to {school.fee_structure_maximum}
              </Text>
              <Text style={styles.detailsText}>
               City: {school.city}
              </Text>
              <Text style={styles.detailsText}>
               District: {school.district}
              </Text>
              <Text style={styles.detailsText}>
               State: {school.state}
              </Text>
              <View style={styles.actionsContainer}>
                <TouchableOpacity>
                  <Text style={styles.viewSchoolText}>View School</Text>
                </TouchableOpacity>
                <View style={styles.compareContainer}>
                  <CheckBox
                    label=""
                    checked={checked}
                    onChange={handleCheck}
                    checkboxStyle={styles.checkbox}
                  />
                    <Text style={styles.compareText}>Compare</Text>
                </View>
                <TouchableOpacity style={styles.applyButton} onPress={()=> navigation.navigate('applicationform')}>
                  <Text style={styles.applyButtonText}>Apply</Text>
                </TouchableOpacity>
              </View>
            </View>
        </View>
  );
}

const Searchschools = () =>  {
  const route = useRoute(); // Access the route object to get the parameters
  const name = route.params; 
  const [schools,setSchool] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = (name) => {
    setLoading(true);
    fetch(`http://192.168.1.2:3000/searchSchools?name=${name}`)
      .then(response => response.json())
      .then(jsonResponse => setSchool(jsonResponse))
      .catch(error => console.log(error))
      setLoading(false);
      
  };
  useEffect(() => {
    const name = route.params?.name; // Access the name from the route.params object
    fetchData(name);
  }, [route.params]); 
    const navigation= useNavigation();
    const totalSchools = schools.length;
  return (
    
    <SafeAreaView style={{backgroundColor:'#D3DDE1', flex: 1}}>
      {/* Top stripe */}
      <View style={{ backgroundColor: '#1C144E',height:72,flexDirection:'row' }}>
    <Image source={require('./assets/connectschoolslogo.png')} style={{width:215,height:72}} />
      </View>
     
      {/* Text box and "View All" button */}
      <View style={{ flexDirection: 'row', alignItems: 'center',paddingLeft:5,paddingRight:80,paddingTop:12,justifyContent:'space-between'}}>
        <Text style={{color:"#101C6C", fontSize: 20}}>Results for {route.params?.name}</Text>
        <TouchableOpacity style={{position:'relative',left:55, paddingHorizontal: 12, paddingVertical: 8, backgroundColor: '#B70404', borderRadius: 4, left: 70}} onPress={()=>navigation.navigate('comparepage')}>
        <Text style={{color: '#ffffff', fontWeight: 'bold'}}>Compare</Text>
        </TouchableOpacity>
      </View>
      {loading ? ( 
        <View style={{flex:1}}>
          <Text >Loading...</Text>
        </View>
        ) : (
          <View style={{flex:1}}>
      <Text style = {{color: 'red', fontSize: 20, margin: 5}}>{totalSchools} schools found</Text>
      <ScrollView style={styles.content}>
          {schools.map((schools, index) => (
            <SchoolBlock key={index} school={schools} />
          ))}
      </ScrollView>
      </View>)}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#D3DDE1',
    padding: 16,
  },
  schoolBlock: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    overflow: 'hidden',
  },
  schoolImageContainer: {
    width: '30%',
    aspectRatio: 1,
    overflow: 'hidden',
  },
  schoolPhoto: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  schoolInfo: {
    flex: 1,
    padding: 16,
    color: 'black'
  },
  schoolName: {
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  likeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 1,
  },
  heartIcon: {
    width: 24,
    height: 24,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,

  },
  locationIcon: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  locationText: {
    color: '#333333',
  },
  viewMapContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    position: 'relative',
    left: 100,
    top: 8,
  },
  mapIcon: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  viewMapText: {
    color: '#333333',
    textDecorationLine: 'underline',
  },
  detailsText: {
    marginBottom: 8,
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewSchoolText: {
    color: 'black',
    textDecorationLine: 'underline',
    marginRight: 16,
  },
  compareContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
    left: 80,
  },
  checkbox: {
    width: 16,
    height: 16,
    marginRight: 8,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#ff0000',
  },
  compareText: {
    color: '#ff0000',
  },
  applyButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#B70404',
    borderRadius: 4,
    left: 70,
  },
  applyButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
export default Searchschools;