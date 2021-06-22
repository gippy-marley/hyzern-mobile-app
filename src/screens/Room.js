import React from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import RoomScreen from '../components/RoomScreen';
import data from '../../data'; 

const Room = () =>{
   const {cont} = data;
  return(
    <View style={{flex:1}}>
      <ScrollView><RoomScreen cont={cont}></RoomScreen></ScrollView>
      <View style={styles.comment}>
      <Text style={{marginLeft: 15,color: 'white', fontSize: 12}}>comment</Text>
      </View> 
    </View>
  )  
}

const styles= StyleSheet.create({
    comment:{
        width: 300,
        height: 30,
        backgroundColor: 'rgba(52,52,52,0.8)',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 30,
        borderRadius: 20,
        borderColor: 'white',
        borderWidth: 0.5        
    }
})

export default Room;