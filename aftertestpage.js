import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import CheckBox from 'react-native-checkbox';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SchoolBlock = ({ school }) => {
  navigation=useNavigation();
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
            <Image source={school.photo} style={styles.schoolPhoto} />
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
                Classes: {school.classes} | Monthly Fees: {school.fees}
              </Text>
              <Text style={styles.detailsText}>
                Student-Faculty Ratio: {school.studentRatio} | Board: {school.board}
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
                <TouchableOpacity style={styles.applyButton} onPress={()=>navigation.navigate('applicationform')}>

                  <Text style={styles.applyButtonText}>Apply</Text>
                </TouchableOpacity>
              </View>
            </View>
        </View>
  );
}

export default function Aftertestpage() {
  const schools = [
    {
      name: 'Delhi Public School',
      photo: require('./assets/SchoolImage.png'),
      location: 'RK Puram, Delhi',
      classes: 'VI to XII',
      fees: '11k - 13.7k',
      studentRatio: '20:1',
      board: 'CBSE',
    },
    {
      name: 'Delhi Public School',
      photo: require('./assets/SchoolImage.png'),
      location: 'Location A',
      classes: 'VI to XII',
      fees: '11k - 13.7k',
      studentRatio: '20:1',
      board: 'CBSE',
    },
    {
      name: 'Delhi Public School',
      photo: require('./assets/SchoolImage.png'),
      location: 'Location A',
      classes: 'VI to XII',
      fees: '11k - 13.7k',
      studentRatio: '20:1',
      board: 'CBSE',
    },
    // Add more school objects here
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Top stripe */}
      <View
        style={{
          height: 70,
          backgroundColor: '#1C154F',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}
      >
        {/* App logo */}
        <Image source = {require('./assets/connectschoolslogo.png')} style = {{width: 200, height: 70}}/>
      </View>
        <Text style = {{color: 'black', fontSize: 20, margin: 5}}>According to your Test Results, these are some schools you should consider.</Text>
        <Text style = {{color: 'red', fontSize: 15, margin: 5}}>3 schools found</Text>
        <View style={styles.content}>
          {schools.map((school, index) => (
            <SchoolBlock key={index} school={school} />
          ))}
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#f1f1f1',
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