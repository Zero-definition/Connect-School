import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert, ScrollView } from 'react-native';
import ModalSelector from 'react-native-modal-selector';

const ApplicationForm = () => {
    const [fullName, setFullName] = useState('');
    const [gender, setGender] = useState('');
    const [selectedClass, setSelectedClass] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [fatherDesignation, setFatherDesignation] = useState('');
    const [fatherMobile, setFatherMobile] = useState('');
    const [motherName, setMotherName] = useState('');
    const [motherDesignation, setMotherDesignation] = useState('');
    const [motherMobile, setMotherMobile] = useState('');
    const [address, setAddress] = useState('');
    const modalSelectorRef = useRef(null);

    const classOptions = [
        { key: '1', label: 'Class 1' },
        { key: '2', label: 'Class 2' },
        { key: '3', label: 'Class 3' },
        { key: '4', label: 'Class 4' },
        { key: '5', label: 'Class 5' },
        { key: '6', label: 'Class 6' },
        { key: '7', label: 'Class 7' },
        { key: '8', label: 'Class 8' },
        { key: '9', label: 'Class 9' },
        { key: '10', label: 'Class 10' },
        { key: '11', label: 'Class 11' },
        { key: '12', label: 'Class 12' },
    ];

    const handleClassSelect = (option) => {
        setSelectedClass(option.label);
    };

    const handleSubmit = () => {
        // Perform validation and submission logic here
        if (
            fullName === '' ||
            gender === '' ||
            selectedClass === '' ||
            birthDate === '' ||
            fatherName === '' ||
            fatherDesignation === '' ||
            fatherMobile === '' ||
            motherName === '' ||
            motherDesignation === '' ||
            motherMobile === '' ||
            address === ''
        ) {
            Alert.alert('Please fill in all the fields.');
        } else {
            Alert.alert(
                'Registered for school. Please wait for further requirements or a call from the school.'
            );
            // Reset the form
            setFullName('');
            setGender('');
            setSelectedClass('');
            setBirthDate('');
            setFatherName('');
            setFatherDesignation('');
            setFatherMobile('');
            setMotherName('');
            setMotherDesignation('');
            setMotherMobile('');
            setAddress('');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Application Form</Text>
            <Text style={styles.fieldLabel}>Child's Full Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter child's full name"
                value={fullName}
                onChangeText={setFullName}
            />

            <Text style={styles.fieldLabel}>Child's Gender</Text>
            <View style={styles.optionsContainer}>
                <Button
                    title="Boy"
                    onPress={() => setGender('Boy')}
                    color={gender === 'Boy' ? '#9B5DE5' : '#ccc'}
                />
                <Button
                    title="Girl"
                    onPress={() => setGender('Girl')}
                    color={gender === 'Girl' ? '#9B5DE5' : '#ccc'}
                />
                <Button
                    title="Other"
                    onPress={() => setGender('Other')}
                    color={gender === 'Other' ? '#9B5DE5' : '#ccc'}
                />
            </View>

            <Text style={styles.fieldLabel}>Choose Class</Text>
            <TextInput
                style={styles.input}
                placeholder="Select class"
                value={selectedClass}
                editable={false}
                onTouchStart={() => modalSelectorRef.current.open()}
            />
            <ModalSelector
                data={classOptions}
                initValue="Select class"
                ref={modalSelectorRef}
                onChange={handleClassSelect}
            />

            <Text style={styles.fieldLabel}>Birth Date</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter birth date"
                value={birthDate}
                onChangeText={setBirthDate}
            />

            <Text style={styles.fieldLabel}>Father's Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter father's name"
                value={fatherName}
                onChangeText={setFatherName}
            />

            <Text style={styles.fieldLabel}>Father's Designation</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter father's designation"
                value={fatherDesignation}
                onChangeText={setFatherDesignation}
            />

            <Text style={styles.fieldLabel}>Father's Mobile No.</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter father's mobile no."
                value={fatherMobile}
                onChangeText={setFatherMobile}
            />

            <Text style={styles.fieldLabel}>Mother's Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter mother's name"
                value={motherName}
                onChangeText={setMotherName}
            />

            <Text style={styles.fieldLabel}>Mother's Designation</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter mother's designation"
                value={motherDesignation}
                onChangeText={setMotherDesignation}
            />

            <Text style={styles.fieldLabel}>Mother's Mobile No.</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter mother's mobile no."
                value={motherMobile}
                onChangeText={setMotherMobile}
            />

            <Text style={styles.fieldLabel}>Address</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter address"
                value={address}
                onChangeText={setAddress}
            />

            <Button title="Submit" onPress={handleSubmit} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#D3DDE1',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    fieldLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
});

export default ApplicationForm;