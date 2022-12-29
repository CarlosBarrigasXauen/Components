import { createStackNavigator } from '@react-navigation/stack';
import { Animation101Screen } from '../screens/Animation101Screen';
import { Animation102Screen } from '../screens/Animation102Screen';
import { HomeScreen } from '../screens/HomeScreen';
import { LoginScreenn } from '../screens/LoginScreenn';
import { Seccion1Screen } from '../screens/Seccion1Screen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='LoginScreenn'
      screenOptions={{
        headerShown:false,
        headerStyle: {
         
          elevation: 0,
          shadowColor: 'transparent'
        },
        cardStyle: {
         
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="HomeScreen" options={{ title:"Home" }} component={ HomeScreen } />
      <Stack.Screen name="LoginScreenn" options={{ title:"Login" }} component={ LoginScreenn } />
      <Stack.Screen name="Seccion1Screen" options={{ title:"Seccion1Screen" }} component={ Seccion1Screen } />
      <Stack.Screen name="Animation102Screen" options={{ title:"Animation102Screen" }} component={ Animation102Screen } />




      

    </Stack.Navigator>
  );
}