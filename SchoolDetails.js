import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const SchoolDetails = () => {

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={require('./assets/connectschoolslogo.png')} style={styles.logo} />
            <Image source={require('./assets/SchoolImage.png')} style={styles.schoolImage} />
            <View style={styles.headerContainer}>
                <View style={styles.schoolInfo}>
                    <Text style={styles.schoolName}>Delhi Public School</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.applyButton}>
                        <Text style={styles.applyButtonText}>APPLY</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewMapButton}>
                        <Text style={styles.viewMapButtonText}>VIEW MAP</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>Rating:</Text>
                <Text style={styles.ratingText}>4.5(20 reviews)</Text>
                <Image source={require('./assets/staricon.jpg')} style={styles.starIcon} />
            </View>
            <Text style={styles.details}>Details:</Text>
            <Text style={styles.minorDetails}>Classes 1 to 12 | Monthly Fees 10k to 13k</Text>
            <Text style={styles.minorDetails}>Student Faculty Ratio 20:1 | Board CBSE</Text>
            <View style={styles.columnsContainer}>
                <View style={styles.column}>
                    <View style={styles.featureItem}>
                        <Text style={styles.featureLabel}>Distance</Text>
                        <Text style={styles.featureValue}>2kms</Text>
                    </View>
                    <View style={styles.featureItem}>
                        <Text style={styles.featureLabel}>Ac Class</Text>
                        <Image source={require('./assets/tickicon.png')} style={styles.tickIcon} />
                    </View>
                    <View style={styles.featureItem}>
                        <Text style={styles.featureLabel}>Swimming Pool</Text>
                        <Image source={require('./assets/tickicon.png')} style={styles.tickIcon} />
                    </View>
                    <View style={styles.featureItem}>
                        <Text style={styles.featureLabel}>Play Area</Text>
                        <Image source={require('./assets/wrongicon.png')} style={styles.wrongIcon} />
                    </View>
                    <View style={styles.featureItem}>
                        <Text style={styles.featureLabel}>Swimming pool</Text>
                        <Image source={require('./assets/tickicon.png')} style={styles.tickIcon} />
                    </View>
                    <View style={styles.featureItem}>
                        <Text style={styles.featureLabel}>Bus Facility</Text>
                        <Image source={require('./assets/tickicon.png')} style={styles.tickIcon} />
                    </View>
                    <View style={styles.featureItem}>
                        <Text style={styles.featureLabel}>Canteen</Text>
                        <Image source={require('./assets/tickicon.png')} style={styles.wrongIcon} />
                    </View>
                    <View style={styles.featureItem}>
                        <Text style={styles.featureLabel}>Sports</Text>
                        <Image source={require('./assets/tickicon.png')} style={styles.tickIcon} />
                    </View>
                    <View style={styles.featureItem}>
                        <Text style={styles.featureLabel}>Hostel</Text>
                        <Image source={require('./assets/wrongicon.png')} style={styles.wrongIcon} />
                    </View>
                    <View style={styles.featureItem}>
                        <Text style={styles.featureLabel}>Co-Ed</Text>
                        <Image source={require('./assets/tickicon.png')} style={styles.tickIcon} />
                    </View>
                </View>
                <View style={styles.column}>
                    <Text style={styles.aboutTitle}>About Delhi Public School:</Text>
                    <Text style={styles.aboutText}>
                        DPS R.K. Puram) is a prestigious co-educational public school located in New Delhi, India. Established in 1972, it is one of the flagship institutions under the Delhi Public School Society.
                        DPS R.K. Puram is known for its academic excellence and holistic education.
                    </Text>
                </View>

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#D3DDE1',
        padding: 20,
    },
    logo: {
        width: '70%',
        height: 200,
        resizeMode: 'contain',
        padding: 0,
        marginBottom: -130,
        marginTop: -70,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    schoolInfo: {
        flex: 1,
        marginRight: 10,
    },
    schoolName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    applyButton: {
        backgroundColor: 'red',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginRight: 10,
    },
    applyButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    viewMapButton: {
        backgroundColor: '#ccc',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    viewMapButtonText: {
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    schoolImage: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
        marginBottom: -80,
        marginTop: -20,
    },
    details: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 12,
    },
    minorDetails: {
        fontSize: 16,
        marginTop: 2,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'justified',
        left: "25%",
        marginTop: 2,
        marginBottom: -12,
    },
    ratingText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    starIcon: {
        width: 20,
        height: 20,
        marginLeft: 5,
    },
    columnsContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    column: {
        flex: 1,
    },
    featureItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    featureLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 5,
    },
    featureValue: {
        fontSize: 16,
    },
    tickIcon: {
        width: 20,
        height: 20,
        tintColor: 'green',
        marginLeft: 5,
    },
    wrongIcon: {
        width: 20,
        height: 20,
        tintColor: 'red',
        marginLeft: 5,
    },
    aboutTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    aboutText: {
        fontSize: 16,
    },
});

export default SchoolDetails;