import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {NTR_400Regular} from '@expo-google-fonts/ntr'

import Icon from './Icon';

export default function WeatherCard({weather, temperature, description, place}){
    return(
            <View style={styles.card}>
                <Icon weather={weather}/>
                <Text style={styles.temperature}>{temperature}ºC</Text>
                <Text style={styles.weather}>{description}</Text>
                <Text style={styles.place}>{place}</Text>
            </View>
            );

}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        marginLeft: 90,
        marginTop: 40,
        height: 280,
        width: 165
    },
    temperature: {
        fontFamily: "NTR_400Regular",
        fontSize: 32,
        marginLeft: 6,
    },
    weather: {
        fontFamily: 'NTR_400Regular',
        fontSize: 22,
    },
    place: {
        fontFamily: 'NTR_400Regular',
        fontSize: 14,
    },
})