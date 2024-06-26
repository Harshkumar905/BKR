import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './src/Splash';
import Signup from './src/Signup';
import Signup2 from './src/Signup2';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        /*initialRouteName="Splash"*/
        screenOptions={{headerShown: false}}>
          {/* <Stack.Screen name="Splash" component={Splash} /> */}
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Signup2" component={Signup2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
