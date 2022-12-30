import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { LoginScreenn } from '../screens/LoginScreenn';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { MiCursoScreen } from '../screens/MiCursoScreen';
import { SeccionItem, menuItem } from '../interfaces/appinterfaces';
import { SeccionScreen } from '../screens/SeccionScreen';

export type RootStackParams = {
  LoginScreenn:undefined,
  HomeScreen: undefined,
  SeccionScreen: menuItem,
  MiCursoScreen: undefined,

}

const Stack = createStackNavigator<RootStackParams>();
;

export const StackNavigator = () => {
  return (
    <Stack.Navigator
    initialRouteName='HomeScreen'
      screenOptions={{
        headerRight: () => (
           <TouchableOpacity style={{marginLeft:50}}
           onPress={() => console.log('Hola!')}>
           <Icon name='menu-outline' />
         </TouchableOpacity>
         ),
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


      

    </Stack.Navigator>
  );
}