import React from 'react'
import { Text,StyleSheet, TextInput, View, Image, TouchableOpacity } from 'react-native'

const startsceen1=({navigation})=> {

    return (
      <View>

        
        <Image source={require('../Startscreen01/picsno1.png')}
        style={styles.Pics01}/>

<Image source={require('../Startscreen01/picsno2.png')}
        style={styles.Pics02}/>

<Image source={require('../Startscreen01/picsno3.png')}
        style={styles.Pics03}/>

<Text style={styles.Textstyle}>THOUSANDS OF THE BEST REAL ESTATE AT AFFORDABLE PRICES</Text>
<View>
    <TouchableOpacity style={styles.TextInput}
            onPress={() => navigation.navigate('Startscreen02')}

    >
    <Text style={styles.Next}>Next</Text>
    </TouchableOpacity>

</View>



      </View>
    );
  };

const styles=StyleSheet.create({
 
    Pics01:{
        width: 300,
        marginTop:20,
height: 350,
top: 150,
left: "15%",
alignItems:'center'

    },

Pics02:{
    width:300,
    height:350,
    top:-380,
    right:50

},
Pics03:{
    width:300,
    height:250,
    top:-700,
    left:120


},
Textstyle:{
    
    width:300,
    height:250,
    top:-480,
    textAlign: 'center',
    fontSize: 25,
    alignSelf:'center',
    lineHeight:30,
    color:'#7A23A3',
    fontWeight: "bold"


},
TextInput:{

width:320,
height:45,
top:-580,
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


export default startsceen1;
