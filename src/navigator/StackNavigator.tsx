import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { LoginScreenn } from '../screens/LoginScreenn';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { MiCursoScreen } from '../screens/MiCursoScreen';
import { menuItem } from '../interfaces/appinterfaces';
import { SeccionScreen } from '../screens/SeccionScreen';
import { AcercaDeScreen } from '../screens/AcercaDeScreen';
import { AyudaScreen } from '../screens/AyudaScreen';

export type RootStackParams = {
  LoginScreenn:undefined,
  HomeScreen: undefined,
  SeccionScreen: menuItem,
  MiCursoScreen: undefined,
  AcercaDeScreen: undefined,
  AyudaScreen:undefined
}

const Stack = createStackNavigator<RootStackParams>();
;

export const StackNavigator = () => {
  return (
    <Stack.Navigator
   
      screenOptions={{

  
        headerTintColor:"white",
        
        headerStyle: {
         backgroundColor:"#5856D6",
          elevation: 0,
          shadowColor: 'transparent'
          
        },
        cardStyle: {
         
          backgroundColor: 'gray'
        }
        
      }}
    >
      <Stack.Screen name="LoginScreenn" options={{ title:"Login" }} component={ LoginScreenn } />
      <Stack.Screen name="HomeScreen" options={{ title:"Home" }} component={ HomeScreen } />
      <Stack.Screen name="MiCursoScreen" options={{ title:"MiCurso" }} component={ MiCursoScreen } />
      <Stack.Screen name="SeccionScreen" options={{ title:"MiCurso" }} component={ SeccionScreen } />
      <Stack.Screen name="AcercaDeScreen" options={{ title:"Acerca De" }} component={ AcercaDeScreen } />
      <Stack.Screen name="AyudaScreen" options={{ title:"Ayuda" }} component={ AyudaScreen } />




      

    </Stack.Navigator>
  );
}