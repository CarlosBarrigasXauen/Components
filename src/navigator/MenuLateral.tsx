import { createDrawerNavigator } from '@react-navigation/drawer';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Animation101Screen } from '../screens/Animation101Screen';
import { HomeScreen } from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  

    useEffect(() => {
        SplashScreen.hide();
        
      }, [100])

    return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="Animation101Screen" component={Animation101Screen} />
    </Drawer.Navigator>
  );
}