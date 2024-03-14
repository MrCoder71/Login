import React, { Component } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const loginorregeister=({navigation})=> {
  
    return (
      <View>
        <Image style={styles.logo} source={require('../loginorregeister/logo.png')}/>
      
      <Text style={styles.Letyouin}>Lets You in</Text>
      <View>
      <TouchableOpacity >
<View style={styles.Facebook}>
  <Image style={styles.facebooklogo} source={require('../loginorregeister/facebook.png')}></Image>
<Text style={styles.ContinuewithFacebook}> Continue with Facebook
</Text>
</View>
      </TouchableOpacity>
      <TouchableOpacity >

<View style={styles.google}>
  <Image style={styles.googlelogo} source={require('../loginorregeister/google.png')}></Image>
<Text style={styles.Continuewithgoogle}> Continue with Google </Text>
</View>
      </TouchableOpacity>
      <Image style={styles.Line1} source={require('../loginorregeister/Line.png')}/>
      <Image style={styles.Line2} source={require('../loginorregeister/Line.png')}/>

<Text style={styles.or}>or</Text>

<TouchableOpacity style={styles.TextInput}
        // onPress={() => navigation.navigate('Signupscreen')}
        onPress={() => navigation.navigate('Registerscreen')}

>
<Text style={styles.Next}>Sign in with password</Text>
</TouchableOpacity>

<Text style={styles.account}>Dont’t have an Account?</Text>
           <TouchableOpacity 
           onPress={() => navigation.navigate('Signupscreen')}>

          {/* //  onPress={() => navigation.navigate('Signupscreen')}> */}
            <Text style={styles.signin}>Signup</Text>
            

            </TouchableOpacity> 
            </View>
      
      </View>
    );
  };

  const styles =StyleSheet.create({
    logo:{
      width: 178,
height: 175.73,
top: 60,
left:15,
// alignItems:'center',
alignSelf:'center',
justifyContent:"space-around",
alignContent:'center'
    },
  Letyouin:{
top:50,
textAlign:'center',
color:'#000',
fontSize:20,
fontWeight: "bold",
color:'#7A23A3',


  },
  Facebook:{
    width: 320,
    alignSelf:'center',
height: 56,
top:130,
// left: 7,
borderRadius:10,
borderWidth:1,
backgroundColor:'#C4C4C4',



  },
  facebooklogo:{
    width:50,
    height:50,
    alignSelf:'flex-start',
    marginLeft:15
  },
  ContinuewithFacebook:{
   top:-35,
fontSize:15,   
alignSelf:'center',
color:'#000',
fontWeight:'bold',

  },
  google:{
    width: 320,
    alignSelf:'center',
height: 56,
top:150,
// left: 7,
borderRadius:10,
borderWidth:1,
backgroundColor:'#C4C4C4',


  },
  googlelogo:{
    width:50,
    height:50,
    alignSelf:'flex-start',
    marginLeft:15

  },
  Continuewithgoogle:{
    top:-35,
 fontSize:15,   
 alignSelf:'center',
 color:'#000',
 fontWeight:'bold',

   },

Line1:{
  top:220,
},
Line2:{
  top:220,
alignSelf:'flex-end'
},
or:{
  top:208,
  alignSelf:'center',
  fontWeight:'bold',


},

TextInput:{
  width:320,
  height:45,
  left:24,
  
  borderRadius:31,
  backgroundColor:"#7A23A3CF",
  top:270
  
  },
  Next:{
      width:320,
      height:45,
  marginTop:10,
  alignItems:'center',
  justifyContent:'center',
      textAlign:'center',
      color: '#FFFFFF',
      fontSize:15,
      alignSelf: 'center',
      fontWeight:'bold',

  
  
  },
  account:{
    top:280,
    left:85,
    // alignSelf:'center',
    fontWeight:'bold',
  },
  signin:{
    top:260,
    left:240,
    fontWeight:'bold',
    color: "#7A23A3CF",

  }
  })

  
  export default loginorregeister;

