import React, { useEffect } from 'react'
import { Button, Text, View, TouchableOpacity } from 'react-native'
// import { StackScreenProps } from '@react-navigation/stack'
import { DrawerScreenProps } from '@react-navigation/drawer';
import { styles } from '../theme/appTheme';
import { BotonPersonalizado } from '../components/BotonPersonalizado';
import { useNavigation } from '@react-navigation/core';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams,'SeccionScreen'>{};


export const Seccion1Screen = () => {
   


    return (
<View>
        <Text>Breve introducción del curso e instalaciones que recomienda el profesor.</Text>


        </View>
    )
}
