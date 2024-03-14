import React from "react";
import { View ,Text,Image,StyleSheet} from "react-native";
import { create } from "react-test-renderer";
const welcomepage =()=>{
    return(
        <View>
            <View>
            <Image source={require("../Welcomepage/ha.png")}
            style={styles.Image01}/>

            <Image source={require("../Welcomepage/House02.jpg")}
            style={styles.Image02}/>

            <Image source={require("../Welcomepage/House03.jpg")}
            style={styles.Image03}/>   

            <Image source={require("../Welcomepage/House04.png")}
            style={styles.Image04}/>  
             
            </View>
            <Text style={styles.Welcomtext}>
                Welcome To 
                REALTA
            </Text>
            <Text style={styles.Thebesttext}>
            The best real estate app to make life suitable for you
            </Text>

        </View>

    )};
const styles= StyleSheet.create({
    Image01:{
            width: 130,
            height: 130,
            top: 50,
            left: 35,
            borderRadius: 70
        },

    Image02:{
        width: 120,
        height: 120,
        top: 40,
        left: 220,
        borderRadius:70,
        },
    Image03:{
        width: 100,
height: 100,
left: 50,
borderRadius:70
    },

    Image04:{
        width: 124,
height: 124,
top: 347,
left: 194,
position:"absolute",
borderRadius:70,

    },

Welcomtext:{
    width:315 ,
   
height: 119,
top: 160,
left: 25,
 textAlign:'center',
fontSize: 40,
color:'#7A23A3'

},
Thebesttext:{
    width:355,
    textAlign:'center',
height:68,
top:160,
color:'#000'



},





    });
export default welcomepage;