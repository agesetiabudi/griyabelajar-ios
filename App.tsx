import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen/screen';
import ScanScreen from './screens/Scan/screen';
import ExploreScreen from './screens/ExploreScreen/screnn';

export type RootStackNavigatorParamsList = {
  HomeScreen: undefined;
  ScanScreen: undefined;
  ExploreScreen: { url: string }
};

const Stack = createStackNavigator<RootStackNavigatorParamsList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ScanScreen" component={ScanScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ExploreScreen" component={ExploreScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App