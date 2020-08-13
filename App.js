import { Provider as PaperProvider } from 'react-native-paper';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput } from 'react-native';
import {IconButton} from 'react-native-paper'
import WeatherCard from './src/components/WeatherCard';
import {NTR_400Regular, useFonts} from '@expo-google-fonts/ntr';
import {Montserrat_300Light} from '@expo-google-fonts/montserrat';
import axios from 'axios';
import { AppLoading } from 'expo';


export default function App() {

  let [fontsloaded] = useFonts ({
    NTR_400Regular,
    Montserrat_300Light,
  });
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState('');
  const [temp, setTemp] = useState();
  const [description, setDescription] = useState('');


  async function searchCity(){
      const key = 'ace400bd17e87b3b357c4015c65f8764';
      const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`)
      setWeather(response.data.weather[0].main);
      setTemp(Math.round(response.data.main.temp));
      setDescription(response.data.weather[0].description);

  }


  if(!fontsloaded){
    return <AppLoading/>
  } else {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Sunshine</Text>
        </View>
        <Text style={styles.label}>Location</Text>
        <View style={styles.form}>
          <TextInput
          placeholder="Search for a city"
          placeholderTextColor="#999"
          autoCapitalize="words"
          value={city}
          onChangeText={setCity}
          style={styles.input}/>
          <IconButton icon="magnify" onPress={searchCity} style={styles.button}></IconButton>
        </View>
        <View>
          {weather ? <WeatherCard weather={weather} temperature={temp} description={description}/> : null}
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#67A2DA",
    paddingBottom: 3,
    justifyContent: "center",
    paddingTop: 20,
  },
  title: {
    textAlign: 'right',
    fontSize: 26,
    color: "#fff",
    marginTop: 5,
    marginRight: 10,
    fontFamily: "NTR_400Regular"
  },
  label:{
    marginTop: 75,
    marginLeft: 60,
    fontSize: 24,
    fontFamily: "NTR_400Regular"
  },
  form: {
    marginLeft: 65,
    marginRight: 65,
    marginTop: 20,
    flexDirection: "row"
  },
  input: {
    marginBottom: 10,
    borderBottomWidth: 1,
    width: 200,
    fontFamily: "Montserrat_300Light"
  },
})
