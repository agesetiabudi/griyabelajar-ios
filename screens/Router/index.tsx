import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView } from 'react-native';
import HomeScreen from '../HomeScreen/screen';

export type RootStackParamList = {
  HomeScreen : undefined;
}

const Stack = createNativeStackNavigator();
const MainRouter: React.FC = () => {
  return (
    <SafeAreaView>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name='Home' component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default MainRouter;
