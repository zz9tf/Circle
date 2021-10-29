import React from 'react'
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={{
      flexDirection: "column",
      justifyContent: "space-around",
    }}>
      <View style={{
        flexDirection: "row",
        margin: "25px",
        border: "thick solid black",
        padding: "10px",
        justifyContent: "space-around",
      }}>
        <Button
          title="+New"
          onPress={() => navigation.navigate("NewEditScreen")}
        />
        
        
        <Button
          title="Products"
          onPress={() => navigation.navigate("Products")
          }
        />
        <Button
          title="About"
          onPress={() => navigation.navigate("About")
          }
        />
      </View>
      <View style={{flexDirection: "row"}}>
        <Image
          style={{flex: 2, resizeMode:'contain'}}
          source={{uri:"https://media.makeameme.org/created/weclome.jpg"}}/>
        <View style={styles.formBox}>
          <Text style={{fontSize:32}}> Register Below </Text>
          <TextInput style={styles.input} placeholder="Last Name"/>
          <TextInput style={styles.input} placeholder="First Name"/>
          <TextInput style={styles.input} placeholder="Gender"/>
          <TextInput style={styles.input} placeholder="Institution"/>
          <TextInput style={styles.input} placeholder="Phone number"/>
          <TextInput style={styles.input} placeholder="Email"/>
          <Button title="Submit" color="red"/>
        </View>
      </View>
      <View style={{alignItems:"center"}}>
        <Button
          title="View my database"
          onPress={() => navigation.navigate("DatabaseViewer")}
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  formBox:{
    flex:1,
    flexDirection:'column',
    alignItems: 'stretch',
    backgroundColor:'#fffff5',
  },
  input:{
    color: 'black',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default LoginScreen;
