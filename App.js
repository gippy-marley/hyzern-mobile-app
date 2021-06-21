import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import Header from './src/components/Header';
import Start from './src/components/Start';
import Main from './src/components/Main';
import data from './data'; 

const App = () =>{
   const {cont} = data;
  return(
    <View style={{flex:1}}>
      <View><Header></Header></View>
      <ScrollView><Main cont = {cont} ></Main></ScrollView>
      <View style={styles.tag}><Start></Start></View>    
    </View>
  )

  
}

const styles=StyleSheet.create({
  tag: {
    backgroundColor: 'transparent'
    
  }
})

export default App;