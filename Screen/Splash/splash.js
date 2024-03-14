import React from "react";
import {View,Text,Image,StyleSheet, TextInput } from 'react-native';
const splash =()=>{
    return(
        <View>
            <View style={styles.Imagestyle}> 
            <Image source ={require('../Splash/House.png')}/>
            <Text style={styles.Realtastyle}>REALTA</Text>
            </View>
            
        </View>
    );
};

const styles= StyleSheet.create({
    Imagestyle:
    {
         width: 80,
         height: 80,
         top: 361,
         left: 48,
    },

    Realtastyle:{
        width: 169,
        height:90,
        top:-60,
        left:90,
        fontSize:40,
        textAlign:'center',
        color:'#000',
    },
    

});

export default splash;

