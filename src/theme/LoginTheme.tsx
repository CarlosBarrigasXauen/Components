import { StyleSheet } from "react-native";

export const LoginStyles = StyleSheet.create(
    {
        title: {
            color:'white',
            fontSize:30,
            fontWeight:'bold',
            marginTop:20,

        },
        label:{
            marginTop:25,
            color:'white',
            fontWeight:'bold',

        },

        inputField:{
            color:'white',
            fontSize:20,
            borderBottomColor:'white',
            borderBottomWidth:2,
            paddingBottom:4

        },
        buttonContainer:{
            alignItems:'center',
            marginTop:50,
            
        },
        button:{
            borderWidth:2,
            backgroundColor:'white',
            borderColor:'black',
            paddingHorizontal:20,
            paddingVertical:5,
            borderRadius:100
        },
        buttoff:{
            borderWidth:2,
            backgroundColor:'red',
            borderColor:'black',
            paddingHorizontal:20,
            paddingVertical:5,
            borderRadius:100
        },
        newUserContainer:{
                alignItems:'flex-end',
                marginTop:10
        },
        formContainer:{
            flex:1,
            paddingHorizontal:30,
            justifyContent:'center',
            height:600,
            marginBottom:200,
        }

    }
)