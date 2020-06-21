import React from 'react';
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//auth routes
import Home from './src/pages/auth/Home'

//not auth routes
import Register from './src/pages/notAuth/Register'
import Login from './src/pages/notAuth/Login'

const Stack = createStackNavigator();

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer >
        <Stack.Navigator screenOptions={{
          headerLeft: null
        }} initialRouteName="Login">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
 
  );
}

export default App;