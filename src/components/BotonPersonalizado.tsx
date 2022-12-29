import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../theme/appTheme'

interface Propss {
    texto:string;
    color?:string;
    onPress: () => void;

};

interface Props extends StackScreenProps<any, any>{
    texto:string;
    color?:string;
    onPress:() => void;

};

export const BotonPersonalizado = ({texto,color,onPress}:Propss) => {
  return (

                <TouchableOpacity
                      style={{
                          ...styles.botonGrande,
                          backgroundColor:color
                      }}
                       onPress={onPress}
                  >
                      <Text style={ styles.botonGrandeTexto }>{texto}</Text>
                  </TouchableOpacity>
  )
}
