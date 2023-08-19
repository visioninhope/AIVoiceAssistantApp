import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Welcome">
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
