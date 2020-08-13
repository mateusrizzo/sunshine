import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {NTR_400Regular} from '@expo-google-fonts/ntr'

import cloudWind from '../Icons/Cloud-wind.png';
import moon from '../Icons/Moon.png';
import night from '../Icons/Night.png';
import rainy from '../Icons/Rainy.png';
import rainyThunder from '../Icons/Rainy-thunder.png';
import snow from '../Icons/Snow.png';
import sun from '../Icons/Sun.png';
import sunshine from '../Icons/Sunshine.png';
import tornado from '../Icons/Tornado.png';

export default function WeatherCard({weather, temperature, description}){
   
    return(
            <View style={styles.card}>
                <Image source={sun} style={styles.icon}/>
                <Text style={styles.temperature}>{temperature}º</Text>
                <Text style={styles.weather}>{description}</Text>
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
        marginTop: 20,
        height: 270,
        width: 165
    },
    icon: {
        margin: 25,
        width: 94,
        height: 87,
        resizeMode: 'contain'
    },
    temperature: {
        fontFamily: "NTR_400Regular",
        fontSize: 32,
        marginLeft: 6,
    },
    weather: {
        fontFamily: 'NTR_400Regular',
        fontSize: 22,
    }
})