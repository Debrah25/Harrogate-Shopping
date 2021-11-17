import React from 'react'
import {TextInput} from 'react-native'


export default function SearchBar(){

    return(<TextInput placeholder="Search" style={{borderWidth:1, borderColor:"grey", width: '98%', height:30, margin:2,borderRadius:15}}/>);
}