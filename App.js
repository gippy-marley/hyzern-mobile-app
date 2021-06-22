import 'react-native-gesture-handler';
import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import Home from './src/screens/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Room from './src/screens/Room';

const Stack = createStackNavigator();
const App = () =>{
  
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Room" component={Room} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={{flex: 1}}>
    //   <Home></Home>
    //   <Room></Room>
    // </View>
  )  
}

const styles=StyleSheet.create({
  tag: {
    backgroundColor: 'transparent'    
  }
})

export default App;