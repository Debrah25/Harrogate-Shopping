import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Cart() {
    return (
        <SafeAreaView>
        <View justifyContent="center">
            <Text style={{fontSize:200}}>Cart</Text>
        </View>
        </SafeAreaView>
    )
}
