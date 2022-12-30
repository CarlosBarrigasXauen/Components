import React, { useEffect } from 'react'
import { Button, Text, View, TouchableOpacity } from 'react-native'
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { menuItem } from '../interfaces/appinterfaces';

interface Props extends StackScreenProps<any,any>{}{
  
};


export const SeccionScreen = (menuItem:Props) => {


    return (
    <View style={styles.titulosection}>
        <Text style={styles.title}>MI TITULO</Text>



        </View>
        
    )
}
