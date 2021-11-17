import * as React from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from "./screens/Home";
import Login from "./screens/Login";
import Cart from "./screens/cart";
import Description from './components/Description';
//import { SafeAreaView } from 'react-native-safe-area-context';

//const Tab = createBottomTabNavigator();
export default function App(){
  const[input, setInput]= React.useState("")
  const MainNavigator = createStackNavigator();
  return(
    <View style={{flex:1}}>
      <NavigationContainer>
        <MainNavigator.Navigator screenOptions={{headerShown:false}} initialRouteName="Login">
        <MainNavigator.Screen name="Login" component ={Login}/>
          <MainNavigator.Screen name="Home" component ={HomeScreen}/>
          <MainNavigator.Screen name="Cart" component ={Cart}/>
          <MainNavigator.Screen name="Description" component ={Description}/>
        </MainNavigator.Navigator>
      </NavigationContainer>
    </View>
  );
}
