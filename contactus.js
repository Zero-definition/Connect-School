import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, Image, Button, Alert } from 'react-native';

export default function Contactus() {

  const handleMessage = () => {
    // Perform validation and submission logic here
      Alert.alert(
        'Message Sent Successfully.'
      );
};
  return (
    <View style={{ flex: 1 }}>
      {/* Top stripe */}
      <View
        style={{
          height: 67,
          backgroundColor: '#1C144E',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}
      >
        {/* App logo */}
        <Image source = {require('./assets/connectschoolslogo.png')} style = {{width: 210, height: 70}}/>
      </View>

      {/* Middle section */}
      <View style={{ backgroundColor: 'black', width: 400, flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        {/* Text in three lines */}
        <Text style = {{color: '#fff', fontSize: 35}}>Contact Information</Text>
        <Text style = {{color: '#fff', fontSize: 15, paddingBottom: 10}}>Say something to start a live chat!</Text>
        <Text style = {{color: '#fff', fontSize: 25, padding: 5}}>Noida Office</Text>

        {/* Location logo */}
        <TouchableOpacity>
          <Image source = {require('./assets/locationc.jpg')} style={{width:30,height:30,}}/>
        </TouchableOpacity>

        {/* Text and contact logo */}
        <Text style = {{color: '#fff', fontSize: 25, padding: 5}}>Address of connect Schools</Text>
        <TouchableOpacity>
          <Image source = {require('./assets/contactlogo.jpg')} style={{width:30,height:30,}}/>
        </TouchableOpacity>
        
        {/* Text and mail logo */}
        <Text style = {{color: '#fff', fontSize: 25, padding: 5}}>+91-123456789</Text>
        <TouchableOpacity>
          <Image source = {require('./assets/mail_logo.jpg')} style={{width:30,height:30,}}/>
        </TouchableOpacity>

        <Text style = {{color: '#fff', fontSize: 25, padding: 5}}>infoabc@gmail.com</Text>

      </View>

      {/* Bottom section */}
      <View style={{ backgroundColor: '#D3DDE1', padding: 20, flex: 1 }}>
        {/* First name input */}
        <Text style = {{ fontSize: 20}}>First Name</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: '#000', marginBottom: 20, padding: 2 }}
          placeholder="Enter your first name"
        />

        {/* Last name input */}
        <Text style = {{ fontSize: 20}}>Last Name</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: '#000', marginBottom: 20, padding: 2 }}
          placeholder="Enter your last name"
        />

        {/* Email input */}
        <Text style = {{ fontSize: 20}}>Email</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: '#000', marginBottom: 20, padding: 2 }}
          placeholder="Enter your email"
        />

        {/* Phone number input */}
        <Text style = {{ fontSize: 20}}>Phone Number</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: '#000', marginBottom: 20, padding: 2 }}
          placeholder="Enter your phone number"
        />

        {/* Send message button */}
        <Button style={{ backgroundColor: 'black', padding: 10, alignItems: 'center' }} title="Submit" onPress={handleMessage}/>
      </View>
    </View>
  );
}