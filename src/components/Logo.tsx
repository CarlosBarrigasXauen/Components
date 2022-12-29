import React from 'react'
import { Image, View } from 'react-native'

export const Logo = () => {
  return (
    <View style={{
        alignItems:'center'
    }}>

        <Image
        source={require('../assets/pngegg.png')}
        style={{
            width:50,
            height:55,
            top:10,
            bottom:500,
            justifyContent:'center'

        }}

        />


        </View>
  )
}
