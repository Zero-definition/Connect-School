import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, Text } from 'react-native';
import { Dimensions } from 'react-native';
const { wwidth, wheight } = Dimensions.get('window');
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './homepage'
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleCreateAccount = () => {
        // Implement your create account logic here
        // For example, navigate to the registration screen
        navigation.navigate('Register');
    };

    return (
        <View style={styles.container}>
            <Image source={require('./assets/loginpageimage.png')} style={styles.image} />
            <Text style={styles.loginText}>Login Page</Text>
            <Text style={styles.subtitleText}>Welcome back! Login to your account</Text>
            <View style={styles.contentContainer}>
                <Text style={styles.label}>Username or Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your username or email"
                    value={email}
                    onChangeText={setEmail}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <Button title="Login" onPress={() => navigation.navigate('Hpage')} />
                <Text style={styles.signupText}>Don't have an account?</Text>
                <Button title="Create Account" onPress={handleCreateAccount} color="red" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F9DDFA',
        width:wwidth,
        height:wheight,
        padding:40
    },
    image: {
        flex: 1,
        width: '100%',
        resizeMode: 'cover',
    },
    loginText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    subtitleText: {
        fontSize: 16,
        marginBottom: 28,
        textAlign: 'center',
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
    signupText: {
        marginTop: 80,
        marginBottom: 16,
        fontSize: 18,
        textAlign: 'center',
    },
});

export default LoginScreen;