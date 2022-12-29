import React, { useEffect } from 'react'
import { Button, Text, View, TouchableOpacity } from 'react-native'
// import { StackScreenProps } from '@react-navigation/stack'
import { DrawerScreenProps } from '@react-navigation/drawer';
import { styles } from '../theme/appTheme';
import { BotonPersonalizado } from '../components/BotonPersonalizado';
import { useNavigation } from '@react-navigation/core';
import { StackScreenProps } from '@react-navigation/stack';


interface Props extends StackScreenProps<any, any>{};


export const Seccion4Screen = ({navigation}:Props) => {
    


    return (
        <View style={ styles.menuContainer }>                

        <Text>hOLA</Text>
        <BotonPersonalizado texto="Volver a Mi Curso" color='#008CBA' onPress={ () => navigation.navigate('MiCursoScreen')} />

        </View>
    )
}
