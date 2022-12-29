import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { FlatListMenuItem } from '../components/FlatListMenuItem'
import { menuItem } from '../interfaces/appinterfaces';
import { styles } from '../theme/appTheme';



const menuItems : menuItem[]= [

{
  name: 'Seccion1:',
  icon:'book-outline',
  component:'Seccion1Screen',
  description:'Introducción'
},

{
  name: 'Seccion2:',
  icon:'book-outline',
  component:'Seccion2Screen',
  description:'Reforzamiento'
},
{
  name: 'Seccion3:',
  icon:'hammer-outline',
  component:'Seccion3Screen',
  description:'Instalación RN'
},
{
  name: 'Seccion4:',
  icon:'book-outline',
  component:'Seccion4Screen',
  description:'Mi Primera App'
},

{
  name: 'Seccion5:',
  icon:'book-outline',
  component:'Seccion1Screen',
  description:'Flex, Position'
},

{
  name: 'Seccion6:',
  icon:'calculator-outline',
  component:'Seccion2Screen',
  description:'Calculadora( iOS)'
},
{
  name: 'Seccion7:',
  icon:'map-outline',
  component:'Seccion3Screen',
  description:'NavegaciónApp'
},
{
  name: 'Seccion8:',
  icon:'book-outline',
  component:'Seccion4Screen',
  description:'Tabs'
},

]


export const HomeScreen = () => {
  

  const renderListHeader = () => {
    return(
      <View style={styles.card}>
     <Text style={styles.title}> Mi Curso</Text>
     <Text style={styles.title2}> React Native: Aplicaciones nativas para IOS y Android</Text>

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
 