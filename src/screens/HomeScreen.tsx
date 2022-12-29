import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { FlatListMenuItem } from '../components/FlatListMenuItem'
import { menuItem } from '../interfaces/appinterfaces';
import { styles } from '../theme/appTheme'



const menuItems : menuItem[]= [

{
  name: 'Seccion1',
  icon:'cube-outline',
  component:'Seccion1Screen'
},

{
  name: 'Animation102',
  icon:'cube-outline',
  component:'Animation102Screen'
}

]


export const HomeScreen = () => {
  

  const renderListHeader = () => {
    return(
      <View style={{marginBottom:20}}>
     <Text style={styles.title}> Opciones de menu</Text>

      </View>
    )
  }

  const itemSeparator = () => {
    return (
      <View style={{
            borderBottomWidth:2,
            opacity: 0.4,
            marginVertical:8
      }}/>
    )
  }
  
  return (
    <View style={{flex:1, ...styles.globalMargin}}>
    
    
    <FlatList
      data={menuItems}
      renderItem={({item}) => <FlatListMenuItem menuItem={item}/>}
      keyExtractor={(item) => item.name}
      ListHeaderComponent={renderListHeader }   
      ItemSeparatorComponent={itemSeparator} 
    />

    </View>
  )
}
 