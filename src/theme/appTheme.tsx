import { StyleSheet } from "react-native";
import { Background } from '../components/Background';

export const colores = {
    primary: '#5856D6',

}

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
     
       },

       titulosection2:{
        height:20,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        marginTop:10,
        marginBottom:20,
       },

       descsection:{
        height:50,
        borderRadius:20,
        backgroundColor:'white',
        marginTop:20,
        marginBottom:20,
       },
  
       container:{
     
        backgroundColor:'#5856D6',
        borderRadius:10,
        flexDirection:'row',
        marginBottom:5,
    },
    botonGrande: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    botonGrandeTexto: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    menuContainer: {
    
        marginVertical: 5,
        marginHorizontal: 5,
    },
    menuBoton: {
        marginVertical: 10,
    },
    menuTexto: {
        fontSize: 20,
        color:"white"
    }
    }
)