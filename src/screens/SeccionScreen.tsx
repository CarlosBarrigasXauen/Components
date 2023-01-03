import React, { useEffect } from 'react'
import { Button, Text, View, TouchableOpacity } from 'react-native'
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any,any>{};


export const SeccionScreen = ({route,navigation}:Props) => {

    const params=route.params;
    



    useEffect(() => {
      navigation.setOptions({

        title:params!.nombre

      })
    
    
    }, [])
    

    return (

        <View>


    <View style={styles.titulosection}>
        <Text style={styles.title}>MI TITULO</Text>
        </View>
        
        <View>
                   <Text>{
                       JSON.stringify(params,null,3)
                    }</Text>
        </View>
    </View>
    )
}
