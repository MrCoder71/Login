import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import screens
import splash from './Screen/Splash/splash';
import welcomepage from './Screen/Welcomepage/Welcomepage';
import startsceen1 from './Screen/Startscreen01/startsceen1';
import Startscreen02 from './Screen/Startscreen02/Startscreen02';
import Startscreen03 from './Screen/Startscreen03/Startscreen03';
import loginorregeister from './Screen/loginorregeister/loginorregeister';
import Signupscreen from './Screen/Signupscreen/Signupscreen';
import Registerscreen from './Screen/Registerscreen/Registerscreen';
import Home from './Screen/Home/Home';
import createaccount from './Screen/Createaccount/createaccount';

// Create stack navigator
const Stack = createNativeStackNavigator();
const App =()=>{
  return(
    <NavigationContainer>
    <Stack.Navigator>
      {/* <Stack.Screen name="splash"  component={splash} options={{headerShown:false}} /> */}
      {/* <Stack.Screen name="welcomepage" component={welcomepage} options={{headerShown:false}}/> */}
      {/* <Stack.Screen name="Start screen 01" component={startsceen1} options={{headerShown:false}}/> */}
      {/* <Stack.Screen name="Startscreen02" component={Startscreen02} options={{headerShown:false}}/> */}
      {/* <Stack.Screen name="Startscreen03" component={Startscreen03} options={{headerShown:false}}/> */}
      {/* <Stack.Screen name="loginorregeister" component={loginorregeister} options={{headerShown:false}}/> */}
      <Stack.Screen name="Registerscreen" component={Registerscreen} options={{headerShown:false}}/>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="createaccount" component={createaccount} options={{headerShown:false}}/>

      {/* <Stack.Screen name="Signupscreen" component={Signupscreen} options={{headerShown:false}}/> */}
    </Stack.Navigator>
  </NavigationContainer>
  );
};
export default  App;