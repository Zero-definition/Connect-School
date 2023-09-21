import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function Comparepage() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Blue strip with left arrow and "Compare" */}
      <View style={{ backgroundColor: '#1C154F', height: 100, flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}>
        <Text style={{ color: 'white', marginLeft: 10, fontSize: 40 }}>Compare</Text>
      </View>

      {/* Color page with table */}
      <View style={{ backgroundColor: '#D3DDE1', padding: 20, flex: 1 }}>
        {/* Table */}
        <View style={{ flexDirection: 'row' }}>
          {/* Column 1 */}
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: 'bold', marginBottom: 18 }}>Parameters</Text>
            <Text style={{marginBottom: 5}}>Distance</Text>
            <Text style={{marginBottom: 5}}>Board</Text>
            <Text style={{marginBottom: 5}}>Annual Fees</Text>
            <Text style={{marginBottom: 5}}>AC Class</Text>
            <Text style={{marginBottom: 5}}>Play Area</Text>
            <Text style={{marginBottom: 5}}>Swimming Pool</Text>
            <Text style={{marginBottom: 5}}>Bus Facility</Text>
            <Text style={{marginBottom: 5}}>Canteen</Text>
            <Text style={{marginBottom: 5}}t>Hostel</Text>
            <Text style={{marginBottom: 5}}>Sports</Text>
            <Text style={{marginBottom: 5}}t>Coaching Tie-ups</Text>
            <Text style={{marginBottom: 5}}>ECA/CCA</Text>
            <Text style={{marginBottom: 5}}>Special Needs</Text>
            <Text style={{marginBottom: 5}}>Councellor</Text>
            <Text style={{marginBottom: 5}}>Scholarship</Text>
            <Text style={{marginBottom: 5}}>Rating (5)</Text>
            <Text style={{marginBottom: 5}}>Co-Ed</Text>
            <Text style={{marginBottom: 5}}>School Type</Text>
            {/* ...and so on for other rows */}
          </View>
          {/* Column 2 */}
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: 'bold', marginBottom: 2 }}>Delhi Public School</Text>
            <Text style={{marginBottom: 5}}>2kms</Text>
            <Text style={{marginBottom: 5}}>CBSE</Text>
            <Text style={{marginBottom: 5}}>1.5L</Text>
            <Image source={require('./assets/tickicon.png')} style={{width: 15, height: 15, marginBottom: 10}}></Image>
            <Image source={require('./assets/wrongicon.png')} style={{width: 15, height: 15, marginBottom: 10}}></Image>
            <Image source={require('./assets/tickicon.png')} style={{width: 15, height: 15, marginBottom: 5}}></Image>
            <Image source={require('./assets/tickicon.png')} style={{width: 15, height: 15, marginBottom: 5}}></Image>
            <Image source={require('./assets/wrongicon.png')} style={{width: 15, height: 15, marginBottom: 10}}></Image>
            <Image source={require('./assets/wrongicon.png')} style={{width: 15, height: 15, marginBottom: 8}}></Image>
            <Image source={require('./assets/tickicon.png')} style={{width: 15, height: 15, marginBottom: 5}}></Image>
            <Image source={require('./assets/tickicon.png')} style={{width: 15, height: 15, marginBottom: 5}}></Image>
            <Image source={require('./assets/tickicon.png')} style={{width: 15, height: 15, marginBottom: 5}}></Image>
            <Image source={require('./assets/tickicon.png')} style={{width: 15, height: 15, marginBottom: 5}}></Image>
            <Image source={require('./assets/wrongicon.png')} style={{width: 15, height: 15, marginBottom: 10}}></Image>
            <Image source={require('./assets/tickicon.png')} style={{width: 15, height: 15, marginBottom: 5}}></Image>
            <Text style={{marginBottom: 5}}>4.5</Text>
            <Image source={require('./assets/tickicon.png')} style={{width: 15, height: 15, marginBottom: 10}}></Image>
            <Text style={{marginBottom: 5}}>Senior Secondary</Text>
            {/* ...and so on for other rows */}
          </View>

          {/* Column 3 */}
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: 'bold', marginBottom: 2 }}>S.D Public School</Text>
            <Text style={{marginBottom: 5}}>3kms</Text>
            <Text style={{marginBottom: 5}}>CBSE</Text>
            <Text style={{marginBottom: 5}}>1.7L</Text>
            <Image source={require('./assets/wrongicon.png')} style={{width: 15, height: 15, marginBottom: 10}}></Image>
            <Image source={require('./assets/tickicon.png')} style={{width: 15, height: 15, marginBottom: 10}}></Image>
            <Image source={require('./assets/tickicon.png')} style={{width: 15, height: 15, marginBottom: 5}}></Image>
            <Image source={require('./assets/tickicon.png')} style={{width: 15, height: 15, marginBottom: 5}}></Image>
            <Image source={require('./assets/tickicon.png')} style={{width: 15, height: 15, marginBottom: 10}}></Image>
            <Image source={require('./assets/wrongicon.png')} style={{width: 15, height: 15, marginBottom: 8}}></Image>
            <Image source={require('./assets/tickicon.png')} style={{width: 15, height: 15, marginBottom: 5}}></Image>
            <Image source={require('./assets/wrongicon.png')} style={{width: 15, height: 15, marginBottom: 5}}></Image>
            <Image source={require('./assets/tickicon.png')} style={{width: 15, height: 15, marginBottom: 5}}></Image>
            <Image source={require('./assets/tickicon.png')} style={{width: 15, height: 15, marginBottom: 5}}></Image>
            <Image source={require('./assets/wrongicon.png')} style={{width: 15, height: 15, marginBottom: 10}}></Image>
            <Image source={require('./assets/tickicon.png')} style={{width: 15, height: 15, marginBottom: 5}}></Image>
            <Text style={{marginBottom: 5}}>4.2</Text>
            <Image source={require('./assets/wrongicon.png')} style={{width: 15, height: 15, marginBottom: 10}}></Image>
            <Text style={{marginBottom: 5}}>Senior Secondary</Text>
            {/* ...and so on for other rows */}
          </View>
        </View>

        {/* Overall Connect School Score */}
        <Text style={{ marginTop: 20 }}>Overall Connect School Score (50)</Text>
        <Text>Delhi Public School: 43</Text>
        <Text>S.D Public School: 38</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});