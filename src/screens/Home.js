import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import Header from '../components/Header';
import Start from '../components/Start';
import Main from '../components/Main';
import data from '../../data'; 

const Home = ({navigation}) =>{
   const {cont} = data;
  return(
    <View style={{flex:1}}>
      <View><Header></Header></View>
      <ScrollView><Main cont = {cont} navigation= {navigation} ></Main></ScrollView>
      <View style={styles.tag}><Start></Start></View>    
    </View>
  )  
}

const styles=StyleSheet.create({
  tag: {
    backgroundColor: 'red'    
  }
})

export default Home;