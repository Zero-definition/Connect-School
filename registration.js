import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Register = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [isSelected, setSelection] = useState(false);
  const navigation = useNavigation();
  const handleRegisteration = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <Image 
        source = {require('./assets/loginpageimage.png')} 
        style = {styles.image}
      />
      <Text style = {styles.registerText}>Registration Form</Text>
      <ScrollView style = {styles.contentContainer}>
        <Text style = {styles.label}>Name</Text>
        <TextInput
          style = {styles.input}
          placeholder="Type your name here"
          value={name}
          onChangeText={setName}
        />
        <Text style = {styles.label}>Phone Number</Text>
        <TextInput
          style = {styles.input}
          placeholder="Type your number here"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <Text style = {styles.label}>Password</Text>
        <TextInput
          style = {styles.input}
          placeholder="Type your password here"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Text style = {styles.label}>Confirm Password</Text>
        <TextInput
          style = {styles.input}
          placeholder="Confirm your password here"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        <Text style = {styles.label}>Gender</Text>
        <TextInput
          style = {styles.input}
          placeholder="Type your Gender here"
          value={gender}
          onChangeText={setGender}
        />
        <Button title="REGISTRATION" onPress={handleRegisteration} />
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',      
    backgroundColor: '#F9DDFA',
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
  registerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  contentContainer: {
    width: '95%',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    width: '100%',
    marginBottom: 16,
    padding: 8,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  checkboxContainer: {
    position: 'relative',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 50,
  },
  checkbox: {
    position: 'relative ',
    marginHorizontal: 16,
  }
})
export default Register;