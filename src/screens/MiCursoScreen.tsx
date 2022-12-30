import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { FlatListMenuItem } from '../components/FlatListMenuItem'
import { FlatListMenuItemM } from '../components/FlatListMenuItemM'

import { menuItem } from '../interfaces/appinterfaces';
import { styles } from '../theme/appTheme';



const menuItems : menuItem[]= [

{
  name: 'Seccion1:',
  icon:'book-outline',
  component:'SeccionScreen',
  description:'Introducción'
},

{
  name: 'Seccion2:',
  icon:'book-outline',
  component:'SeccionScreen',
  description:'Reforzamiento'
},
{
  name: 'Seccion3:',
  icon:'hammer-outline',
  component:'SeccionScreen',
  description:'Instalación RN'
},
{
  name: 'Seccion4:',
  icon:'book-outline',
  component:'SeccionScreen',
  description:'Mi Primera App'
},

{
  name: 'Seccion5:',
  icon:'book-outline',
  component:'SeccionScreen',
  description:'Flex, Position'
},

{
  name: 'Seccion6:',
  icon:'calculator-outline',
  component:'SeccionScreen',
  description:'Calculadora( iOS)'
},
{
  name: 'Seccion7:',
  icon:'map-outline',
  component:'SeccionScreen',
  description:'NavegaciónApp'
},
{
  name: 'Seccion8:',
  icon:'book-outline',
  component:'SeccionScreen',
  description:'Tabs'
},

]


export const MiCursoScreen = () => {
  

  const renderListHeader = () => {
    return(
      <View style={styles.card}>
     <Text style={styles.title}> Mi Curso</Text>

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
      renderItem={({item}) => <FlatListMenuItemM menuItem={item}/>}
      keyExtractor={(item) => item.name}
      ListHeaderComponent={renderListHeader }   
      ItemSeparatorComponent={itemSeparator} 
    />

    </View>
  )
}
 