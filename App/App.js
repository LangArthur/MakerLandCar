/**
 * React native app for the MakerlandCar project.
 * 
 * @author Ltabis
 * @date 02/03/2020
 */

// Needed for React Naviguation 5.
import 'react-native-gesture-handler';

// Import components
import React from 'react';
import {
  View,
  Image
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Project imports.
import ConnectButton from "./src/components/ConnectButton"
import ViewStyles from './src/components/styles/view'
import IDE from "./src/components/IDE"

// navigator to redirect to a specific page.
const Stack = createStackNavigator();

// Starting point.
const App: () => React$Node = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Se connecter">
          <Stack.Screen name="Se connecter" component={Connect} />
          <Stack.Screen name="Programmer" component={IDE} />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

const Connect: () => React$Node = ({ navigation }) => {
  return (
    <View style={ViewStyles.content}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={require('./src/ressources/bliiida-logo.png')}/>
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <ConnectButton/>
      </View>
    </View>
  );
};

export default App;