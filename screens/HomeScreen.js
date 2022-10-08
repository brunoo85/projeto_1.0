import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View} from 'react-native';
import Constants from 'expo-constants';

import Header from '../components/Header';
import Menu from '../components/Menu';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <Header navigation={navigation}/>
        <Menu navigation={navigation}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A2172',
    marginTop: Constants.statusBarHeight,
  },
});