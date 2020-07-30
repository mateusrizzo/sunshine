import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput } from 'react-native';
import {IconButton} from 'react-native-paper'

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Sunshine</Text>
        </View>
        <Text style={styles.label}>Location</Text>
        <View style={styles.form}>
          <TextInput style={styles.input}></TextInput>
          <IconButton icon="magnify" style={styles.button}></IconButton>
        </View>
        <View>
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
