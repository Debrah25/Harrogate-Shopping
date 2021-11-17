import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        margin: 10, 
        borderWidth: 2,
        borderColor: 'white', 
        borderRadius: 10,
        backgroundColor: '#fff',
        width: '100%'
    },
    image: {
        flex: 2,
        height: 150,
        resizeMode: 'contain',
        justifyContent:'center'
    },
    rightcontainer: {
        padding: 10,
       backgroundColor: 'white',
       flex: 3
    },
    title:{
       fontSize: 21,
    
    },
    price:{
        fontSize: 22,
        fontWeight: 'bold'
    },
    oldPrice:{
        fontSize: 15,
        fontWeight: 'normal',
       textDecorationLine: 'line-through'
    },
    ratingscontainer:{
    flexDirection: 'row'
    }
    
    })

    export default styles;
    