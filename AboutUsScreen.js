import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const AboutUsScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={require('./assets/connectschoolslogo.png')} style={styles.topImage} />
            <Image source={require('./assets/aboutuspage.png')} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>WHO WE ARE</Text>
                <Text style={styles.subTitle}>WE HELP YOU FIND SCHOOLS</Text>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.description}>
                        Connectschoools.com is an AI-powered marketplace for schools in India that helps the user to find the best schools suitable for their child's needs. This platform recommends the best schools based on the user's choice and selections of various streams, subjects, etc.
                    </Text>
                </View>
                <Text style={styles.connectText}>
                    Connect with us for a better understanding of the platform
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#A7D6E7',
        alignItems: 'center',
        paddingTop: 0,
        paddingBottom: 60,
    },
    topImage: {
        width: '70%',
        height: 200,
        resizeMode: 'contain',
        padding: 0,
        marginBottom: -130,
        marginTop: -70,
    },

    image: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
        marginBottom: -100,
        marginTop: 0,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginTop: 0,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: 'center',
        marginTop: 16,
    },
    subTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
        backgroundColor: '#D3DDE1',
        borderRadius: 24,
    },
    descriptionContainer: {

        padding: 16,
        marginBottom: 16,
        width: '100%',
    },
    description: {
        fontSize: 20,
        textAlign: 'center',
    },
    connectText: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#D3DDE1',
        borderRadius: 8,
        fontStyle: 'italic',
    },
});

export default AboutUsScreen;