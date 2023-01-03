import React, { useContext } from 'react'
import { Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { TouchableIcon } from '../components/TouchableIcon';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { colores } from '../theme/appTheme';


export const AyudaScreen = () => {


const {authState} = useContext(AuthContext)



  return (

    <View>
    <TouchableIcon iconName='airplane-outline'/>
    <TouchableIcon iconName='attach-outline'/>
    <TouchableIcon iconName='bonfire-outline'/>
    <TouchableIcon iconName='calculator-outline'/>
    <TouchableIcon iconName='images-outline'/>



        <Text>{JSON.stringify(authState,null,4)}</Text>

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
  )
}
