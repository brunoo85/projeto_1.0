import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View , Image, StyleSheet, FlatList, Text, TouchableOpacity} from 'react-native';
import { ScreenStackHeaderCenterView } from 'react-native-screens';

export default function StreamingScreen({route}){
    console.log(route.params.id);
    return(
        <View>
            <Text> Teste</Text>
        </View>
    )
}