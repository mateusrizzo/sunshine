import React, { useState } from 'react';
import {Image} from 'react-native';

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
        switch (weather) {
              case 'Cloudy': return <Image source={cloudWind}/>;
              case 'Moon': return <Image source={moon}/>;
              case 'Night': return <Image source={night}/>;
              case 'Rain': return <Image source={rainy}/>;
              case 'Thunderstorm': <Image source={rainyThunder}/>;
              case 'Snow': return <Image source={snow}/>;
              case 'Sunny': return <Image source={sun}/>;
              case 'Sunshine': return <Image source={sunshine}/>;
              case 'Tornado': return <Image source={tornado}/>;
              default: return <Image source={sunshine}/>;
          }
}