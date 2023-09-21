import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TestScreen = ({ navigate }) => {
    const navigation=useNavigation();
    const [selectedOptions, setSelectedOptions] = useState({
        question1: '',
        question2: '',
        question3: '',
    });

    const handleOptionSelect = (question, option) => {
        setSelectedOptions((prevSelectedOptions) => ({
            ...prevSelectedOptions,
            [question]: option,
        }));
    };

    const handleSubmit = () => {
        if (
            selectedOptions.question1 === '' ||
            selectedOptions.question2 === '' ||
            selectedOptions.question3 === ''
        ) {
            Alert.alert('Please answer all questions before submitting.');
        } else {
            // Handle submit logic
            setSelectedOptions({
                question1: '',
                question2: '',
                question3: '',
                
            });
        }
        navigation.navigate('aftertestpage')
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Questionnaire</Text>

            <ScrollView style={styles.questionContainer}>
                <Text style={styles.question}>Q1. What is your favorite color?</Text>
                <View style={styles.optionsContainer}>
                    <TouchableOpacity
                        style={[
                            styles.option,
                            selectedOptions.question1 === 'option1' && styles.selectedOption,
                        ]}
                        onPress={() => handleOptionSelect('question1', 'option1')}
                    >
                        <Text style={styles.optionText}>Option 1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.option,
                            selectedOptions.question1 === 'option2' && styles.selectedOption,
                        ]}
                        onPress={() => handleOptionSelect('question1', 'option2')}
                    >
                        <Text style={styles.optionText}>Option 2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.option,
                            selectedOptions.question1 === 'option3' && styles.selectedOption,
                        ]}
                        onPress={() => handleOptionSelect('question1', 'option3')}
                    >
                        <Text style={styles.optionText}>Option 3</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.question}>Q2. What is your favorite animal?</Text>
                <View style={styles.optionsContainer}>
                    {/* Options for Question 2 */}
                    <TouchableOpacity
                        style={[
                            styles.option,
                            selectedOptions.question2 === 'option1' && styles.selectedOption,
                        ]}
                        onPress={() => handleOptionSelect('question2', 'option1')}
                    >
                        <Text style={styles.optionText}>Option 1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.option,
                            selectedOptions.question2 === 'option2' && styles.selectedOption,
                        ]}
                        onPress={() => handleOptionSelect('question2', 'option2')}
                    >
                        <Text style={styles.optionText}>Option 2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.option,
                            selectedOptions.question2 === 'option3' && styles.selectedOption,
                        ]}
                        onPress={() => handleOptionSelect('question2', 'option3')}
                    >
                        <Text style={styles.optionText}>Option 3</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.question}>Q3. What is your favorite food?</Text>
                <View style={styles.optionsContainer}>
                    {/* Options for Question 3 */}
                    <TouchableOpacity
                        style={[
                            styles.option,
                            selectedOptions.question3 === 'option1' && styles.selectedOption,
                        ]}
                        onPress={() => handleOptionSelect('question3', 'option1')}
                    >
                        <Text style={styles.optionText}>Option 1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.option,
                            selectedOptions.question3 === 'option2' && styles.selectedOption,
                        ]}
                        onPress={() => handleOptionSelect('question3', 'option2')}
                    >
                        <Text style={styles.optionText}>Option 2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.option,
                            selectedOptions.question3 === 'option3' && styles.selectedOption,
                        ]}
                        onPress={() => handleOptionSelect('question3', 'option3')}
                    >
                        <Text style={styles.optionText}>Option 3</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <Button title="Submit" onPress={handleSubmit} />
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D3DDE1',
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom:20
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
    },
    questionContainer: {
        flex: 1,
        marginBottom: 20,
    },
    question: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    optionsContainer: {
        marginBottom: 20,
    },
    option: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    optionText: {
        fontSize: 16,
    },
    selectedOption: {
        backgroundColor: '#F9DDFA',
        borderColor: '#9B5DE5',
    },
});

export default TestScreen;