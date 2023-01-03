import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateral } from './src/navigator/MenuLateral';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyList from './src/components/MyList';
import { AuthProvider } from './src/context/AuthContext';

import SplashScreen from 'react-native-splash-screen';

 const App = () => {

  React.useEffect(() => {

    SplashScreen.hide();
    
  }, [])
  

  
  return (
    
    <NavigationContainer>
      <AppState>
      
      <MenuLateral/>
      
      </AppState>
    </NavigationContainer>
  
  );
}

const AppState = ({children}:any) => {

  return(
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App;