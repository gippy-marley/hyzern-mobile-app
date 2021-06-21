import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';

const Main = (props) =>{
  const {cont} = props;
  return(
    <View style={styles.container}>   
      {cont.map((x)=>{   
        return(
        <View key={x.id}>    
        <View style={styles.flex}>
        <Image style={styles.imagefor} source={x.imagefor}></Image>
        <Image style={styles.imagefor} source={x.imageagainst}></Image>
        </View>
        {/* <View>
        <Text>{x.votesfor}</Text>
        <Text>{x.votesagainst}</Text>
        </View> */}
        <View>          
          <View style={styles.flex}>
          <Image source={x.avatar}
          style={styles.avatar} resizeMode='cover'></Image>        
          <Text style={styles.text}>{x.topic}</Text>
          </View>        
        <Text style={styles.textsmall}>{x.name} - {x.views}</Text>
        </View>      
        </View> ) 
      })}
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    backgroundColor: '#1b1b1b',
    marginTop:0
  },
  flex:{
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  imagefor:{
    marginTop: 5,
    width: 180,
    height:200
  },
  text:{
    fontSize: 15,
    color: 'white'
  },
  textsmall:{
    fontSize: 10,
    color: 'gray',
    paddingLeft: 52,
    marginTop: -15
  },
  avatar:{
    marginHorizontal: 10,
    height:30,
    width:30,
    borderRadius:50
  }
  
})

export default Main;