import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
      <Text>Sunshine</Text>
      </View>
      <View>
        <Input></Input>
        <Button></Button>
      </View>
      <View>

      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {

  },

})
