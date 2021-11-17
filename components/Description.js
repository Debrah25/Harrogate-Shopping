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
        <TouchableOpacity onPress={()=>navigation.navigate("Cart")} style={{margin:50, position: 'relative',bottom:-180, backgroundColor:"white", height:100,alignContent:"bottom",borderRadius:30,}}>
                <Text style={{fontSize:40,fontColor:"white"}}>Add Cart</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
