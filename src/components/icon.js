import React, { useState } from 'react';
import {Image, StyleSheet} from 'react-native';

import cloudWind from '../Icons/Cloud-wind.png';
import moon from '../Icons/Moon.png';
import night from '../Icons/Night.png';
import rainy from '../Icons/Rainy.png';
import rainyThunder from '../Icons/Rainy-thunder.png';
import snow from '../Icons/Snow.png';
import sun from '../Icons/Sun.png';
import sunshine from '../Icons/Sunshine.png';
import tornado from '../Icons/Tornado.png';

export default function Icon (weather){
    const [icon, setIcon] = useState();
        switch (weather.weather) {
              case "Clouds": return <Image style={styles.icon} source={cloudWind}/>;
              case "Moon": return <Image style={styles.icon} source={moon}/>;
              case "Night": return <Image style={styles.icon} source={night}/>;
              case "Rain": return <Image style={styles.icon} source={rainy}/>;
              case "Thunderstorm": return <Image style={styles.icon} source={rainyThunder}/>;
              case "Snow": return <Image style={styles.icon} source={snow}/>;
              case "Clear": return <Image style={styles.icon} source={sun}/>;
              case "Sunshine": return <Image style={styles.icon} source={sunshine}/>;
              case "Tornado": return <Image style={styles.icon} source={tornado}/>;
              default: return <Image style={styles.icon} source={sunshine}/>;
          }
}

const styles = StyleSheet.create({
    icon: {
        margin: 25,
        width: 94,
        height: 87,
        resizeMode: 'contain'
    },
})