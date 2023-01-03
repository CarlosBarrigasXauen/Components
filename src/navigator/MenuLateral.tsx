import React, { useContext } from 'react';


import { StackNavigator } from './StackNavigator';
import { Image, Text, useWindowDimensions, View, TouchableOpacity } from 'react-native';
import { colores, styles } from '../theme/appTheme';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { LoginScreenn } from '../screens/LoginScreenn';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { AuthState, AuthContext } from '../context/AuthContext';



const Drawer = createDrawerNavigator();



export const MenuLateral = () => {
  
    const { width } = useWindowDimensions();
    

    return (
    <Drawer.Navigator
    screenOptions={{
      headerShown:false
 
      
      
    }

    }
       
    
      drawerContent={ (props) => <MenuInterno { ...props } /> }

    >
      <Drawer.Screen name="StackNavigator" component={ StackNavigator } />
      <Drawer.Screen name="LoginScreenn" component={ LoginScreenn } />
      
    </Drawer.Navigator>
  );
}

const MenuInterno = ( { navigation }: DrawerContentComponentProps<DrawerContentOptions>) => {

  const {authState} = useContext(AuthContext)
  return (
    <DrawerContentScrollView>

      {/* Parte del avatar */}
      <View style={ styles.avatarContainer }>
      {
      authState.favouriteIcon&& (

  <Icon
  name={authState.favouriteIcon}
  size={150}
  color={colores.primary}
    />
  )
  }
  
      </View>


      {/* Opciones de menú */}
      <View style={ styles.menuContainer }>

          <View style={styles.container}>
          
          <Icon style={{marginStart:10,marginRight:10, alignSelf:'center'}}
            name="home-outline"
            color="orange"
            size={20}
            />
          <TouchableOpacity 
          
            style={ styles.menuBoton }
            onPress={ () => navigation.navigate('StackNavigator') }
            >
            <Text style={ styles.menuTexto }>Home</Text>
          </TouchableOpacity>
            </View>

            <View style={styles.container}>
          
          <Icon style={{marginStart:10,marginRight:10, alignSelf:'center'}}
            name="log-in-outline"
            color="orange"
            size={20}
            />
          <TouchableOpacity 
          
            style={ styles.menuBoton }
            onPress={ () => navigation.navigate('LoginScreenn') }
            >
            <Text style={ styles.menuTexto }>Login</Text>
          </TouchableOpacity>
            </View>

            <View style={styles.container}>
          
          <Icon style={{marginStart:10,marginRight:10, alignSelf:'center'}}
            name="home-outline"
            color="orange"
            size={20}
            />
          <TouchableOpacity 
          
            style={ styles.menuBoton }
            onPress={ () => navigation.navigate('AcercaDeScreen') }
            >
            <Text style={ styles.menuTexto }>Acerca De</Text>
          </TouchableOpacity>
            </View>

          
            <View style={styles.container}>
          <Icon style={{marginStart:10,marginRight:10, alignSelf:'center'}}
            name="information-circle-outline"
            color="orange"
            size={20}
            />
          <TouchableOpacity 
          
            style={ styles.menuBoton }
            onPress={ () => navigation.navigate('AyudaScreen') }
            >
            <Text style={ styles.menuTexto }>Ayuda</Text>
          </TouchableOpacity>
            </View>
          
      </View>

    </DrawerContentScrollView>
  );
}