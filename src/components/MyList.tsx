import React from 'react';
import { View, Text, SectionList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { HomeScreen } from '../screens/HomeScreen';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';


function MyList() {
  const navigation = useNavigation();
  const itemSeparator = () => {
    return (
      <View style={{
            borderBottomWidth:4,
            opacity: 0.4,
            marginVertical:8
      }}/>
    )
  }
  
  const sections = [
    {
      title: 'Mi Curso',
      data: [
        { id: 1, name: 'Mi Curso' },
     
      ],
    },
    {
      title: 'Acerca de y Version',
      data: [
        { id: 4, name: 'Acerca de' },
        { id: 5, name: 'Version' },
      ],
    },
  ];

  return (
    <SectionList 
      sections={sections}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <View style={styless.container}>
          <Icon style={{marginLeft:10}}
            name="chevron-forward-outline"
            color="orange"
            size={50}
            />
            <Text style={styles.title}>{item.name}</Text></View>
          
        </TouchableOpacity>
      )}
      
      renderSectionHeader={({ section: { title } }) => (
        <Text style={{
          borderBottomWidth:4,
          opacity: 0.4,
          marginVertical:8}}>{title}</Text>
      )}
    />
  );
}

export default MyList;


const styless = StyleSheet.create({

  container:{

      backgroundColor:'white',
      borderRadius:10,
      flexDirection:'row'
  },

  itemText:{
      marginLeft:10,
      alignSelf:'center',
      justifyContent:'center',
      fontSize:17,
      fontWeight:'bold'
  },

 

})