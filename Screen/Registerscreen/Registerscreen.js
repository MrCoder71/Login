import React, { Component } from 'react'
import { Image, StyleSheet, Text, View,TextInput ,TouchableOpacity } from 'react-native'

const Registerscreen =({navigation}) =>{
 
    return (
      <View>
        <Image style={styles.Logo} source={require('../Registerscreen/logo.png')}/>
     <Text style={styles.Createaccount}>Login To Your Account</Text>
     {/* <Input placeholder='First Name' /> */}
     <TextInput  style={styles.Email} 
       placeholder="Email"
       keyboardType="email-address"
       autoCapitalization="none"/>
     
     <TextInput  style={styles.Password} 
       placeholder="Password"
       secureTextEntry={true}
       autoCapitalization="none"
    //    onSubmitEditing={()=> alert("yES")}/>
  
       />
       <TouchableOpacity style={styles.Rembermebox}
       />
       <Text style={styles.RembermeText}> Remember me
       </Text>

<TouchableOpacity style={styles.TextInput}
        // onPress={() => navigation.navigate('Signupscreen')}
        onPress={() => navigation.navigate('Home')}

>
<Text style={styles.Next}>Sign in </Text>
</TouchableOpacity>

<Image  style={styles.Line1}
source={require('../Registerscreen/Line.png')}/>

<Image  style={styles.Line2}
source={require('../Registerscreen/Line.png')}/>

<Text style={styles.continuewith}>
or continue with
</Text>

<View > 
    <TouchableOpacity style={styles.Facebooklogo}>
    
    <Image  style={styles.Facebook} source={require('../Registerscreen/facebook.png')}/>

    </TouchableOpacity>
    <View >
    <TouchableOpacity style={styles.Googlelogo}>
    
    <Image  style={styles.Google} source={require('../Registerscreen/google.png')}/>

    </TouchableOpacity>
<View > 
    <Text style={styles.account}>Dont’t have an Account?</Text>
           <TouchableOpacity 
           onPress={() => navigation.navigate('createaccount')}>

            <Text style={styles.signin}>Signup</Text>
            

            </TouchableOpacity> 
            </View>
    </View>
</View>
     
      </View>
    );
  };

  const styles =StyleSheet.create({
    Logo:{
        width: 150,
        height: 150,
        top: 100,
        alignSelf:'center', 
    },
    Createaccount:{
        // width: 274,
        // height: 36,
        top: 100,
        alignSelf:'center',
        fontSize:20,
        color:"#000",
        fontWeight:'bold',

    },
    Email:{
        width: 320,
        alignSelf:'center',
    height: 56,
    top:130,
    // left: 7,
    borderRadius:10,
    borderWidth:1,
     
    
    
    backgroundColor:'#C4C4C4',
    fontWeight:'bold',
    
    },
    Password:{
        width: 320,
        alignSelf:'center',
    height: 56,
    top:150,
    // left: 7,
    borderRadius:10,
    borderWidth:1,
    backgroundColor:'#C4C4C4',
    fontWeight:'bold'

    },
    Rembermebox:{
        width:18,
        height:18,
        borderWidth:2,
        borderColor:'black',
        top:167,
        left:23,
        borderRadius:3
    },
    RembermeText:{
        top:148,
        left:45,
        color:'#000',
        fontWeight:'bold'
    },
    TextInput:{
        width:320,
        height:45,
        left:24,
    
        borderRadius:31,
        backgroundColor:"#7A23A3CF",
        top:180
        
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
        Line1:{
            width:125,
            marginTop:220,
            alignSelf:'flex-start',
            borderWidth:1
        },
        Line2:{
            width:125,
            alignSelf:'flex-end',
            borderWidth:1,
        },
        continuewith:{
            alignSelf:'center',
            fontWeight:'bold',
            fontSize:13,
            color:'#000',
           marginTop:-12

        },
        Facebooklogo:{
            width: 45,
            alignSelf:'center',
        height: 45,
        // right:100,
        top:15,
        borderRadius:10,
        borderWidth:2,
        right:35,
        // backgroundColor:'#C4C4C4',
        },
        Facebook:{
            width:55,
            height:55,
        // top:-32,
        //     left:55,
        right:6.5,
        bottom:6.5,
        
           

        },
        Googlelogo:{
           width: 45,
           
         height: 45,
        // right:100,
         top:-30,
         left:35,
         borderRadius:10,
         borderWidth:2,
         alignSelf:'center'
       
        },
        Google:{
            width:50,
            height:50,
     
        right:4,
        bottom:4,
        

        },
        account:{
            marginTop:-15,
             left:75,
            
            fontWeight:'bold',
            color:"#000"
          },
          signin:{
            bottom:20,
            fontWeight:'bold',
            color: "#7A23A3CF",
             left:230,

          
        
          },


  })
export default Registerscreen;
