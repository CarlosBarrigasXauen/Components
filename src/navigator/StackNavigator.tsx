import { createStackNavigator } from '@react-navigation/stack';
import { Animation101Screen } from '../screens/Animation101Screen';
import { Animation102Screen } from '../screens/Animation102Screen';
import { HomeScreen } from '../screens/HomeScreen';
import { LoginScreenn } from '../screens/LoginScreenn';
import { Seccion1Screen } from '../screens/Seccion1Screen';
import { Seccion2Screen } from '../screens/Seccion2Screen';

export type RootStackParams = {
  LoginScreenn:undefined,
  HomeScreen: undefined,
  Seccion1Screen:undefined,
  Seccion2Screen:undefined,

}

const Stack = createStackNavigator<RootStackParams>();
;

export const StackNavigator = () => {
  return (
    <Stack.Navigator
    initialRouteName='HomeScreen'
      screenOptions={{
        
        headerTintColor:"white",
        headerStyle: {
         backgroundColor:"#5856D6",
          elevation: 0,
          shadowColor: 'transparent'
        },
        cardStyle: {
         
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="LoginScreenn" options={{ title:"Login" }} component={ LoginScreenn } />
      <Stack.Screen name="HomeScreen" options={{ title:"Home" }} component={ HomeScreen } />
      <Stack.Screen name="Seccion1Screen" options={{ title:"Seccion1" }} component={ Seccion1Screen } />
      <Stack.Screen name="Seccion2Screen" options={{ title:"Seccion2Screen" }} component={ Seccion2Screen } />






      

    </Stack.Navigator>
  );
}