import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View , Image, StyleSheet, FlatList, Text, TouchableOpacity} from 'react-native';
import InfoDev from '../components/InfoDev';
import Constants from 'expo-constants';

export default function Infos({navigation}){
    return(
        <View style={styles.container}>
        <StatusBar style="auto" />
        <InfoDev/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: 'red',
    },

});