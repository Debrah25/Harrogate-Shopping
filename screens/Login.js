import React from "react";
import {View,Text,Image,TouchableOpacity, StyleSheet,} from "react-native";
import{AntDesign} from '@expo/vector-icons';

//import { black } from "react-native-paper/lib/typescript/styles/colors";

export default function Login({navigation}){

    const land = () => {
        navigation.navigate("Home");
    }

    return (
        <View style={{  flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Image style=
            {{width: 400,
                 height:400,
                 borderRadius: 20,
                 marginBottom: 10,
        
            }}
            source={{
                uri: "https://images.unsplash.com/photo-1519332978332-21b7d621d05e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMTc3NDE0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
             }} 
             />
             <Text style= {{color: "rgba(0,0,0,0.6)", fontSize:30}}>  WELCOME TO DEBRIDGE </Text>

           <Text style={{color: "black",fontSize: 20,fontWeight: "300"}}> 
            FOR ALL YOUR APPLE PRODUCTS,SHOP HERE!
            </Text>

            <TouchableOpacity onPress={land} style ={{backgroundColor: "white", padding: 10, flexDirection: "row", paddingHorizontal: 60, borderRadius: 40, marginTop: 20}}>
                <Text style={{fontSize: 15, marginLeft: 15}}>
                <AntDesign name="google"size={30} color="black"/> Login with Gmail
                </Text>
            </TouchableOpacity>

            
             <TouchableOpacity 
             onPress={land}
              style={{ 
                backgroundColor:"white",
                padding: 10, 
                flexDirection:"row",
                paddingHorizontal:60,
                borderRadius:40,
                marginTop:20, }} >
            <Text style={{fontSize:15,marginLeft:15}}><AntDesign name="apple1"size={30} color="black"/> Login with Apple </Text> 

             </TouchableOpacity>  
                    </View>

    );
}


