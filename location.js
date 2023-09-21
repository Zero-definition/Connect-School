// LocationUtility.js
import * as Location from 'expo-location';

export const getCityFromLocation = async () => {
  try {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Location permission not granted');
      return null;
    }

    let location = await Location.getCurrentPositionAsync({});
    const city = await fetchCityFromCoordinates(
      location.coords.latitude,
      location.coords.longitude
    );

    return city;
  } catch (error) {
    console.error('Error getting location:', error);
    return null;
  }
};

const fetchCityFromCoordinates = async (latitude, longitude) => {
  try {
    const locationDetails = await Location.reverseGeocodeAsync({
      latitude,
      longitude,
    });
    const city = locationDetails.length > 0 ? locationDetails[0].region : null;
    return city;
  } catch (error) {
    console.error('Error fetching city:', error);
    return null;
  }
};
