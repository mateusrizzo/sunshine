import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput } from 'react-native';
import {IconButton} from 'react-native-paper'
import WeatherCard from './src/components/WeatherCard';

import axios from 'axios';


export default function App() {
  const [city,setCity] = useState('');
  const [data, setData] = useState('');
  async function searchCity(){
      const key = 'ace400bd17e87b3b357c4015c65f8764';
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`)
        .then(response => console.log(response))
  }
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
          <WeatherCard data={data}/>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#67A2DA",
    paddingBottom: 12,
    justifyContent: "center",
    paddingTop: 30,
  },
  title: {
    textAlign: 'right',
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 5,
    marginRight: 10,
  },
  label:{
    marginTop: 75,
    marginLeft: 60,
    fontWeight: "bold",
    fontSize: 18,
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
  },
})
