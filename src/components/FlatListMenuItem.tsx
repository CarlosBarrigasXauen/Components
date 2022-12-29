import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { menuItem } from '../interfaces/appinterfaces';



interface Props {
    menuItem:menuItem
}

export const FlatListMenuItem = ({menuItem}:Props) => {
    const navigation = useNavigation<any>();
  
  
    return (
        <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate(menuItem.component)}
        >
        <View style={styles.container}>
            <Icon style={{marginLeft:10}}
            name={menuItem.icon}
            color="orange"
            size={30}
            />
          <Text style={styles.itemText}>{menuItem.name} </Text>
          <Text style={styles.itemText}>{menuItem.description} </Text>

        
        <View style={{flex:1}}/>

          <Icon
            name="chevron-forward-outline"
            color="gray"
            size={23}
            />

        </View>
        </TouchableOpacity>
      )
}

const styles = StyleSheet.create({

    container:{

        backgroundColor:'white',
        borderRadius:10,
        flexDirection:'row'
    },

    itemText:{
        marginLeft:10,
        alignSelf:'center',
        justifyContent:'center',
        fontSize:20,
        fontWeight:'bold'
    },

   

})