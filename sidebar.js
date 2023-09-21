import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Sidebar = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null; // If the sidebar is closed, don't render anything
  }

  return (
    <View style={styles.container}>
      {/* Add your sidebar content here */}
      <TouchableOpacity style={styles.item} onPress={onClose}>
        <Text style={styles.itemText}>Close Sidebar</Text>
      </TouchableOpacity>
      {/* Add more sidebar items as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    width: 200,
    padding: 16,
  },
  item: {
    marginBottom: 16,
  },
  itemText: {
    fontSize: 16,
    color: '#000000',
  },
});

export default Sidebar;
