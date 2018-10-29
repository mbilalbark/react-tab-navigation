import React from 'react'
import {Image,View,Text, StyleSheet} from 'react-native'

class Profile extends React.Component {

    render(){
        return(
            <View>
                 <Image style={styles.avatar} source={{uri: 'http://mbilalbark.com/images/profil.jpg'}}/>
                 <View style={styles.body}>
                    <Text style={styles.name}>Muhammed Bilal Bark</Text>
                 </View>
            </View>
        )
    }
}
export default Profile
const styles = StyleSheet.create({
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
    },
    body:{
      marginTop:150,
      marginLeft:30
    },
    name:{
      fontSize:28,
      color: "#696969",
      fontWeight: "600"
    },
  });