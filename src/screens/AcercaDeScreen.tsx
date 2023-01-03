import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';

export const AcercaDeScreen = () => {
  return (
    <View>
        <View style={styles.titulosection}>
        <Text style={styles.title}> Versión</Text>
        </View>

        <View style={styles.titulosection2}>
        <Text style={styles.title2}>V1.0.0</Text>
        </View>

        <View style={styles.titulosection}>
            <Text style={styles.title}> Lenguaje</Text>
        </View>

        <View style={styles.titulosection2}>
        <Text style={styles.title2}>React Native 0.61</Text>
        </View>
        
    </View>
  )
}
