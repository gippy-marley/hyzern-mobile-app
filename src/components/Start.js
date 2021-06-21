import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

const Start = () =>{
  return(
    <View style={styles.container}>
    <TouchableOpacity onPress={()=> alert('hi')}>
    <Text style={styles.text} >Start a Talk</Text>
    </TouchableOpacity>
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    marginBottom: 50,
    // marginHorizontal:120,  
    alignItems: 'center',
    // justifyContent:'center'
  },
  text:{
    borderRadius: 30,  
    color: 'white',
    textAlignVertical: 'center',
    textAlign: 'center',
    backgroundColor:'#00A36C',
    fontFamily: 'montserrat',
    fontSize: 16,
    height:48,
    width: 170,
    elevation: 20
  }  
})

export default Start;