import React from 'react'
import { Image, StyleSheet, Text, View ,TouchableOpacity} from 'react-native'

const Startscreen02 =({navigation})=> {
  
    return (
      <View>
        <Image style={styles.booknow} source={require('../Startscreen02/booknow.png')}/>
      
        <Text style={styles.Textstyle}>BOOK A REAL ESTATE QUICKLY & EASILY WITH ONE CLICK</Text>


    <TouchableOpacity style={styles.TextInput}
            onPress={() => navigation.navigate('Startscreen03')}

    >
    <Text style={styles.Next}>Next</Text>
    </TouchableOpacity>
      
      
      
      </View>

      
    );
};

const styles= StyleSheet.create({
  booknow:{
    width: 337,
    height: 400,
    top: 93,
    left: 27,
    
  },
  Textstyle:{
    
    width:300,
    height:250,
    top:100,
    textAlign: 'justify',
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
export default Startscreen02;
