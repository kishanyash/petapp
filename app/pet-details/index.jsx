import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import PetInfo from '../../components/PetDetails/PetInfo';
import PetSubInfo from '../../components/PetDetails/PetSubInfo';
import AboutPet from '../../components/PetDetails/AboutPet';
import OwnerInfo from '../../components/PetDetails/OwnerInfo';
import { StyleSheet } from 'react-native';

export default function PetDetails() {
    const pet = useLocalSearchParams();
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerTransparent: true,
            headerTitle: '',
        });
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView>
                {/**Pet info */}
                <PetInfo pet={pet} />

                {/**Pet SubInfo */}
                <PetSubInfo pet={pet} />

                {/**about */}
                <AboutPet pet={pet} />

                {/*owner details */}
                <OwnerInfo pet={pet} />

                <View style={{ height: 70 }}></View>
            </ScrollView>
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.adoptBtn}>
                    <Text style={styles.adoptBtnText}>Adopt Me</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    adoptBtn: {
        padding: 15,
        backgroundColor: '#E8820E',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    adoptBtnText: {
        textAlign: 'center',
        fontFamily: 'Outfit-Medium',
        fontSize: 20,
        color: '#fff', // Make text color white
    },
    bottomContainer: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        padding: 15, 
        backgroundColor: '#fff', 
    },
});
