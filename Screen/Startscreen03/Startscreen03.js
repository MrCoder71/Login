import React, { Component } from 'react'
import { Image, StyleSheet, Text, View ,TouchableOpacity} from 'react-native'

const Startscreen03 =({navigation}) =>{

    return (
      <View>
        <Image style={styles.Pics01} source={require('../Startscreen03/House.png')}></Image>
      
      
        <Text style={styles.Textstyle}>LET'S FIND THE REAL ESTATE THAT SUITS YOU RIGHT NOW!</Text>


<TouchableOpacity style={styles.TextInput}
        onPress={() => navigation.navigate('loginorregeister')}

>
<Text style={styles.Next}>Next</Text>
</TouchableOpacity>
      
      
      
      </View>
    );
  };

const styles=StyleSheet.create({
    Pics01:{
  width:400,
  height:450,
right:45
    },

    Textstyle:{
    
        width:300,
        height:250,
        top:50,
        textAlign:'justify',
        fontSize: 25,
        alignSelf:"center",
        lineHeight:30,
        color:'#7A23A3',
        fontWeight: "bold",
        
    
    
    },
    
      TextInput:{
        width:320,
        height:45,
        left:24,
        borderRadius:31,
        backgroundColor:"#7A23A3CF",
        top:-50
        
        },
        Next:{
            width:320,
            height:45,
        marginTop:7,
        alignItems:'center',
        justifyContent:'center',
            textAlign:'center',
            color: '#FFFFFF',
            fontSize:20
        
        
        }

})

export default Startscreen03;
