// import 'react-native-gesture-handler';
import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import Header from './src/components/Header';
import Start from './src/components/Start';
import Main from './src/components/Main';
import data from './data'; 
// import { NavigationContainer } from '@react-navigation/native';

const App = () =>{
   const {cont} = data;
  return(
    // <NavigationContainer>
    <View style={{flex:1}}>
      <View><Header></Header></View>
      <ScrollView><Main cont = {cont} ></Main></ScrollView>
      <View style={styles.tag}><Start></Start></View>    
    </View>
    // </NavigationContainer>
  )  
}

const styles=StyleSheet.create({
  tag: {
    backgroundColor: 'transparent'    
  }
})

export default App;