import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Slider from 'react-native-slider';
import { useNavigation } from '@react-navigation/native';

const FilterPage = () => {
  const navigation= useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedSubOptions, setSelectedSubOptions] = useState([]);
  const [distanceRange, setDistanceRange] = useState([1, 20]);
  const [feeRange, setFeeRange] = useState([30000, 200000]);
  const handleOptionSelection = (option) => {
    setSelectedOption(option);
  };

  const handleSubOptionSelection = (subOption) => {
    const isSelected = selectedSubOptions.includes(subOption);
    let updatedOptions = [];

    if (isSelected) {
      updatedOptions = selectedSubOptions.filter((option) => option !== subOption);
    } else {
      updatedOptions = [...selectedSubOptions, subOption];
    }

    setSelectedSubOptions(updatedOptions);
  };

  const handleClearAll = () => {
    setSelectedOption(null);
    setSelectedSubOptions([]);
    navigation.goBack();
  };

  const handleClose = () => {
    navigation.goBack();
  };

  const handleApply = () => {
    navigation.goBack();
  };

  const handleDistanceRangeChange = (values) => {
    setDistanceRange(values);
  };

  const handleFeeRangeChange = (values) => {
    setFeeRange(values);
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      {/* Filters Header */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', left: 15, top: 10 }}>Filters</Text>
        <TouchableOpacity onPress={handleClearAll}>
          <Text style={{ color: 'red', right: 10, top: 10, fontSize: 15 }}>Clear All</Text>
        </TouchableOpacity>
      </View>

      {/* Main Options */}
      <View style={{ flexDirection: 'row' }}>
        {/* Left Options */}
        <View style={{ flex: 1 }}>
          {/* Option 1 */}
          <TouchableOpacity onPress={() => handleOptionSelection('Location & Distance Range')} style={{padding: 20}}>
            <Text style={{ fontWeight: selectedOption === '  Location & Distance Range' ? 'bold' : 'normal' }}>Location & Distance Range</Text>
          </TouchableOpacity>

          {/* Option 2 */}
          <TouchableOpacity onPress={() => handleOptionSelection('Board')} style={{padding: 20}}>
            <Text style={{ fontWeight: selectedOption === 'Board' ? 'bold' : 'normal' }}>Board</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleOptionSelection('Annual Fees')} style={{padding: 20}}>
            <Text style={{ fontWeight: selectedOption === 'Annual Fees' ? 'bold' : 'normal' }}>Annual Fees</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleOptionSelection('Facilities')} style={{padding: 20}}>
            <Text style={{ fontWeight: selectedOption === 'Facilities' ? 'bold' : 'normal' }}>Facilities</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleOptionSelection('Rating')} style={{padding: 20}}>
            <Text style={{ fontWeight: selectedOption === 'Rating' ? 'bold' : 'normal' }}>Rating</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleOptionSelection('Co-Ed Status')} style={{padding: 20}}>
            <Text style={{ fontWeight: selectedOption === 'Co-Ed Status' ? 'bold' : 'normal' }}>Co-Ed Status</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleOptionSelection('School Type')} style={{padding: 20}}>
            <Text style={{ fontWeight: selectedOption === 'School Type' ? 'bold' : 'normal' }}>School Type</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleOptionSelection('Academic Session')} style={{padding: 20}}>
            <Text style={{ fontWeight: selectedOption === 'Academic Session' ? 'bold' : 'normal' }}>Academic Session</Text>
          </TouchableOpacity>

          {/* Add more options as needed */}
        </View>

        {/* Right Sub-options */}
        <View style={{ flex: 1 }}>

          {/* Distance Range */}
          {selectedOption === 'Location & Distance Range' && (
            <View style={{ marginTop: 16, right: 30 }}>
              <Text style={{ fontWeight: 'bold', marginBottom: 8 }}>Delhi</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>{distanceRange[0]}</Text>
                <Text>{distanceRange[1]}</Text>
              </View>
              <Slider
                style={{ width: '100%', height: 40 }}
                minimumValue={1}
                maximumValue={20}
                step={5}
                values={distanceRange}
                onValueChange={(values) => handleDistanceRangeChange(values)}
              />
            </View>
          )}

          {selectedOption == 'Board' && (
            <View>
              {/* Sub-option 1 */}
              <TouchableOpacity onPress={() => handleSubOptionSelection('CBSE')} style={{padding: 20}}>
                <Text style={{ fontWeight: selectedSubOptions.includes('CBSE') ? 'bold' : 'normal' }}>CBSE</Text>
              </TouchableOpacity>

              {/* Sub-option 2 */}
              <TouchableOpacity onPress={() => handleSubOptionSelection('ICSE')} style={{padding: 20}}>
                <Text style={{ fontWeight: selectedSubOptions.includes('ICSE') ? 'bold' : 'normal' }}>ICSE</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleSubOptionSelection('IB')} style={{padding: 20}}>
                <Text style={{ fontWeight: selectedSubOptions.includes('IB') ? 'bold' : 'normal' }}>IB</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleSubOptionSelection('State Board')} style={{padding: 20}}>
                <Text style={{ fontWeight: selectedSubOptions.includes('State Board') ? 'bold' : 'normal' }}>State Board</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleSubOptionSelection('Other')} style={{padding: 20}}>
                <Text style={{ fontWeight: selectedSubOptions.includes('Other') ? 'bold' : 'normal' }}>Other</Text>
              </TouchableOpacity>

              {/* Add more sub-options as needed */}
            </View>
          )}

          {/* Fee Range */}
          {selectedOption === 'Annual Fees' && (
            <View style={{ marginTop: 16 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>{feeRange[0]}</Text>
                <Text>{feeRange[1]}</Text>
              </View>
              <Slider
                style={{ width: '100%', height: 40 }}
                minimumValue={30000}
                maximumValue={200000}
                step={20000}
                values={feeRange}
                onValueChange={(values) => handleFeeRangeChange(values)}
              />
            </View>
          )}

          {selectedOption == 'Facilities' && (
            <ScrollView>
              {/* Sub-option 1 */}
              <TouchableOpacity onPress={() => handleSubOptionSelection('AC Classroom')} style={{padding: 20}}>
                <Text style={{ fontWeight: selectedSubOptions.includes('AC Classroom') ? 'bold' : 'normal' }}>AC Classroom</Text>
              </TouchableOpacity>

              {/* Sub-option 2 */}
              <TouchableOpacity onPress={() => handleSubOptionSelection('Outdoor Play Area')} style={{padding: 20}}>
                <Text style={{ fontWeight: selectedSubOptions.includes('Outdoor Play Area') ? 'bold' : 'normal' }}>Outdoor Play Area</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleSubOptionSelection('Swimming Pool')} style={{padding: 20}}>
                <Text style={{ fontWeight: selectedSubOptions.includes('Swimming Pool') ? 'bold' : 'normal' }}>Swimming Pool</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleSubOptionSelection('Bus Facility')} style={{padding: 20}}>
                <Text style={{ fontWeight: selectedSubOptions.includes('Bus Facility') ? 'bold' : 'normal' }}>Bus Facility</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleSubOptionSelection('Canteen Facility')} style={{padding: 20}}>
                <Text style={{ fontWeight: selectedSubOptions.includes('Canteen Facility') ? 'bold' : 'normal' }}>Canteen Facility</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleSubOptionSelection('Hostel Facility')} style={{padding: 20}}>
                <Text style={{ fontWeight: selectedSubOptions.includes('Hostel Facility') ? 'bold' : 'normal' }}>Hostel Facility</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleSubOptionSelection('Sports Availability')} style={{padding: 20}}>
                <Text style={{ fontWeight: selectedSubOptions.includes('Sports Availability') ? 'bold' : 'normal' }}>Sports Availability</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleSubOptionSelection('Tie Up with Coaching')} style={{padding: 20}}>
                <Text style={{ fontWeight: selectedSubOptions.includes('Tie Up with Coaching') ? 'bold' : 'normal' }}>Tie Up with Coaching</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleSubOptionSelection('ECA / CCA')} style={{padding: 20}}>
                <Text style={{ fontWeight: selectedSubOptions.includes('ECA / CCA') ? 'bold' : 'normal' }}>ECA / CCA</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleSubOptionSelection('Friendly for Children with Special Needs')} style={{padding: 20}}>
                <Text style={{ fontWeight: selectedSubOptions.includes('Friendly for Children with Special Needs') ? 'bold' : 'normal' }}>Friendly for Children with Special Needs</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleSubOptionSelection('Counsellor')} style={{padding: 20}}>
                <Text style={{ fontWeight: selectedSubOptions.includes('Counsellor') ? 'bold' : 'normal' }}>Counsellor</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleSubOptionSelection('Scholarship')} style={{padding: 20}}>
                <Text style={{ fontWeight: selectedSubOptions.includes('Scholarship') ? 'bold' : 'normal' }}>Scholarship</Text>
              </TouchableOpacity>

              {/* Add more sub-options as needed */}
            </ScrollView>
          )}

          {selectedOption == 'Rating' && (
            <View>
              {/* Sub-option 1 */}
              <TouchableOpacity onPress={() => handleSubOptionSelection('1 STAR')} style={{padding: 20}}>
                <Text style={{ fontWeight: selectedSubOptions.includes('1 STAR') ? 'bold' : 'normal' }}>1 STAR</Text>
              </TouchableOpacity>

              {/* Sub-option 2 */}
              <TouchableOpacity onPress={() => handleSubOptionSelection('2 STAR')} style={{padding: 20}}>
                <Text style={{ fontWeight: selectedSubOptions.includes('2 STAR') ? 'bold' : 'normal' }}>2 STAR</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleSubOptionSelection('3 STAR')} style={{padding: 20}}>
                <Text style={{ fontWeight: selectedSubOptions.includes('3 STAR') ? 'bold' : 'normal' }}>3 STAR</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleSubOptionSelection('4 STAR')} style={{padding: 20}}>
                <Text style={{ fontWeight: selectedSubOptions.includes('4 STAR') ? 'bold' : 'normal' }}>4 STAR</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleSubOptionSelection('5 STAR')} style={{padding: 20}}>
                <Text style={{ fontWeight: selectedSubOptions.includes('5 STAR') ? 'bold' : 'normal' }}>5 STAR</Text>
              </TouchableOpacity>

              {/* Add more sub-options as needed */}
            </View>
          )}
          
          {selectedOption == 'Co-Ed Status' && (
            <View>
              {/* Sub-option 1 */}
              <TouchableOpacity onPress={() => handleSubOptionSelection('Co-Ed')} style={{padding: 20}}>
                <Text style={{ fontWeight: selectedSubOptions.includes('Co-Ed') ? 'bold' : 'normal' }}>Co-Ed</Text>
              </TouchableOpacity>

              {/* Sub-option 2 */}
              <TouchableOpacity onPress={() => handleSubOptionSelection('Girls Only')} style={{padding: 20}}>
                <Text style={{ fontWeight: selectedSubOptions.includes('Girls Only') ? 'bold' : 'normal' }}>Girls Only</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleSubOptionSelection('Boys Only')} style={{padding: 20}}>
                <Text style={{ fontWeight: selectedSubOptions.includes('Boys Only') ? 'bold' : 'normal' }}>Boys Only</Text>
              </TouchableOpacity>

              {/* Add more sub-options as needed */}
            </View>
          )}

          {selectedOption == 'School Type' && (
            <View>
              {/* Sub-option 1 */}
              <TouchableOpacity onPress={() => handleSubOptionSelection('Government')} style={{padding: 20}}>
                <Text style={{ fontWeight: selectedSubOptions.includes('Government') ? 'bold' : 'normal' }}>Government</Text>
              </TouchableOpacity>

              {/* Sub-option 2 */}
              <TouchableOpacity onPress={() => handleSubOptionSelection('Private')} style={{padding: 20}}>
                <Text style={{ fontWeight: selectedSubOptions.includes('Private') ? 'bold' : 'normal' }}>Private</Text>
              </TouchableOpacity>
            </View>
          )}

          {selectedOption == 'Academic Session' && (
            <View>
              {/* Sub-option 1 */}
              <TouchableOpacity onPress={() => handleSubOptionSelection('2023-2024')} style={{padding: 20}}>
                <Text style={{ fontWeight: selectedSubOptions.includes('2023-2024') ? 'bold' : 'normal' }}>2023-2024</Text>
              </TouchableOpacity>

              {/* Sub-option 2 */}
              <TouchableOpacity onPress={() => handleSubOptionSelection('2024-2025')} style={{padding: 20}}>
                <Text style={{ fontWeight: selectedSubOptions.includes('2024-2025') ? 'bold' : 'normal' }}>2024-2025</Text>
              </TouchableOpacity>
            </View>
          )}

          {selectedOption == 'Admission Criteria' && (
            <View>
              {/* Sub-option 1 */}
              <TouchableOpacity onPress={() => handleSubOptionSelection('Test-Based')} style={{padding: 20}}>
                <Text style={{ fontWeight: selectedSubOptions.includes('Test-Based') ? 'bold' : 'normal' }}>Test-Based</Text>
              </TouchableOpacity>

              {/* Sub-option 2 */}
              <TouchableOpacity onPress={() => handleSubOptionSelection('Open')} style={{padding: 20}}>
                <Text style={{ fontWeight: selectedSubOptions.includes('Open') ? 'bold' : 'normal' }}>Open</Text>
              </TouchableOpacity>
            </View>
          )}
      
        </View>
      </View>

      {/* Buttons */}
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 16, position:'relative' }}>
        <TouchableOpacity onPress={handleClose} style={{ marginRight: 130 }}>
          <Text style={{ color: 'blue', fontSize: 18 }}>Close</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleApply} style={{ backgroundColor: 'blue', padding: 10, marginRight: 100 }}>
          <Text style={{ color: 'white', fontSize: 18 }}>Apply</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FilterPage;