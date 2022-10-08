import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View , Image, StyleSheet, FlatList, Text, TouchableOpacity} from 'react-native';
import { ScreenStackHeaderCenterView } from 'react-native-screens';
import Constants from 'expo-constants';

export default function StreamingScreen({route}){
    console.log(route.params.id);
    return(
        <View style={styles.container}>
            <Text> Teste</Text>
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