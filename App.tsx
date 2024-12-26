import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen/screen';

type RootStackNavigatorParamsList = {
  HomeScreen: undefined;
};

const Stack = createStackNavigator<RootStackNavigatorParamsList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App