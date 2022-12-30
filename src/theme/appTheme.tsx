import { StyleSheet } from "react-native";

export const styles = StyleSheet.create(
    {
    globalMargin:{
        marginHorizontal:20,
    },

    card:{
        flex:1,
        height:100,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        marginTop:20,
        marginBottom:20,
    },
       title:{
        fontSize:20,
        fontWeight:'bold',
        fontFamily:'Georgia',
        color:'#8000FF'
       },

       title2:{
        fontSize:15,
        alignSelf:'center',
        fontWeight:'bold',
        fontFamily:'Georgia',
        color:'#8000FF'
       },
       titulosection:{
        height:50,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        marginTop:20,
        marginBottom:20,
       },

       descsection:{
        height:50,
        borderRadius:20,
 
        backgroundColor:'white',
        marginTop:50,
        marginBottom:50,
       }
    }
)