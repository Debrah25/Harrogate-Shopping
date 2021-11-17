import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text , Image, Dimensions, TouchableHighlight, TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Description({route, navigation}) {
    return (
        <SafeAreaView>
        <View>
            <Image style={{width:Dimensions.get("screen").width, height: 400}} source={{uri:route.params.product.image}}/>
            <Text style={{fontSize:11,textAlign:"center"}}>
               {route.params.product.title} 
            </Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("Cart")} style={{margin:20,bottom:-230, backgroundColor:"black", height:50,alignContent:"bottom",borderRadius:60,width:380,}}>
                <Text style={{fontSize:40,color:"white",textAlign:"center"}}>Add To Cart</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
