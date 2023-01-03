import React, { useEffect } from 'react'
import { FlatList, Text, View, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import { FlatListMenuItem } from '../components/FlatListMenuItem'
import { menuItem } from '../interfaces/appinterfaces';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import {  } from 'react-native-gesture-handler';
import { DrawerScreenProps } from '@react-navigation/drawer'



const menuItemsHome : menuItem[]= [

{
  name: 'Mi Curso',
  icon:'book-outline',
  component:'MiCursoScreen',
  description:''
},

{
  name: 'Acerca De la Versión',
  icon:'book-outline',
  component:'AcercaDeScreen',
  description:''
},
{
  name: 'Ayuda',
  icon:'hammer-outline',
  component:'AyudaScreen',
  description:''
},
]

interface Props extends DrawerScreenProps<any,any>{};

export const HomeScreen = ({navigation}:Props) => {
  
  useEffect(() => {

    navigation.setOptions({

      headerLeft: ()  => 

      <TouchableOpacity
      
      onPress={ () => navigation.toggleDrawer()}>
        
      <Icon style={{marginLeft:10, alignItems:'center'}}
      name="menu-outline"
      color="white"
      size={25}
      />
      
      </TouchableOpacity>
    }
    )
  
  
  }, [])
  

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
 