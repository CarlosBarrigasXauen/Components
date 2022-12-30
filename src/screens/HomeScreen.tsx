import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { FlatListMenuItem } from '../components/FlatListMenuItem'
import { menuItem } from '../interfaces/appinterfaces';
import { styles } from '../theme/appTheme';



const menuItemsHome : menuItem[]= [

{
  name: 'Mi Curso',
  icon:'book-outline',
  component:'MiCursoScreen',
  description:''
},

{
  name: 'Acerca De:',
  icon:'book-outline',
  component:'Seccion2Screen',
  description:'Reforzamiento'
},
{
  name: 'Ayuda',
  icon:'hammer-outline',
  component:'Seccion3Screen',
  description:'Instalación RN'
},
]


export const HomeScreen = () => {
  

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
            borderBottomWidth:4,
            opacity: 0.4,
            marginVertical:8
      }}/>
    )
  }
  
  return (
    <View style={{flex:1, ...styles.globalMargin}}>
    
    
    <FlatList
      data={menuItemsHome}
      renderItem={({item}) => <FlatListMenuItem menuItem={item}/>}
      keyExtractor={(item) => item.name}
      ListHeaderComponent={renderListHeader }   
      ItemSeparatorComponent={itemSeparator} 
    />

    </View>
  )
}
 